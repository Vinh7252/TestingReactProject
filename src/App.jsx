import About from "./Components/About/About"
import Features from "./Components/Features/Features"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Help from "./Components/Help/Help"
import Network from "./Components/Network/Network"
import NavBar from "./Components/NavBar/NavBar"
import Pricing from "./Components/Pricing/Pricing"
import Testimonials from "./Components/Testimonials/Testimonials"

export default function App(){
    return(
        <div>
            <NavBar/>
            <Header/>
            <main>
                <About/>
                <Features/>
                <Pricing/>
                <Network/>
                <Testimonials/>
                <Help/>
            </main>
            <Footer/>

        </div>

    )

}
