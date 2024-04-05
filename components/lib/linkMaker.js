import LinkParser from "./linkParser";
import Link from "next/link";
import React from "react";

const LinkMaker = (linkData, title) => {
    if (linkData.type === "external" || linkData.target === "_blank") {
        return (
            <a href={linkData.url} target={linkData.target}>
                {title}
            </a>
        );
    } else {
        let href = LinkParser(linkData.url);
        if (href === null) {
            return "لینک خراب";
        } else {
            return (
                <Link as={linkData.url} href={href}>
                    <a>{title}</a>
                </Link>
            );
        }
    }
};
export default LinkMaker;