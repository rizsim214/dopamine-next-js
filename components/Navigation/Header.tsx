import { Hamburger } from "./Hamburger";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  const navStyles = `
    fixed
    top-0 
    md:flex 
    justify-between 
    items-center 
    shadow-md 
    top-0 z-50 
    bg-white 
    w-full
  `;
  const logoWrapperStyles = `
    flex 
    justify-between 
    items-center 
    px-5
  `;
  return (
    <nav className={navStyles}>
      <div className={logoWrapperStyles}>
        <Logo text="DOPAMINE" spanText="DOPAMINE" />
        <Hamburger />
      </div>
      <NavLinks />
    </nav>
  );
};
