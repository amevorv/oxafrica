export const HeroContainer = (props: {image?: string}) => {
    return (
        <div id="hero">
            <div id="herocontainer">
                <h2>OX Engineering LTD</h2>
                <p>Specialises in providing comprehensive one stop services including poultry and livestock farm house design, construction and full set poultry and livestock equipment sales and installation.</p>

                {props.image && <div id="heroimage" style={{backgroundImage: props.image}}></div>}
            </div>
        </div>
    )
}

