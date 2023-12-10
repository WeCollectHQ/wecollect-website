import Footer from "../components/LandingPage/Footer"
import Navbar from "../components/LandingPage/Navbar"
import AmbHero from "../components/ambassadors/AmbHero"
import Register from "../components/ambassadors/Register"


const Ambasador = () => {
  return (
    <div className="w-full flex flex-col">
          <Navbar active={true} />
          <AmbHero />
          <Register />
          <Footer />
    </div>
  )
}

export default Ambasador
