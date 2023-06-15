import {Container, Navbar} from "react-bootstrap";

export default function TopBanner(){
    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container className="ms-1">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/ArticleMaker_logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        ArticleMaker
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}