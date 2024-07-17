import { useTranslations } from "next-intl";

const HotelInActive = () => {
  const t = useTranslations();
  return (
    <section className="pt-24">
      <div className="lg:w-1/2 font-medium lg:text-xl">
        <h1 className="lg:text-4xl text-3xl font-extrabold">
          {t("navbar.hotels")}.{" "}
          <span className="text-gray-500">
            {t("hotelInOperation.inOperation")}
          </span>
        </h1>
        <p className="font-medium my-5">{t("hotelInOperation.offer")}</p>
        <ul className="mb-5 list-disc list-inside">
          <li>{t("hotelInOperation.receptionService")}</li>
          <li>{t("hotelInOperation.housekeeping")}</li>
          <li>{t("fireProtectionSystems")}</li>
          <li>{t("hotelInOperation.engineeringService")}</li>
          <li>{t("hotelInOperation.foodService")}</li>
          <li>{t("hotelInOperation.securityService")}</li>
        </ul>
        <p>{t("motto")}</p>
      </div>
    </section>
  );
};

export default HotelInActive;
