"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { useTranslation } from "@/i18n/client";
import { Lang } from "types";
import { OrderCard } from "@/components";
import styles from "./index.module.scss";

interface IProps {
  lang: Lang;
}

export default function Index({ lang }: IProps) {
  const { t } = useTranslation(lang);
  const router = useRouter();

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://s3-alpha-sig.figma.com/img/6d39/520d/9ffaeec9ffa445fbf675b3053e3d23b3?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f26S8rCEKF~0afQbNNLaVadVXOhECF6HptlYZP9x5g78EpvrR3yjGemsStF~HtLFk9sOjoI9YkkM02p1nFDmpjAe0N6R0YijUsj6EJ4b27qdvLX9G6kOPMyg8bxfFP-g3YtZYLfS9pjHAb2Q1qVPFITtAowIQNpRBZT2OOMIvm5-YyxFghTnRkT2L8gVNpRRf~VQUfAnFrVF6pSu~jksFfODgiXJH7wU0J2a30iqJkv35z9xcnLn9id1apDTDoBTvuuDToWCaBJn6RZgmVEsQpMh4MnOmhTlDo60dUxTECDTbKUPyJ6b1xK-sWDYDHa~C3UFl3k8iSZ~I3tHa18NSg__"
          alt="banner"
          width="100%"
        />
      </div>
      <div className={styles["order-card-wrap"]}>
        <OrderCard lang={lang} />
      </div>
      {/* {t("order")}
      <Link href={`/${lang}/cart`} className={styles.a}>
        cart link
      </Link>
      <br />
      <Link href={`/${lang}/confirm-order`}>confirm-order</Link>
      <br />
      <Link href={`/${lang}/order-detail`}>order-detail</Link>
      <br />
      <button type="button" onClick={() => router.push("/cart")}>
        cart button
      </button>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/assets/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <p>test</p> */}
    </div>
  );
}
