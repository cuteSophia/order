"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { useTranslation } from "@/i18n/client";
import { Lang } from "types";
import { OrderCard } from "@/components";

interface IProps {
  lang: Lang;
}

export default function Index({ lang }: IProps) {
  const { t } = useTranslation(lang);
  const router = useRouter();

  return (
    <>
      <div className="relative w-full h-64 rounded-b-xl overflow-hidden opacity-80">
        <Image
          src="https://s3-alpha-sig.figma.com/img/6d39/520d/9ffaeec9ffa445fbf675b3053e3d23b3?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f26S8rCEKF~0afQbNNLaVadVXOhECF6HptlYZP9x5g78EpvrR3yjGemsStF~HtLFk9sOjoI9YkkM02p1nFDmpjAe0N6R0YijUsj6EJ4b27qdvLX9G6kOPMyg8bxfFP-g3YtZYLfS9pjHAb2Q1qVPFITtAowIQNpRBZT2OOMIvm5-YyxFghTnRkT2L8gVNpRRf~VQUfAnFrVF6pSu~jksFfODgiXJH7wU0J2a30iqJkv35z9xcnLn9id1apDTDoBTvuuDToWCaBJn6RZgmVEsQpMh4MnOmhTlDo60dUxTECDTbKUPyJ6b1xK-sWDYDHa~C3UFl3k8iSZ~I3tHa18NSg__"
          alt="banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="pt-4.5 px-4 pb-3">
        <OrderCard
          lang={lang}
          orderType="dine-in"
          storeName="Long Ching Place"
          tableNo="A2-003"
          onClickOrder={() => router.push("/cart")}
        />
      </div>
      <div className="px-4 pb-8">
        <div className="relative w-full h-80 rounded-xl overflow-hidden">
          <Image
            src="https://s3-alpha-sig.figma.com/img/e902/dc39/adfd3e17185cfcce30c7db2e08b80b98?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c3lPQTNsXMBk5X0C8~906KaRKmgR6Ct~xFJmS7T2MwH40Oo5YgOcGH9P9N08FKxQ~jIdqFQ0~skqfLMuDv4N2O5N~uxOQF8prF3rEyz91TtZdRlKsOhV8po3sp48vER65da2lpI22HH2Qg1QvqDxt1jQaYgL9q2nU4nZ9j8Ts2FF~p43z6MYvPhtIqqR5nnCkUsMvGOMss2paMtVDyML~LKQ4baUKrgoExQPrwM8XUaJq70c0KAJ7W1fMjB0ts2AUfieZKi-4AaaL94-hUFgjN3dqLSI9LDZY~BebtjwWRGrNPpjBhFLyZOZW8La6ClibAgGLpa1th9SfwNkab~xlA__"
            alt="banner"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="h-3"></div>
        <div className="relative w-full h-80 rounded-xl overflow-hidden">
          <Image
            src="https://s3-alpha-sig.figma.com/img/b113/5fc4/689e5c7acb95665d84cd11e7315c4e3c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QgROgmY5sGknvqObVo93DWKfRXzeyB3Rfwedrg~BiLVmvhhAiaSR3D5um3Gvqz4wdyagZOVTh3QcDW5s1efe4YDjxgs5TpeQcxRI0n36gx8~z2dD1aPLa2BUBkfC95ErMNQlSd9vFgsX3Xk47DKPi7yrcEcCprD~I7xSi5HNJWWtNzc5Tx7kGNdFyKxsBw0Pl~BLvN5hG1ICiK9EahGeujP-lDLwJ-hWflWg9qLtuPQSCLY8YAH17FntWC1nk5LFjnXPop4T~SSVc8uLBWG4DNnDBLrMrUaTPQPRLo7xkP2Ox2Xhh8XmrVeaNB7gii5EFFCyWgf5nDiGMLhlXpvBLw__"
            alt="banner"
            fill
            priority
            className="object-cover"
          />
        </div>
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
    </>
  );
}
