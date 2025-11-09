import { ComingSoonContent } from "../components/comingsoon"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const ComingSoon = () => {
    return (
        <>
            <Header />
            <div style={{textAlign: "center", padding: "50px"}}>
                <ComingSoonContent/>
            </div>
            <Footer />
        </>
    )
}