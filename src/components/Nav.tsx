"use client";

const links = [
  { name: "Отели", path: "hotels" },
  { name: "Рестораны", path: "restaurants" },
  { name: "Услуги", path: "services" },
  { name: "Доставка и оплата", path: "shipping" },
  { name: "Контакты", path: "contacts" },
];

const Nav = () => {
  return (
    <div className="flex gap-8">
      {links.map((link) => (
        <a
          href={`#${link.path}`}
          key={link.name}
          className="text-xl font-medium"
        >
          {link.name}
        </a>
      ))}
      <h1 className="ml-12">Language</h1>
    </div>
  );
};

export default Nav;
