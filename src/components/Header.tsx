import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="flex justify-between items-center 2xl:w-[1700px] lg:w-[1200px] w-full mx-auto lg:px-0 px-5 py-5 z-50 text-white">
      <Link
        href={"#"}
        className="uppercase 2xl:text-3xl lg:text-2xl text-xl font-extrabold"
      >
        Supply partners
      </Link>
      <div className="hidden lg:flex">
        <Nav />
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
