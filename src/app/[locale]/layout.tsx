import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://horeca-seo.vercel.app"),
  keywords: ["supply partners", "horeca", "restaurants", "hotels"],
  alternates: {
    canonical: "/",
    languages: {
      ru: "/ru",
      uz: "/uz",
    },
  },
  title: {
    default: "Supply Partners",
    template: "%s | Supply Partners",
  },
  openGraph: {
    description:
      "Развивайте свой бизнес в HORECA с надежным партнером. Сделайте запрос уже сейчас и получите каталог с расценками на товары для заказа.",
    images: ["https://horeca-seo.vercel.app/imgs/hero.png"],
  },
  // description: "Ваш деловой партнер lom lom lom",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/SP.png" />
        <link rel="alternate" hrefLang="ru" href="/ru" />
        <link rel="alternate" hrefLang="uz" href="/uz" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
