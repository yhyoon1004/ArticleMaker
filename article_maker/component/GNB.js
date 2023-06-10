import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function GNB() {


    return (
        <Navbar bg="light" expand="md">
            <Container className="ms-1">
                {/*<Navbar.Brand href="#home">기사 작성 프로그램</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" color={"grey"}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/desk">Desk</Nav.Link>
                        <Nav.Link href="/write/">Write</Nav.Link>
                        <Nav.Link href="/photo">
                            Photo
                        </Nav.Link>
                        <Nav.Link href="/video">
                            Video
                        </Nav.Link>

                        <NavDropdown title="Board" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/board/company">
                                Company Board
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/board/club">
                                Club Board
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};