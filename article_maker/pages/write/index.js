import Layout from "@/component/layout/layout";
import Editor from "@/component/editor/Editor";
import {useEffect, useState} from "react";
import {Button, Form, Col, Container, InputGroup, Row} from "react-bootstrap";
import SideBar from "@/component/editor/SideBar";
import axios from "axios";

export default function Index() {
    const [editorLoaded, setEditorLoaded] = useState(false);

    const [articleTitle, setArticleTitle] = useState("");

    const [articleWriter, setArticleWriter] = useState("");

    const [articleContent, setArticleContent] = useState("default");
    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    const onClickSave = async () => {
        try {
            await axios({
                url: "http://localhost:8080/articleInsert",
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    "id": null,
                    "status": 0,
                    "writer_id": "yh",
                    "title": articleTitle,
                    "content": articleContent,
                    "create_time": null,
                    "published_time": null,
                    "view_count": 0
                }
            }).catch();
        } catch (e) {

        }
    }

    return (
        <Layout>
            <Container fluid>
                <Row style={{minHeight: 500}}>
                    <Col md={8} style={{minHeight: 500}}>
                        {/*기사 제목 구역*/}
                        <Row className="mt-3 mb-1">
                            <InputGroup>
                                <InputGroup.Text>제목</InputGroup.Text>
                                <Form.Control
                                    onChange={(e) => {
                                        setArticleTitle(e.target.value)
                                        console.log(e.target.value)
                                    }}
                                    placeholder="기사 제목을 입력하세요."
                                />
                            </InputGroup>
                        </Row>

                        {/*카테고리 | 작성자  구역*/}
                        <Row className="mt-2 mb-2">
                            <Col md={{span:4,offset:4}}>
                                <InputGroup size={"sm"} >
                                    <InputGroup.Text>분류</InputGroup.Text>
                                    <Form.Select >
                                        <option>선택</option>
                                        <hr/>
                                        <option>정치</option>
                                        <option>경제</option>
                                        <option>사회</option>
                                        <option>문화</option>
                                        <option>IT/과학</option>
                                        <option>국제</option>
                                        <option>연예</option>
                                        <option>스포츠</option>
                                    </Form.Select>
                                </InputGroup>
                            </Col>
                            <Col md={4}>
                                <InputGroup size={"sm"}>
                                    <InputGroup.Text>작성자</InputGroup.Text>
                                    <Form.Control
                                        onChange={(e) => {
                                            setArticleTitle(e.target.value)
                                            console.log(e.target.value)
                                        }}
                                        placeholder="작성자 아이디"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>

                        <Editor
                            name="description"
                            onChange={(data) => {
                                setArticleContent(data);
                            }}
                            editorLoaded={editorLoaded}
                        />
                    </Col>
                    <Col className="mt-3" md={4} color={"grey"}>
                        <SideBar/>
                    </Col>
                    <Col md={8}>

                    </Col>

                    <Col md={4}>
                        <Button className="p-1 ms-1" variant="secondary">취소</Button>
                        <Button className="p-1 ms-1" variant="secondary">임시 저장</Button>
                        <Button className="p-1 ms-1" variant="secondary" onClick={onClickSave}>송고</Button>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
};