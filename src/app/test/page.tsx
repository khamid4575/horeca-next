import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://horeca-seo.vercel.app"),
  keywords: ["supply partners", "horeca", "restaurants", "hotels"],
  title: {
    default: "Test page",
    template: "%s | Supply Partners",
  },
  openGraph: {
    description:
      "Развивайте свой бизнес в HORECA с надежным партнером. Сделайте запрос уже сейчас и получите каталог с расценками на товары для заказа.",
    images: ["https://horeca-seo.vercel.app/imgs/hero.png"],
  },
  description: "Ваш деловой партнер lom lom lom",
};

const page = () => {
  return (
    <div>page</div>
  )
}

export default page