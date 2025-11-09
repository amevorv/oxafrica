import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom"
import tractor from "../images/home/toolmenu/tractor.jpg"
import combine from "../images/home/toolmenu/combineH.jpeg"
import implement from "../images/home/toolmenu/implement.jfif"
import livestock from "../images/home/toolmenu/livestock.jpg"
import irrigation from "../images/home/toolmenu/irrigation.jpg"
import steel from "../images/home/toolmenu/steelStruct.jpg"
import './HeroSection.css';

export const ToolMenu = () => {
    const tools = [
        { name: "Tractors", link: "tractor", image: tractor },
        { name: "Combine Harvesters", link: "combine", image: combine },  
        { name: "Implements", link: "comingsoon", image: implement },
        { name: "Livestock", link: "/livestock", image: livestock },
        { name: "Irrigation", link: "irrigation", image: irrigation },
        { name: "Steel Structures", link: "steelstructures", image: steel }
    ];

    return (
        <Container className="my-5">
            <Row>
                {tools.map((tool, index) => (
                    <Col key={index} md={4} lg={2} className="mb-4 px-2">
                        <Link to={tool.link} className="text-decoration-none">
                            <Card className="h-100 text-center tool-card border-0" style={{ maxWidth: '90%', margin: '20 auto' }}>
                                <Card.Img variant="top" src={tool.image} />
                                <Card.Body>
                                    <Card.Title>{tool.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}