import Header from "@/component/layout/header/header";

export default function Layout({children}) {


    return (
        <>
            <Header/>
            {children}
        </>
    )
}