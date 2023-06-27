import {FileUploader} from "react-drag-drop-files";
import {useState} from "react";
import {Container, Row, Form, Col, Card} from "react-bootstrap";

const fileTypes = ["JPG", "PNG", "GIF"];
export default function VideoUploader() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <Card className={"m-3"} >
            <Container fluid >
                <Row>
                    <Col md={12}>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>동영상 업로드</Form.Label>
                            <Form.Control type="file" size="sm"/>
                            <FileUploader
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}/>
                        </Form.Group>
                    </Col>

                </Row>

            </Container>
        </Card>
    )
};