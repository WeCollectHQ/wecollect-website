import { NavbarActions } from "./NavbarActions";
import { NavbarLinks } from "./NavbarLinks";
import { WecollectLogo } from "../Logo";
import { NavbarMobile } from "./NavbarMobile";
import { Container } from "../Container";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-15 lg:h-18 bg-white">
      <Container className="flex h-full items-center justify-between">
        <WecollectLogo />

        <NavbarLinks />

        <NavbarActions />

        <NavbarMobile />
      </Container>
    </header>
  );
}
