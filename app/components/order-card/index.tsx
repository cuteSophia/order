"use client";

import { useTranslation } from "@/i18n/client";
import { Lang } from "types";
import styles from "./index.module.scss";

export type OrderCardProps = {
  lang: Lang;
};

export const OrderCard = ({ lang }: OrderCardProps) => {
  const { t } = useTranslation(lang);

  return (
    <div className={styles["comp-order-card"]}>
      <div className={styles["left"]}>
        <div className={styles["order-type"]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/dine-in.png"
            alt="dine-in"
            className={styles["icon"]}
          />
          <p className={styles["text"]}>Dine-in</p>
        </div>
        <div className={styles["shop"]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/shop.png" alt="shop" className={styles["icon"]} />
          <p className={styles["text"]}>Long Ching Place</p>
        </div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["order-info"]}>
          <p className={styles["order-no"]}>A2-003</p>
          <div className={styles["order-button"]}>{t("order")}</div>
        </div>
      </div>
    </div>
  );
};
