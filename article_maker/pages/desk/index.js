import Layout from "@/component/layout/layout";
import ArticleTable from "@/component/table/ArticleTable";
import {useQuery} from "react-query";
import {getArticleList} from "@/queryFunction/getArticleList";

const articleURL = "http://localhost:8080/desk";
export default function ArticleListPage() {

    const articleQuery = useQuery({
        queryKey: "articles",
        queryFn: ()=> getArticleList(articleURL,[]),
        cacheTime: 60000,
        refetchOnWindowFocus: true,

    })

    return (
        <Layout>
            <ArticleTable/>
        </Layout>
    )
};