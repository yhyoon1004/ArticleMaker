import React, { useEffect, useRef } from "react";
export default function Editor({ onChange, editorLoaded, name, value }) {

    // https://robiokidenis.medium.com/how-to-use-ckeditor-on-your-nextjs-or-react-app-525664cdb1d7

    const editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    }, []);
    return (
        <>
            {editorLoaded ? (
                <CKEditor
                    type=""
                    name={name}
                    initialData={value}
                    editor={ClassicEditor}
                    data={value}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        onChange(data);
                    }}
                />
            ) : (
                <div>Editor loading</div>
            )}
        </>
    )
}