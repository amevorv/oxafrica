import { ComingSoonContent } from "../components/comingsoon"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage } from "../components/HeroImage"
import { Button } from 'react-bootstrap';


export const ComingSoon = () => {
    return (
        <>
            <Header />
            <HeroImage/>
            <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center", width: "100%"}}>
                <ComingSoonContent/>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "2rem" }}>
                <Button variant="success" href="/">Back to Home</Button>
            </div>            
            <Footer />
        </>
    )
}