import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    metadataBase: new URL("https://horeca-seo.vercel.app"),
    keywords: ["supply partners", "horeca", "restaurants", "hotels"],
    title: {
      default: "Supply Partners",
      template: "%s | Supply Partners",
    },
    openGraph: {
      description:
        "Развивайте свой бизнес в HORECA с надежным партнером. Сделайте запрос уже сейчас и получите каталог с расценками на товары для заказа.",
      images: ["https://horeca-seo.vercel.app/imgs/hero.png"],
    },
    description: "Ваш деловой партнер",
  };

export default function Home() {
  redirect("/ru");
}