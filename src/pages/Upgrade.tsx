import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage2 } from "../components/HeroImage2"
import { UpgradeContent } from "../components/UpgradeContent"
import OCA from "../images/home/oxchangingafrica/ox_changing_africa.png"

export const Upgrade = () => {
    return (
        <>
            <Header/>
            <HeroImage2 url={OCA}/>
            <BreadCrumb target={"Upgrade"}/>
            <UpgradeContent/>
            <Footer/>
        </>
    )
}