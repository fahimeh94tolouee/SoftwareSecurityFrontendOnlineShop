import React from 'react';
import {Col, Row} from "styled-bootstrap-grid";
import {MenuBox} from "../../styled_components/layouts/mainLayout/desktopMenu";
import LinkMaker from '../../components/lib/linkMaker';
const DesktopMenu = props=>{
    const makeMenu = () => {
        const { menus } = props.data;
        console.log(menus);
        return menus && menus.map((item, key) => (
            <li
                key={key}
                className={item.type === "mega_menu" ? "mega-type" : "link-type"}
            >
                <div className="sep" />
                {LinkMaker(item.link, item.title)}
                {subMenu(item.type, item.items)}
            </li>
        ));
    };
    const subMenu = (type, items) => {
        if (type === "mega_menu") {
            return (
                <div className="mega-menu">
                    <div className="container">
                        <Row>
                            {items.map((col, colKey) => (
                                <Col col={col.cols} key={colKey}>
                                    {col.items.map((item, key) => subMenuItem(item, key))}
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            );
        }
    };
    const subMenuItem = (data, key) => {
        switch (data.type) {
            case "list":
                return (
                    <ul className="list" key={key}>
                        <li>
                            <strong>{data.title}</strong>
                        </li>
                        {data.items.map((item, index) => (
                            <li key={index}>{LinkMaker(item.link, item.title)}</li>
                        ))}
                    </ul>
                );
            case "image":
                return (
                    <div className="image" key={key}>
                        <img src={data.path} />
                    </div>
                );
            case "list-image":
                return (
                    <div className="list-image" key={key}>
                        {data.items.map((item, index) => (
                            <span key={index}>
                {LinkMaker(item.link, <img src={item.path} />)}
              </span>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };
    const linksView = () => {
        const { links } = props.data;
        return links && links.map((item, key) => (
            <li key={key}>{LinkMaker(item.link, item.title)}</li>
        ));
    };
    return(
        <MenuBox>
            <div className="container">
                <Row>
                    <Col col="12" sm="1" />
                    <Col col="12" sm="7" style={{ position: "inherit" }}>
                        <ul>{makeMenu()}</ul>
                    </Col>
                    <Col col="12" sm="4">
                        <ul className="left">{linksView()}</ul>
                    </Col>
                </Row>
            </div>
        </MenuBox>
    )
};
export default DesktopMenu;