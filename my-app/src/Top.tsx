import {Container, Nav, Navbar} from "solid-bootstrap";

function MyNav(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Tiamat-Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav class="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav;