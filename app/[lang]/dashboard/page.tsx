import { Metadata } from "next";
import { useTranslation } from "@/i18n";
import { Lang } from "types";
import Index from "./index";

interface IPageProps {
  params: { lang: Lang };
}

export async function generateMetadata({
  params: { lang },
}: IPageProps): Promise<Metadata> {
  // eslint-disable-next-line
  const { t } = await useTranslation(lang);

  return {
    title: t("tamjai"),
  };
}

export default function Page({ params: { lang } }: IPageProps) {
  return <Index lang={lang} />;
}
