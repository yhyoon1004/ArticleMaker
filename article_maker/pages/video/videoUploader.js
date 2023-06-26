import {FileUploader} from "react-drag-drop-files";
import {useState} from "react";

const fileTypes = ["JPG", "PNG", "GIF"];
export default function VideoUploader() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <>
            <div>동영상 업로드 페이지</div>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>
        </>
    )
};