import {Nav} from "react-bootstrap";

export default function GNB() {
    const itemStyle  = {fontWeight:"bold", color:"grey"}

    return (
        <Nav className="mb-1" fill variant="tabs" >
            <Nav.Item>
                <Nav.Link href="/" style={itemStyle}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/desk" style={itemStyle}>Desk</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/write/" style={itemStyle}>Write</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/photo" style={itemStyle}>Photo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/video" style={itemStyle}>Video</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/board" style={itemStyle}>Board</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};
