import {Carousel} from "react-bootstrap";
import Image from "next/image";

export default function ImageSlideFrame () {
    return(
        <>
            <Carousel   >
                <Carousel.Item>
                    <Image
                        sizes='500px'
                        width="100"
                        height="500"
                        className="d-block w-100"
                        src="/picture/soldiers.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>훈련 중인 미군</h3>
                        <p>주한 미군들이 설원에서 혹한기 훈련을 하는 모습이다.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        sizes='500px'
                        width="100"
                        height="500"
                        className="d-block w-100"
                        src="/picture/tug.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>줄다리기를 하는 미국 중학생들</h3>
                        <p>미국의 독립기념일을 맞이 하여 시카고의 중학생들이 줄다리기를 하는 모습이다.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        sizes='500px'
                        width="100"
                        height="500"
                        className="d-block w-100"
                        src="/picture/seattle.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>시애틀 도심의 아침 전경</h3>
                        <p>
                            맑은 날씨가 이어지는 가운데 해가 뜨고 있는 시애틀 도심의 모습이다.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )

};