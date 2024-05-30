import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "@/i18n/setting";
import { Lang } from "types";
import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "Tamjai",
  description: "譚仔三哥",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Lang };
}>) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={inter.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
