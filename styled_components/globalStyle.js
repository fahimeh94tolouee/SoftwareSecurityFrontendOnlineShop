import { createGlobalStyle } from "styled-components";
import Variables, { desktopWidthLimits } from "./variables";
const GlobalStyle = createGlobalStyle`
    html,body{
    height: 100%;
    width: 100%;
    }
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }
    body {
        margin: 0;
        background-color: ${Variables.colors.background} !important;
        direction:ltr;
        font-family:IRANSans;
        font-size:14px;
        text-align: left;
        color:${Variables.colors.font};
    }
    #__next{
    height: 100%;
    width: 100%;
    }
    *{
        outline:none;
    }
    main {
        display: block;
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }
    pre {
        font-family: monospace, monospace;
        font-size: 1em;
    }
    a {
        background-color: transparent;
        text-decoration:none;
        color:${Variables.colors.windows_blue}
    }
    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }
    b {
        font-weight: bolder;
    }
    strong {
        font-weight: bolder;
    }
    code {
        font-family: monospace, monospace;
        font-size: 1em;
    }
    kbd {
        font-family: monospace, monospace;
        font-size: 1em;
    }
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }
    small {
        font-size: 80%;
    }
    sub {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
        bottom: -0.25em;
    }
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
        top: -0.5em;
    }
    img {
        border-style: none;
    }
    button {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        overflow: visible;
        text-transform: none;
        -webkit-appearance: button;
        &::-moz-focus-inner {
            border-style: none;
            padding: 0;
        }
        &:-moz-focusring {
            outline: 1px dotted ButtonText;
        }
    }
    input {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        overflow: visible;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        &[type="number"] {
          -moz-appearance: textfield;
        }
    }
    optgroup {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }
    select {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        text-transform: none;
    }
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        overflow: auto;
    }
    [type="button"] {
        -webkit-appearance: button;
        &::-moz-focus-inner {
            border-style: none;
            padding: 0;
        }
        &:-moz-focusring {
            outline: 1px dotted ButtonText;
        }
    }
    [type="reset"] {
        -webkit-appearance: button;
        &::-moz-focus-inner {
            border-style: none;
            padding: 0;
        }
        &:-moz-focusring {
            outline: 1px dotted ButtonText;
        }
    }
    [type="submit"] {
        -webkit-appearance: button;
        &::-moz-focus-inner {
            border-style: none;
            padding: 0;
        }
        &:-moz-focusring {
            outline: 1px dotted ButtonText;
        }
    }
    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }
    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }
    progress {
        vertical-align: baseline;
    }
    [type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
    }
    [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }
    [type="number"] {
        &::-webkit-inner-spin-button {
            height: auto;
        }
        &::-webkit-outer-spin-button {
            height: auto;
        }
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
        &::-webkit-search-decoration {
            -webkit-appearance: none;
        }
    }
    &::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }
    details {
        display: block;
    }
    summary {
        display: list-item;
    }
    template {
        display: none;
    }
    [hidden] {
        display: none;
    }
    .container {
        width: 100%;
        padding-right: 24px;
        padding-left: 24px;
        margin-right: auto;
        margin-left: auto;
        ${desktopWidthLimits()}
    }


    .slick-slider {
        position: relative;
        display: block;
        box-sizing: border-box;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
    }
    .slick-list {
        position: relative;
        overflow: hidden;
        display: block;
        margin: 0;
        padding: 0;

        &:focus {
            outline: none;
        }

        &.dragging {
            cursor: pointer;
            cursor: hand;
        }
    }
    .slick-slider .slick-track,
    .slick-slider .slick-list {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    .slick-track {
        position: relative;
        left: 0;
        top: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;

        &:before,
        &:after {
            content: "";
            display: table;
        }

        &:after {
            clear: both;
        }

        .slick-loading & {
            visibility: hidden;
        }
    }
    .slick-slide {
        float: left;
        height: 100%;
        min-height: 1px;
        [dir="rtl"] & {
            float: right;
        }
        img {
            display: block;
        }
        &.slick-loading img {
            display: none;
        }

        display: none;

        &.dragging img {
            pointer-events: none;
        }

        .slick-initialized & {
            display: block;
        }

        .slick-loading & {
            visibility: hidden;
        }

        .slick-vertical & {
            display: block;
            height: auto;
            border: 1px solid transparent;
        }
    }
    .slick-arrow.slick-hidden {
        display: none;
    }
    
`;
export default GlobalStyle;
