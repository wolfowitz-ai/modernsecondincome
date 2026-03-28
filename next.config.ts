import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/downloads/automation-stack.pdf",
        destination:
          "https://raw.githubusercontent.com/wolfowitz-ai/modernsecondincome-assets/main/pdfs/side-business-automation-stack.pdf",
        permanent: false, // 307 — keeps it swappable when the final PDF is ready
      },
    ];
  },
};

export default nextConfig;
