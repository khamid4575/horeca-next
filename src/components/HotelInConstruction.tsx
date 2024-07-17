import { useTranslations } from "next-intl";

const HotelInConstruction = () => {
  const t = useTranslations("");
  return (
    <section id="hotels" className="pt-24">
      <div className="lg:w-1/2 font-medium lg:text-xl">
        <h1 className="lg:text-4xl text-3xl font-extrabold">
          {t("navbar.hotels")}.{" "}
          <span className="text-gray-500">
            {t("hotelInConstruction.newConstruction")}
          </span>
        </h1>
        <p className="font-medium my-5">
          {t("hotelInConstruction.ourB2Bplatform")}
        </p>
        <p className="font-medium">{t("hotelInConstruction.offer")}</p>
        <ul className="mb-5 list-disc list-inside">
          <li>{t("hotelInConstruction.FF&OS")}</li>
          <li>{t("hotelInConstruction.engineeringSystems")}</li>
          <li>{t("fireProtectionSystems")}</li>
          <li>{t("hotelInConstruction.equipmentForRestaurants")}</li>
          <li>{t("hotelInConstruction.laundryEquipment")}</li>
          <li>{t("hotelInConstruction.optimizingUtilityCosts")}</li>
          <li>{t("hotelInConstruction.ITEquipment")}</li>
        </ul>
        <p>{t("motto")}</p>
      </div>
      <div></div>
    </section>
  );
};

export default HotelInConstruction;
