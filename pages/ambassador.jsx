import Footer from "../components/LandingPage/Footer"
import Navbar from "../components/LandingPage/Navbar"
import AmbHero from "../components/ambassadors/AmbHero"
import Register from "../components/ambassadors/Register"
import NewFooter from "../components/footer/new-footer"
import MobileNav from "../components/navbar/mobile-nav"
import NewNavbar from "../components/navbar/new-navbar"


const Ambasador = () => {
  return (
    <div className="w-full flex flex-col">
      <NewNavbar />
      <MobileNav present={1} />
      <AmbHero />
      <Register />
      <NewFooter />
    </div>
  );
}

export default Ambasador
