import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage2 } from "../components/HeroImage2"
import { OxChangingAfricaContent } from "../components/OxChangingAfricaContent"
import OCA from "../images/home/oxchangingafrica/ox_changing_africa.png"
import './OxChangingAfrica.css'

export const Oxchangingafrica = () => {
    return (
        <>
            <Header/>
            <HeroImage2 url={OCA}/>
            <BreadCrumb target={"OX is Changing Africa"}/>
            <OxChangingAfricaContent/>
            <Footer/>
        </>
    )
}
