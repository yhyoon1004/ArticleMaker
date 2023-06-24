import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ArticleSimpleView(title="default", content="default", writer="default", createdTime="default", publishedTime="default") {


    return (
        <div
            className="modal show"
            style={{display: 'block', position: 'initial'}}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{content}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">닫기</Button>
                    <Button variant="primary">기사 수정하기</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
};