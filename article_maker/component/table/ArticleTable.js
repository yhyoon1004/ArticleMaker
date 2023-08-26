import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import axios from "axios";
import ArticleSimpleView from "@/component/modal/ArticleSimpleView";

export default function ArticleTable() {

    const [article, setArticle] = useState([]);

    const articleDataFetch = async () => {
        try {
            await axios({
                url: "http://localhost:8080/desk",
                method: "get",
                headers: {
                    "Content-Type": "application/json"

                    // "Content-Type": "application/json"
                },
            }).then(res=>{
                console.log(res.data);
                setArticle(res.data);
            }).catch()
        }catch (error){
            console.log(error)
        }
    }

    const onClickArticle = (atitle, acontent, awriter, acreatedtime, apublishedTime) =>{
            <ArticleSimpleView title={atitle} content={acontent} writer={awriter} createdTime={acreatedtime} publishedTime={apublishedTime}/>
    }

    useEffect(() => {
        console.log("article : ", article);
        articleDataFetch();
    }, []);

    return (
        <Table size="sm" responsive="sm" striped bordered hover variant="dark">
            <thead>
            <tr>
                <th nowrap="nowrap">작성시간</th>
                <th nowrap="nowrap">작성자</th>
                <th nowrap="nowrap">제목</th>
                <th nowrap="nowrap">내용</th>
                <th nowrap="nowrap">상태</th>
                <th nowrap="nowrap">조회 수</th>
                <th nowrap="nowrap">송고 날짜</th>
            </tr>
            </thead>
            <tbody>
            {
                article.map((item, idx) => (
                    <tr key={idx} onClick={onClickArticle}>
                        <td>{item.create_time}</td>
                        <td>{item.writer_id}</td>
                        <td>{item.title}</td>
                        {/*<td>{item.content}</td>*/}
                        <td>{item.status}</td>
                        <td>{item.view_count}</td>
                        <td>{item.published_time}</td>
                    </tr>
                ))

            }
            </tbody>
        </Table>
    );
}
