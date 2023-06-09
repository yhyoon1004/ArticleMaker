import Layout from "@/component/layout/layout";
import Editor from "@/component/editor/Editor";
import {useEffect, useState} from "react";

export default function Index() {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("default");

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return(
        <Layout>
            <Editor

                name="description"
                onChange={(data) => {
                    setData(data);
                }}
                editorLoaded={editorLoaded}
            />
        </Layout>
    )
};