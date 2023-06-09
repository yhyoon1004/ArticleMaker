import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import TopBanner from "@/component/TopBanner";
import GNB from "@/component/GNB";

export default function Header() {
    // function
    const popUp = (url)=>{
        window.open(url,"기사 편집기","popup=yes");
    }

return(
    <>
        <TopBanner/>
        <GNB/>
    </>
)
    // return (
    //     <Container fluid style={headerCSS}>
    //         <Row className="mt-4 mb-4">
    //             <Col className="col-md-3" style={headerCSS}>
    //                 <Link href="/" style={cssNone}>메인페이지</Link>
    //             </Col>
    //             <Col className="col-md-3" style={headerCSS}
    //             onClick={()=>{popUp("/writeArticlePage")}}>
    //                     기사
    //                     작성하기
    //             </Col>
    //             <Col className="col-md-3" style={headerCSS}>
    //                 <Link href="/articleListPage/" style={cssNone}>기사 목록보기</Link>
    //             </Col>
    //             <Col className="col-md-3" style={headerCSS}>
    //                 <Link href="/administratorPage/" style={cssNone}>관리자</Link>
    //             </Col>
    //         </Row>
    //     </Container>
    // )
}

