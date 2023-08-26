import axios from "axios";

export async function useGetArticleList(articleURL, parameter) {
    return await axios().get({
            url: articleURL,
            params: Object.fromEntries(parameter)
        }
    ).catch();
}