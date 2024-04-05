import styled from 'styled-components'
import Variables, { transition } from '../variables'
export const Box = styled.div`
    background-color:${Variables.colors.white};
    border-radius: 4px;
    box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px ${Variables.colors.light_grey};
    overflow:hidden;
    padding:26px;
    margin-bottom:26px;
`
export const FSlider = styled.div`
    width:100%;
    .slick-slide{
        padding-right: 4px;
    }
    .slick-arrow{
        position:absolute;
        top:50%;
        border:none;
        background-color:rgba(256,256,256,0.35);
        z-index:10;
        cursor:pointer;
        width: 26px;
        height: 70px;
        margin-top:-35px;
        display: flex !important;
        justify-content: center;
        align-items: center;
        border:solid 1px ${Variables.colors.light_grey};
        img{
            width: 8.5px;
            height: 35.5px;
        }
    }
    .slick-prev{
        right:-27px;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
    }
    .slick-next{
        left:-27px;
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
    }
    .slick-disabled{
        cursor:default;
    }
`
export const Slide = styled.div`
    padding:0px 8px;
    img{
        width:100%;
    }
`
