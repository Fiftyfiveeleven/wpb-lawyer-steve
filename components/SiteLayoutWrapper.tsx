"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
