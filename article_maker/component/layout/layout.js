import Header from "@/component/layout/header/header";
import Loading from "@/component/spinner/Loading";

export default function Layout({children}) {


    return (
        <>
            <Header/>

            {children ?
                children
                :<Loading/>}
        </>
    )
}