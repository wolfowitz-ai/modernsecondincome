import { NextRequest, NextResponse } from "next/server";

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

// MSI campaign tags — applied to every opt-in
const MSI_TAGS = ["MSI", "msi-make-com", "msi-subscribed"];

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
    // Optional: workflow ID to add contact to automatically
    const GHL_WORKFLOW_ID = process.env.GHL_WORKFLOW_ID;

    // If GHL credentials aren't set, return success for dev/preview
    if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
      console.warn("GHL credentials not configured — skipping GHL integration");
      return NextResponse.json({ ok: true });
    }

    const headers = {
      Authorization: `Bearer ${GHL_API_TOKEN}`,
      Version: GHL_VERSION,
      "Content-Type": "application/json",
    };

    // 1. Create or update contact in GHL
    let contactId: string | null = null;

    const createRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        email,
        tags: MSI_TAGS,
        source: "MSI Landing Page",
      }),
    });

    if (createRes.ok) {
      const createData = await createRes.json();
      contactId = createData?.contact?.id ?? null;
    } else if (createRes.status === 422 || createRes.status === 400) {
      // Contact likely already exists — look them up
      const lookupRes = await fetch(
        `${GHL_BASE}/contacts/?locationId=${GHL_LOCATION_ID}&email=${encodeURIComponent(email)}`,
        { headers }
      );
      if (lookupRes.ok) {
        const lookupData = await lookupRes.json();
        contactId = lookupData?.contacts?.[0]?.id ?? null;

        // Apply tags to existing contact
        if (contactId) {
          await fetch(`${GHL_BASE}/contacts/${contactId}/tags`, {
            method: "POST",
            headers,
            body: JSON.stringify({ tags: MSI_TAGS }),
          });
        }
      }
    } else {
      console.error("GHL contact creation failed:", createRes.status, await createRes.text());
    }

    // 2. Add to workflow if workflow ID is configured
    if (contactId && GHL_WORKFLOW_ID) {
      const workflowRes = await fetch(
        `${GHL_BASE}/contacts/${contactId}/workflow/${GHL_WORKFLOW_ID}`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ eventStartTime: new Date().toISOString() }),
        }
      );
      if (!workflowRes.ok) {
        console.error("GHL workflow add failed:", workflowRes.status, await workflowRes.text());
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ ok: true });
  }
}
