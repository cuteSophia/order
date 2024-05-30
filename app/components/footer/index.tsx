"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "@/i18n/client";
import { Lang } from "types";
import { languages } from "@/i18n/setting";
import Link from "next/link";

export type FooterProps = {
  lang: Lang;
};

export const Footer = ({ lang }: FooterProps) => {
  const { t } = useTranslation(lang);
  console.log({ lang });

  const router = useRouter();

  return (
    <div style={{ marginTop: 50, color: "green" }}>
      {t("tamjai")}
      <br />
      {languages
        .filter((l) => lang! !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link 
              href={`/${l}/dashboard`}>{l}
              </Link>
            </span>
          );
        })}
    </div>
  );
};
