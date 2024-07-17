import { useTranslations } from "next-intl";

const Restaurants = () => {
  const t = useTranslations();
  return (
    <section id="restaurants" className="pt-24">
      <div className="lg:w-1/2 font-medium lg:text-xl">
        <h1 className="lg:text-4xl text-3xl font-extrabold">
          {t('restaurantsAndBars.title')} {" "}
          <span className="text-gray-500">{t('restaurantsAndBars.inOperationAndConstruction')}</span>
        </h1>
        <p className="font-medium my-5">
          {t('restaurantsAndBars.offer')}
        </p>
        <p className="font-medium">
          {t('hotelInConstruction.offer')}
        </p>
        <ul className="mb-5 list-disc list-inside">
          <li>{t('hotelInConstruction.engineeringSystems')}</li>
          <li>{t('fireProtectionSystems')}</li>
          <li>{t('hotelInConstruction.equipmentForRestaurants')}</li>
          <li>{t('hotelInConstruction.ITEquipment')}</li>
          <li>{t('restaurantsAndBars.hygieneAndConsumables')}</li>
          <li>{t('restaurantsAndBars.cleaningEquipment')}</li>
          <li>{t('restaurantsAndBars.packaging')}</li>
        </ul>
        <p>
          {t('restaurantsAndBars.makeARequestNow')}
        </p>
      </div>
    </section>
  );
};

export default Restaurants;
