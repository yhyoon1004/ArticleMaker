import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import TopBanner from "@/component/TopBanner";
import GNB from "@/component/GNB";

export default function Header() {
    return (
        <>
            <TopBanner/>
            <GNB/>
        </>
    )
}

