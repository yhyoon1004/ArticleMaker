import Layout from "@/component/layout/layout";
import ImageSlideFrame from "@/component/carousels/ImageSlideFrame";
import {Col, Container, Row} from "react-bootstrap";
import CardImage from "@/component/cardImage/CardImage";
import OptionsPagination from "@/component/pagination/OptionsPagination";

export default function Photo() {

    const rowStyle = {
        display: "flex",
        justifyContent: "center"
    }
    const colStyle = {marginBottom: 1}

    return (
        <Layout>
            <Container fluid={true}>
                <Row className="mb-2" style={rowStyle}>
                    <Col md={1}>

                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>

                <Row className="mb-2"style={rowStyle}>
                    <Col md={1}>

                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>

                <Row className="mb-2" style={rowStyle}>
                    <Col md={1}>

                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>

                <Row className="mb-2" style={rowStyle}>
                    <Col md={1}>

                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={2}>
                        <CardImage/>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>


            </Container>
            <hr/>
            <OptionsPagination />
        </Layout>
    )
};