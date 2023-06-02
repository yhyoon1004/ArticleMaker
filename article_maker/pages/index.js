import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {useRouter} from "next/router";


export default function Home() {
    const router = useRouter();

  const border ={
    border: "solid 1px grey"
  }
  const onClickHandler =(url)=>{
      router.push(url);
  }
  return (
      <Container className="container-fluid" style={border}>
        <Row>
          <Col className="col-md-3" style={border} onClick={onClickHandler("/")}>메인페이지</Col>
          <Col className="col-md-3" style={border}>기사 작성하기</Col>
          <Col className="col-md-3" style={border}>기사 목록보기</Col>
          <Col className="col-md-3" style={border}>관리자</Col>
        </Row>
      </Container>
  )
}
