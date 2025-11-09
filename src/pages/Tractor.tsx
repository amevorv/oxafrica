import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage2 } from "../components/HeroImage2"
import { TractorContent } from "../components/TractorContent"
import image16 from "../images/home/image16.png"

export const Tractor = () => {
    return (
        <>
            <Header/>
            <HeroImage2 url={image16}/>
            <BreadCrumb target="Tractor"/>
            <TractorContent/>
            <Footer/>
        </>
    )
}