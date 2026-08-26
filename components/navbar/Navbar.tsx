import { NavbarActions } from "./NavbarActions";
import { NavbarLinks } from "./NavbarLinks";
import { WecollectLogo } from "../Logo";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-15 bg-white lg:h-18">
      <div className="mx-auto flex h-full items-center justify-between px-3.5 lg:max-w-360 lg:px-44.5">
        <WecollectLogo />

        <NavbarLinks />

        <NavbarActions />

        <NavbarMobile />
      </div>
    </header>
  );
}
