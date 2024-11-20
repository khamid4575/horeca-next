import { keywords } from "@/config/keyword";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Script from "next/script"; // Google Analytics uchun kerak
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://supplypartners.uz"),
  keywords,
  alternates: {
    canonical: "https://supplypartners.uz/ru",
    languages: {
      // ru: "https://supplypartners.uz/ru",
      uz: "https://supplypartners.uz/uz",
    },
  },
  title: {
    default: "Supply Partners - Партнер по продуктам HORECA",
    template: "%s | Supply Partners",
  },
  openGraph: {
    title: "Supply Partners - Партнер по продуктам HORECA",
    url: "https://supplypartners.uz",
    siteName: "Supply Partners",
    description:
      "Развивайте свой бизнес в HORECA с надежным партнером. Сделайте запрос уже сейчас и получите каталог с расценками на товары для заказа.",
    images: ["https://supplypartners.uz/imgs/hero.png"],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@supplypartners",
    title: "Supply Partners - Партнер по продуктам HORECA",
    description:
      "Развивайте свой бизнес в HORECA с надежным партнером. Сделайте запрос уже сейчас и получите каталог с расценками на товары для заказа.",
    images: ["https://supplypartners.uz/imgs/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
  },
  description:
    "Развивайте свой бизнес в HORECA с надежным партнером. Сделайте запрос уже сейчас и получите каталог с расценками на товары для заказа.",
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
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Supply Partners",
              image: [
                "https://heroca.vercel.app/assets/SP-C0iylDad.png",
                "https://supplypartners.uz/imgs/hero.png",
                "https://avatars.mds.yandex.net/get-altay/1871297/2a0000016be0b59a35820264318f54a4f6ca/XL", // add more images here
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Улица Бабура, 34",
                addressLocality: "Яккасарайский район",
                addressRegion: "Ташкент",
                postalCode: "100100",
                addressCountry: "UZ",
              },
              telephone: "+998999208800",
              openingHours: "Mo-Fr 09:00-18:00",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "41.288184",
                longitude: "69.251808",
              },
              url: "https://supplypartners.uz",
              sameAs: [
                "https://www.facebook.com/supplypartners",
                "https://x.com/supplypartners",
                "https://instagram.com/supplypartners",
                "https://t.me/supplypartners",
              ],
              offers: [
                {
                  "@type": "Offer",
                  name: "Консалтинг и сотрудничество в гостиничной сфере",
                  url: "https://supplypartners.uz/ru#hotels",
                },
                {
                  "@type": "Offer",
                  name: "Консалтинг и сотрудничество в ресторанной сфере",
                  url: "https://supplypartners.uz/ru#restaurants",
                },
                {
                  "@type": "Offer",
                  name: "Консалтинг и сотрудничество в сфере HORECA",
                  url: "https://supplypartners.uz/ru#services",
                },
              ],
            }),
          }}
        />

        <link rel="icon" href="/imgs/SP.png" />
        <link rel="canonical" href="https://supplypartners.uz/ru" />
        {/* <link rel="alternate" hrefLang="ru" href="https://supplypartners.uz/ru" /> */}
        <link
          rel="alternate"
          hrefLang="uz"
          href="https://supplypartners.uz/uz"
        />
        {/* Google Analytics scriptini qo'shish */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-LDE6Y3FWR0`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LDE6Y3FWR0', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
