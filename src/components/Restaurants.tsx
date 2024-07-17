const Restaurants = () => {
  return (
    <section id="restaurants" className="pt-24">
      <div className="lg:w-1/2 font-medium lg:text-xl">
        <h1 className="lg:text-4xl text-3xl font-extrabold">
          Рестораны и бары.{" "}
          <span className="text-gray-500">Строящиеся и действующие.</span>
        </h1>
        <p className="font-medium my-5">
          На нашей площадке вы сможете приобрести профессиональное оборудование
          для ресторанного бизнеса.
        </p>
        <p className="font-medium">Мы представляем ведущих поставщиков для:</p>
        <ul className="mb-5 list-disc list-inside">
          <li>Инженерных систем</li>
          <li>Противопожарных систем, оборудования и мебели</li>
          <li>Оборудования для ресторанов и баров</li>
          <li>ИТ-оборудования и программного обеспечения</li>
          <li>Гигиена и расходники</li>
          <li>Инвентарь для уборки и проффесиональная химия</li>
          <li>Одноразовая посуда и упаковка</li>
        </ul>
        <p>
          Сделайте запрос уже сейчас и получите каталог с расценками на товары
          для заказа.
        </p>
      </div>
    </section>
  );
};

export default Restaurants;
