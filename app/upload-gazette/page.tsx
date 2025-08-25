import Layout from "@/app/components/Layout";
import GazetteUploadClient from "./GazetteUploadClient";
import Script from "next/script";

export default function GazetteUploadPage() {
  return (
    <Layout>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9231506459397955"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <GazetteUploadClient />
    </Layout>
  );
}
