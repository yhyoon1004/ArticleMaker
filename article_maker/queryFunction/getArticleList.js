import axios from "axios";

export async function getArticleList(targetUrl, targetParameter) {
    return await axios({
        url: targetUrl,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        params: targetParameter,
    });
}