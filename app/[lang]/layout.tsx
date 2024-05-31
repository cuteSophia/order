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
    <html
      lang={lang}
      dir={dir(lang)}
      className="text-[16px] 2xs:text-[17.5px] xs:text-[20.48px]"
    >
      <body className={`${inter.className} text-black-primary font-sans`}>
        <div className="w-full max-w-screen-xs min-h-screen m-auto bg-neutral-100">
          {children}
        </div>
      </body>
    </html>
  );
}
