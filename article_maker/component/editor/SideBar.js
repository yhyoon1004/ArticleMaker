import {Tab, Tabs} from "react-bootstrap";

export default function SideBar() {


    return (
        <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="메뉴">

            </Tab>
{/*            <Tab eventKey="profile" title="옵션">
            </Tab>
            <Tab eventKey="contact" title="설정" >
            </Tab>*/}
        </Tabs>
    );
};