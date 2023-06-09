import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function GNB() {


    return (
        <Navbar bg="light" expand="md">
            <Container className="ms-1">
                {/*<Navbar.Brand href="#home">기사 작성 프로그램</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" color={"grey"}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Desk</Nav.Link>
                        <Nav.Link href="#link">Write</Nav.Link>
                        <Nav.Link href="#link">
                            Photo
                        </Nav.Link>
                        <Nav.Link href="#link">
                            Video
                        </Nav.Link>

                        <NavDropdown title="Board" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Board
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};