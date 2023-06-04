import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor() {

    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                onReady={editor => {
                    console.log("Editor is ready!")
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({event, editor, data})
                }}
                onBlur={(event,editor)=> {
                    console.log('Blur.', editor);
                }}
                onFocus={(event,editor)=>{
                    console.log('Focus', editor);
                }}

            />
        </>
    )
};