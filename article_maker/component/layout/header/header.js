import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import TopBanner from "@/component/layout/header/TopBanner";
import GNB from "@/component/layout/header/GNB";

export default function Header() {
    return (
        <>
            <TopBanner/>
            <GNB/>
        </>
    )
}

