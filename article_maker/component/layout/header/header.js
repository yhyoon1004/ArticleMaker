import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";

export default function Header() {
    const headerCSS = {
        border: "solid 1px grey",
        backgroundColor: "lightblue",
        textAlign:"center"
    }
    const cssNone = {textDecoration: "none"}

    return (
        <Container fluid style={headerCSS}>
            <Row className="mt-4 mb-4">
                <Col className="col-md-3" style={headerCSS}>
                    <Link href="/" style={cssNone}>메인페이지</Link>
                </Col>
                <Col className="col-md-3" style={headerCSS}>
                    <Link href="/writeArticlePage" style={cssNone}>기사
                        작성하기</Link>
                </Col>
                <Col className="col-md-3" style={headerCSS}>
                    <Link href="/articleListPage/" style={cssNone}>기사 목록보기</Link>
                </Col>
                <Col className="col-md-3" style={headerCSS}>
                    <Link href="/administratorPage/" style={cssNone}>관리자</Link>
                </Col>
            </Row>
        </Container>
    )
}