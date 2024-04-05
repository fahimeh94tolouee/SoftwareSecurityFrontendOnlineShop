import styled from 'styled-components'
import Variables, { transition } from '../variables'

export const HeaderBox = styled.div`
    margin-top:16px;
    margin-bottom:22px;
    margin-right:26px;
    font-size:24px;
    font-color:${Variables.colors.warm_grey};
    a{
        margin-right:10px;
        font-size:14px;
        color:${Variables.colors.warm_grey};
        background-color:${Variables.colors.light_grey};
        border-radius:12px;
        padding:2px 8px;
    }
`
export const FSlider = styled.div`
    width:100%;
    margin-bottom:15px;
    .slick-list{
        margin:0px -15px;
    }
    .slick-arrow{
        position:absolute;
        top:50%;
        border:none;
        background-color:rgba(256,256,256,0.35);
        z-index:10;
        cursor:pointer;
        width: 38px;
        height: 70px;
        margin-top:-55px;
        display: flex !important;
        justify-content: center;
        align-items: center;
        img{
            width: 8.5px;
            height: 35.5px;
        }
    }
    .slick-prev{
        right:-20px;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
        padding-right:10px;
    }
    .slick-next{
        left:-20px;
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
        padding-left:10px;
    }
    .slick-disabled{
        cursor:default;
    }
`
export const Slide = styled.div`
    width:100%;
    position:relative;
    padding:0px 8px;
    img{
        width:100%;
    }
    .title{
        direction:rtl;
        .number{
            font-family:Number;
            font-size:32px;
            margin:5px 10px;
            float:right;
        }
        h3{
            display: inline-block;
            font-weight: 400;
            margin: 12px 5px;
        }
        .price{
            font-family:Number;
            font-size:22px;
            margin:10px;
            float:left;
            span{
                font-size:12px;
                margin-right:10px;
            }
        }
    }
    
`
