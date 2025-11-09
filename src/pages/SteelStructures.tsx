import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage2 } from "../components/HeroImage2"
import { SteelStructuresContent } from "../components/SteelStructuresContent"
import image18 from "../images/steelstruct/img18.jpg"

export const Steelstructures = () => {
    return (
        <>
            <Header/>
            <HeroImage2 url={image18}/>
            <BreadCrumb target="Steel Structures"/>
            <SteelStructuresContent/>
            <Footer/>
        </>
    )
}