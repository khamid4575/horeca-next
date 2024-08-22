import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url('/imgs/hero.png')` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-10"></div>
      <div className="flex flex-col h-[88vh] justify-center lg:items-start text-white 2xl:w-[1700px] lg:w-[1200px] mx-auto lg:text-start items-center text-center lg:px-0 px-4">
        <h1 className="2xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-bold uppercase lg:w-2/5">
          {t("title")}
        </h1>
        <p className="lg:text-2xl md:text-xl text-[15px] lg:mx-0 md:w-4/5 md:mx-auto 2xl:w-[45%] lg:w-1/2 text-white font-medium my-3">
        {t("description")}
        </p>
        <a href={"#contacts"}>
          <Button variant={"default"} size={"default"}>
            <p className="md:text-xl text-base font-bold 2xl:text-2xl">
            {t("button")}
            </p>
          </Button>
        </a>
      </div>
      <a
        href="#hotels"
        className="absolute inset-x-0 hover:translate-y-3 rounded-full transition-all duration-300 w-20 h-20 bottom-3 text-white flex justify-center items-center mx-auto "
      aria-label="Hotels section"
      >
        <img
          src={"/imgs/arrowDown.svg"}
          alt="hotels"
          className="w-14 h-14 2xl:w-16 2xl:h-16"
        />
      </a>
    </section>
  );
};

export default Hero;
