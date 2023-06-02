import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";

export default function Header(){
    const headerCSS ={
        border: "solid 1px grey",
        backgroundColor: "lightblue"
    }
    const cssNone ={textDecoration:"none"}

    return (
        <Container className="container-fluid" style={headerCSS}>
            <Row>
                <Col className="col-md-3" style={headerCSS}><Link href="/" style={cssNone}>메인페이지</Link></Col>
                <Col className="col-md-3" style={headerCSS}><Link href="/writeArticlePage" style={cssNone}>기사 작성하기</Link> </Col>
                <Col className="col-md-3" style={headerCSS}><Link href="/articleListPage" style={cssNone}>기사 목록보기</Link></Col>
                <Col className="col-md-3" style={headerCSS}><Link href="/andministorPage" style={cssNone}>관리자</Link></Col>
            </Row>
            <Row><Col className="col-md-12"></Col></Row>
        </Container>
    )
}