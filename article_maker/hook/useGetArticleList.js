import axios from "axios";

export async function useGetArticleList(articleURL, parameter) {
    try {
        return await axios().get({
                url: articleURL,
                params: Object.fromEntries(parameter)
            }
        ).catch();
    } catch (e){
        return null;
    }

}