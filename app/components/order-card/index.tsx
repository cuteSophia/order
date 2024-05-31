"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/client";
import { Lang, OrderType } from "types";

export type OrderCardProps = {
  lang: Lang;
  orderType?: OrderType;
  storeName?: String;
  tableNo?: String;
  onClickOrder?: () => void;
};

const defaultProps = {
  orderType: "dine-in",
};

export const OrderCard = (p: OrderCardProps) => {
  const { lang, ...props } = { ...defaultProps, ...p };
  const { t } = useTranslation(lang);

  return (
    <div className="flex bg-white rounded-xl py-6 px-4">
      <div className="flex-1">
        <div className="flex items-center">
          <span className="relative w-8 h-8 mr-1">
            <Image src="/assets/dine-in.png" alt="order-type" fill priority />
          </span>
          <p className="flex-1 text-lg font-medium text-primary">
            {props?.orderType}
          </p>
        </div>
        <div className="flex items-center mt-3">
          <span className="relative w-5 h-5 ml-1.5 mr-2.5">
            <Image src="/assets/shop.png" alt="shop" fill priority />
          </span>
          <p className="flex-1 text-xs font-medium">{props?.storeName}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xs mt-1">{props?.tableNo}</p>
        <button
          className="w-22 h-10 bg-primary rounded-full font-semibold mt-1"
          onClick={props?.onClickOrder}
        >
          {t("order")}
        </button>
      </div>
    </div>
  );
};
