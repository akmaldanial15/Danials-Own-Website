import React from "react";
import "@/styles/main-site.css";
import RootNavbar from "@/components/main-site/RootNavbar";
import RootFooter from "@/components/main-site/RootFooter";
import { MainSiteLanguageProvider } from "@/context/MainSiteLanguageContext";

export const metadata = {
  title: "Danial's Web & Systems | Website, Sistem & Graphic Design",
  description:
    "Servis website, sistem perniagaan, graphic design dan edit gambar mengikut skop dan bajet. Landing page serendah RM79 dan edit gambar serendah RM5.",
};

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainSiteLanguageProvider>
      <div className="main-site no-invert">
        <RootNavbar />
        <main className="flex-1">{children}</main>
        <RootFooter />
      </div>
    </MainSiteLanguageProvider>
  );
}
