import { Metadata } from "next";
import "./globals.css"

// export const metadata: Metadata = {
//   metadataBase: new URL("https://horeca-seo.vercel.app"),
//   keywords: ["supply partners", "horeca", "restaurants", "bars", "hotels"],
//   title: {
//     default: "Supply Partners",
//     template: "%s | Supply Partners",
//   },
//   openGraph: {
//     description:
//       "Развивайте свой бизнес в HORECA с надежным партнером. Сделайте запрос уже сейчас и получите каталог с расценками на товары для заказа.",
//     images: ["https://horeca-seo.vercel.app/imgs/hero.png"],
//   },
//   description: "Ваш деловой партнер",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}