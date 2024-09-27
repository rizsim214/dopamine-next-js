import { Hamburger } from "./Hamburger";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  return (
    <nav className="md:flex justify-between items-center shadow-md sticky top-0 z-50 bg-white w-full">
      <div className="flex justify-between items-center px-5">
        <Logo text="DOPAMINE" spanText=" Naturally Boosted" />
        <Hamburger />
      </div>
      <NavLinks />
    </nav>
  );
};
