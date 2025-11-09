import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const ToolSection = () => {
    const tools = [
        { name: "Tractors", link: "tractor", image: "https://placehold.co/300x200/EFEFEFF/grey?text=Tractor" },
        { name: "Combine Harvesters", link: "combine", image: "https://placehold.co/300x200/EFEFEFF/grey?text=Combine" },
        { name: "Implements", link: "comingsoon", image: "https://placehold.co/300x200/EFEFEFF/grey?text=Implement" },
        { name: "Livestock", link: "/livestock", image: "https://placehold.co/300x200/EFEFEFF/grey?text=Livestock" },
        { name: "Irrigation", link: "irrigation", image: "https://placehold.co/300x200/EFEFEFF/grey?text=Irrigation" },
        { name: "Steel Structures", link: "steelstructures", image: "https://placehold.co/300x200/EFEFEFF/grey?text=Steel" }
    ];

    return (
        <Container className="my-5">
            <Row>
                {tools.map((tool, index) => (
                    <Col key={index} md={4} lg={2} className="mb-4">
                        <Link to={tool.link} className="text-decoration-none">
                            <Card className="h-100 text-center">
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