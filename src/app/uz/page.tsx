import Contacts from "@/components/Contacts";
import ScrollToTopIcon from "@/components/customUI/ScrollToTopIcon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HotelInActive from "@/components/HotelInActive";
import HotelInConstruction from "@/components/HotelInConstruction";
import Restaurants from "@/components/Restaurants";
import Services from "@/components/Services";
import Shipping from "@/components/Shipping";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://horeca-seo.vercel.app"),
  // keywords,
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
      "Ishonchli hamkor bilan HORECAda biznesingizni rivojlantiring. Hoziroq so'rov yuboring va buyurtma berish uchun tovarlar narxlari bilan katalogni oling.",
    images: ["https://horeca-seo.vercel.app/imgs/hero.png"],
    siteName: "Supply Partners",
  },
  // description: "Ваш деловой партнер lom lom lom",
};

export default function Home() {
  return (
    <main>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <Header />
      <Hero />
      <div className="2xl:w-[1700px] lg:w-[1200px] mx-auto px-5 md:px-10 lg:px-0">
        <ScrollToTopIcon />
        <HotelInConstruction />
        <HotelInActive />
        <Restaurants />
        <Services />
        <Shipping />
        <Contacts />
      </div>
      <Footer />
    </main>
  );
}
