import Table from 'react-bootstrap/Table';

export default function ArticleTable() {
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
            <tr>
                <td>2023.02.10 15:00</td>
                <td>Mark</td>
                <td>젤렌스키 "반격 작전 중"…자세한 사항은 노코멘트</td>
                <td>볼로디미르 젤렌스키 우크라이나 대통령이 현지시각 10일 러시아군에 대한 반격 작전이 진행 중이라고 밝혔습니다.</td>
                <td>송고</td>
                <td>200</td>
                <td>2023-06-11 10:35:24</td>
            </tr>
            </tbody>
        </Table>
    );
}
