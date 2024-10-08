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

export default function Home() {
  return (
    <main>
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
