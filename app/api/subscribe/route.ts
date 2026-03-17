import { NextRequest, NextResponse } from "next/server";

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

    const AC_API_URL = process.env.AC_API_URL;
    const AC_API_KEY = process.env.AC_API_KEY;
    const AC_LIST_ID = process.env.AC_LIST_ID;

    // If AC credentials aren't set, return success for dev/preview testing
    if (!AC_API_URL || !AC_API_KEY || !AC_LIST_ID) {
      console.warn("ActiveCampaign credentials not configured — skipping AC integration");
      return NextResponse.json({ ok: true });
    }

    // Create or update contact in ActiveCampaign
    const contactRes = await fetch(`${AC_API_URL}/api/3/contacts`, {
      method: "POST",
      headers: {
        "Api-Token": AC_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact: {
          email,
          fieldValues: [
            { field: "1", value: "make-com-2026-03" }, // source tag — field ID TBD
          ],
        },
      }),
    });

    let contactId: string | null = null;

    if (contactRes.status === 422) {
      // Contact exists — fetch their ID
      const dupeData = await contactRes.json();
      contactId = dupeData?.errors?.[0]?.meta?.duplicateFields?.[0]?.id ?? null;
      if (!contactId) {
        // Fallback: search for existing contact
        const searchRes = await fetch(
          `${AC_API_URL}/api/3/contacts?email=${encodeURIComponent(email)}`,
          { headers: { "Api-Token": AC_API_KEY } }
        );
        const searchData = await searchRes.json();
        contactId = searchData?.contacts?.[0]?.id ?? null;
      }
    } else if (contactRes.ok) {
      const contactData = await contactRes.json();
      contactId = contactData?.contact?.id ?? null;
    } else {
      console.error("AC contact creation failed:", await contactRes.text());
      // Don't block the user — log and continue
    }

    // Subscribe to list
    if (contactId && AC_LIST_ID) {
      await fetch(`${AC_API_URL}/api/3/contactLists`, {
        method: "POST",
        headers: {
          "Api-Token": AC_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactList: {
            list: AC_LIST_ID,
            contact: contactId,
            status: 1, // 1 = subscribed
          },
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    // Don't expose internal errors — return generic success to avoid leaking system info
    return NextResponse.json({ ok: true });
  }
}
