import Layout from "@/component/layout/layout";
import TopBanner from "@/component/layout/header/TopBanner";
import Loading from "@/component/spinner/Loading";
import Image from "next/image";


export default function Home() {
    return(
        <>
            <Layout>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Image  width={500} height={500} src={"/picture/welcomePage.gif"} alt={"welcome"}/>
                </div>
            </Layout>
        </>

    )
}
