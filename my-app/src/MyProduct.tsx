import { Container,Row,Col,Card,Button } from "solid-bootstrap";

function MyProduct(){
    return(
        <div>
            <Container>
            <Row>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Python&Java MyProduct</Card.Title>
                            <Card.Text></Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>HTML&TypeScript MyProduct</Card.Title>
                            <Card.Text></Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>その他の制作物</Card.Title>
                            <Card.Text>ゲーム制作や、動画編集。綾急技研での活動実績</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>    
    )
}

export default MyProduct;