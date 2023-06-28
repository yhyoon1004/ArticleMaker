import {FileUploader} from "react-drag-drop-files";
import {useState} from "react";
import {Container, Row, Form, Col, Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function VideoUploader() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    const submitHandling = () => {
        axios({
            url: "http://localhost:8080/videoUpload",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: file
        }).then((response)=>{
            if(response){

            }


        })
    };

    return (
        <Card className={"m-3"} style={{minWidth:"322px",maxWidth:"508px",minHeight:"200px"}}>
            <Card.Header as="h5">파일 업로더</Card.Header>
            <Card.Body>
                <FileUploader
                    handleChange={handleChange}
                    name="videoUploadForm"
                    types={["JPG", "PNG", "GIF", "TXT"]}
                    onDrop={() => console.log(file)}
                    fileOrFiles={["a","b"]}
                    multiple={true}
                />
            </Card.Body>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Button variant="primary" className="m-2" onClick={submitHandling}> 업로드 </Button>
                <Button variant="secondary" className="m-2" onClick={() => window.close()}> 취소 < /Button>
            </div>
        </Card>
    )
};