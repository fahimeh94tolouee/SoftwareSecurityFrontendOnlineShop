import styled from 'styled-components'
import Variables, { transition } from '../variables'
export const Banners= styled.div`
    padding:0px 8px;
    img{
        width:100%;
        margin-bottom:16px;
    }
`
export const Button= styled.button`
    width:100%;
    background-color:${Variables.colors.orang};
    height: 72px;
    border-radius: 8px;
    color:${Variables.colors.white};
    margin-bottom:16px;
    border:none;
    position:relative;
    cursor:pointer;
    &::before{
        content:"";
        background-color:rgba(256,256,256,0.24);
        width: 72px;
        height: 72px;
        position: absolute;
        top: 0;
        right: -25px;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
    }
    &::after{
        content:"\\2a";
        font-family: maleno;
        color:${Variables.colors.white};
        font-size: 24px;
        position: absolute;
        top: 23px;
        right: 12px;
    }
`