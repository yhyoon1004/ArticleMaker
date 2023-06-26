import {Col, Container, Row} from "react-bootstrap";
import Layout from "@/component/layout/layout";

export default function Video() {
    const videoUploadClick = (tabURI) => {
        window.open(tabURI, "_blank", "noopener, norefferer");
    };

    return (
        <Layout>
            <Container fluid>
                <Row>동영상 카테고리 목록 검색 바</Row>
                <Row> <Col>
                    <button onClick={()=>videoUploadClick("/video/videoUploader")}>동영상 업로드</button>
                </Col></Row>
                <Row>
                    <Col style={{backgroundColor: "grey"}}>영상 카드</Col>
                    <Col style={{backgroundColor: "grey"}}>영상 카드</Col>
                    <Col style={{backgroundColor: "grey"}}>영상 카드</Col>
                    <Col style={{backgroundColor: "grey"}}>영상 카드</Col>
                    <Col style={{backgroundColor: "grey"}}>영상 카드</Col>
                </Row>
            </Container>
        </Layout>

    );
};
