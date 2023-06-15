import {Button, Card} from "react-bootstrap";

export default function CardImage ({title,content, imagePath}) {

    const cardImageStyle = {minHeight:50,maxHeight:100}

    return (
        <Card >
            <Card.Img variant="top" src="/picture/frog.jpg" style={cardImageStyle} />
            <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Text>
                    content
                </Card.Text>
            </Card.Body>
        </Card>
    );
};