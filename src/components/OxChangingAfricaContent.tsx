import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './LivestockContent.css';

export const OxChangingAfricaContent = () => {
    return (
        <Container className="py-5">
            {/* Hero Section */}
            <Row className="mb-5">
                <Col lg={12}>
                    <div className="hero-section text-center mb-4">
                        <h1 className="display-4 fw-bold text-primary mb-4">
                            How OX is Transforming Agriculture in Africa
                        </h1>
                        <p className="lead fs-5 text-muted">
                            At OX ENGINEERING LIMITED, we're excited to share how the OX Engineering company 
                            is set to revolutionize agriculture across Africa. OX is providing a game-changing 
                            solution designed to empower the Agric Industry, boost productivity, and drive 
                            economic growth in rural communities.
                        </p>
                    </div>
                </Col>
            </Row>

            {/* Key Areas Section */}
            <Row className="mb-5">
                <Col lg={12}>
                    <h2 className="text-center mb-5 text-primary">Key Transformation Areas</h2>
                </Col>
                
                {/* Affordable Mechanization */}
                <Col md={6} lg={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="p-4">
                            <div className="text-primary mb-3">
                                <i className="bi bi-gear-fill fs-2"></i>
                            </div>
                            <Card.Title className="h4 text-primary mb-3">
                                Affordable & Accessible Mechanization
                            </Card.Title>
                            <Card.Text className="text-muted">
                                OX addresses the challenge of limited access to affordable mechanization 
                                by offering highly efficient, cost-effective tools designed with 
                                smallholder farmers in mind.
                            </Card.Text>
                            <ul className="text-muted small">
                                <li>Low-Cost Ownership for small-scale farmers</li>
                                <li>Easy Financing Options through microfinance partnerships</li>
                                <li>Rural Access for tough terrains</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Productivity & Yields */}
                <Col md={6} lg={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="p-4">
                            <div className="text-success mb-3">
                                <i className="bi bi-graph-up-arrow fs-2"></i>
                            </div>
                            <Card.Title className="h4 text-success mb-3">
                                Increasing Productivity & Yields
                            </Card.Title>
                            <Card.Text className="text-muted">
                                OX enhances farm productivity by automating key agricultural processes 
                                such as plowing, planting, and harvesting, allowing farmers to work 
                                more land and produce higher yields.
                            </Card.Text>
                            <ul className="text-muted small">
                                <li>Efficiency in Farming with versatile attachments</li>
                                <li>Higher Crop Yields through better soil preparation</li>
                                <li>Year-Round Farming capabilities</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Sustainable Practices */}
                <Col md={6} lg={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="p-4">
                            <div className="text-warning mb-3">
                                <i className="bi bi-leaf-fill fs-2"></i>
                            </div>
                            <Card.Title className="h4 text-warning mb-3">
                                Sustainable Agriculture Practices
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Designed with sustainability in mind, OX offers an environmentally-friendly 
                                solution that aligns with Africa's agricultural future and helps reduce 
                                the environmental impact of farming operations.
                            </Card.Text>
                            <ul className="text-muted small">
                                <li>Eco-Friendly Technology with fuel-efficient engines</li>
                                <li>Solar-Powered Options for renewable energy</li>
                                <li>Soil Preservation through efficient tilling</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Rural Communities */}
                <Col md={6} lg={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="p-4">
                            <div className="text-info mb-3">
                                <i className="bi bi-people-fill fs-2"></i>
                            </div>
                            <Card.Title className="h4 text-info mb-3">
                                Empowering Rural Communities
                            </Card.Title>
                            <Card.Text className="text-muted">
                                OX is more than equipment—it's a catalyst for economic empowerment, 
                                creating new economic opportunities across rural Africa by enabling 
                                smallholder farmers to increase their productivity.
                            </Card.Text>
                            <ul className="text-muted small">
                                <li>Job Creation through farm expansion</li>
                                <li>Reducing Poverty with higher incomes</li>
                                <li>Empowering Women and Youth in agriculture</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Climate Resilience */}
                <Col md={6} lg={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="p-4">
                            <div className="text-danger mb-3">
                                <i className="bi bi-cloud-sun-fill fs-2"></i>
                            </div>
                            <Card.Title className="h4 text-danger mb-3">
                                Resilience Against Climate Challenges
                            </Card.Title>
                            <Card.Text className="text-muted">
                                Africa's agricultural sector faces climate change challenges. OX offers 
                                solutions to help farmers adapt to unpredictable rainfall and extreme 
                                weather impacts on crop production.
                            </Card.Text>
                            <ul className="text-muted small">
                                <li>Drought-Resistant Farming through land diversification</li>
                                <li>Improved Irrigation for water management</li>
                                <li>Adaptability in varying conditions</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Supply Chains */}
                <Col md={6} lg={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="p-4">
                            <div className="text-secondary mb-3">
                                <i className="bi bi-truck fs-2"></i>
                            </div>
                            <Card.Title className="h4 text-secondary mb-3">
                                Strengthening Supply Chains
                            </Card.Title>
                            <Card.Text className="text-muted">
                                OX improves how produce gets to market, addressing transportation 
                                challenges by serving as both a farm tool and transport vehicle, 
                                reducing post-harvest losses.
                            </Card.Text>
                            <ul className="text-muted small">
                                <li>Transporting Produce efficiently with trailers</li>
                                <li>Access to Markets with reduced costs</li>
                                <li>Market Connectivity for better prices</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Innovation Section */}
            <Row className="mb-5">
                <Col lg={12}>
                    <Card className="bg-light border-0">
                        <Card.Body className="p-5 text-center">
                            <div className="text-primary mb-4">
                                <i className="bi bi-lightbulb-fill fs-1"></i>
                            </div>
                            <h3 className="h2 text-primary mb-4">Creating a Future of Innovation and Growth</h3>
                            <p className="lead text-muted mb-4">
                                The introduction of OX is just the beginning. As more African farmers adopt 
                                mechanization and modern agricultural practices, the entire agricultural 
                                sector stands to benefit. OX is leading this transformation by providing 
                                farmers with the tools they need to thrive in a changing world.
                            </p>
                            <Row className="mt-4">
                                <Col md={6}>
                                    <div className="mb-3">
                                        <h5 className="text-primary">Innovation in Agriculture</h5>
                                        <p className="text-muted small">
                                            OX's development opens the door to further innovation in African agriculture, 
                                            from precision farming technologies to renewable energy solutions.
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <h5 className="text-primary">Scaling Growth</h5>
                                        <p className="text-muted small">
                                            By empowering smallholder farmers, OX is contributing to the broader development 
                                            goals of African nations, promoting food security and economic growth.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Future Section */}
            <Row className="mb-5">
                <Col lg={12} className="text-center">
                    <h2 className="display-5 text-primary mb-4">The Future is OX</h2>
                    <p className="lead fs-5 text-muted mb-5">
                        At OX ENGINEERING LIMITED, we believe that OX will play a pivotal role in shaping the future 
                        of agriculture in Africa. It's more than just a tractor—it's a game-changing tool that will 
                        empower farmers, strengthen rural economies, and drive sustainable agricultural practices.
                    </p>
                </Col>
            </Row>

            {/* Call to Action */}
            <Row>
                <Col lg={12} className="text-center">
                    <div className="cta-section p-4 bg-primary rounded-3">
                        <h3 className="text-white mb-4">Join Us in Transforming African Agriculture</h3>
                        <p className="text-white-50 mb-4">
                            Stay tuned for more updates as we continue to develop and roll out OX across Africa, 
                            bringing the future of farming within reach for all.
                        </p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <Button variant="light" size="lg" className="px-4">
                                Learn More About OX
                            </Button>
                            <Button variant="outline-light" size="lg" className="px-4" href="mailto:info@oxafrica.com">
                                Contact Us for Updates
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Final Message */}
            <Row className="mt-5">
                <Col lg={12} className="text-center">
                    <p className="fs-5 text-muted">
                        With OX, we're committed to helping African farmers grow, prosper, and build a brighter future. 
                        Join us on this journey as we transform agriculture in Africa, one field at a time!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}