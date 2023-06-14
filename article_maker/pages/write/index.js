import Layout from "@/component/layout/layout";
import Editor from "@/component/editor/Editor";
import {useEffect, useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import SideBar from "@/component/editor/SideBar";

export default function Index() {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("default");

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return(
        <Layout>
            <Container fluid>
                <Row style={{minHeight:500}}>
                    <Col md={8} style={{minHeight:500}}>
                        <Editor
                            name="description"
                            onChange={(data) => {
                                setData(data);
                            }}
                            editorLoaded={editorLoaded}
                        />
                    </Col>
                    <Col md={4} color={"grey"}>
                        <SideBar/>
                    </Col>
                </Row>
                <Row >
                    <Col md={8}>

                    </Col>

                    <Col md={4}>
                        <Button className="p-1 ms-1" variant="secondary" >취소</Button>
                        <Button className="p-1 ms-1"  variant="secondary">임시 저장</Button>
                        <Button className="p-1 ms-1"  variant="secondary">송고</Button>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
};