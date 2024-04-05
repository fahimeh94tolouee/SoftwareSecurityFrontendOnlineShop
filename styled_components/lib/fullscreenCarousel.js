import styled from 'styled-components'
import Variables, { transition } from '../variables'

export const FSlider = styled.div`
    width:100%;
    margin-bottom:15px;
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
        img{
            width: 8.5px;
            height: 35.5px;
        }
    }
    .slick-prev{
        right:0px;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
    }
    .slick-next{
        left:0px;
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
    }
    .slick-disabled{
        cursor:default;
    }
`
export const Slide = styled.div`
    width:100%;
    position:relative;
    img{
        width:100%;
    }
    .slogans{
        position:absolute;
        top:46px;
        right:40px;
        color:${Variables.colors.white};
        line-hight:36px;
        font-size:15px;
        width:22%;
        h3{
            line-height:52px;
            font-size:2.4em;
            font-weight: 400;
            margin:0px;
        }
        span{
            display: inline-block;
            margin-bottom: 10px;
            line-height: 32px;
            font-weight: 100;
        }
        button{
            width: 211px;
            height: 56px;
            box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
            border: solid 1px ${Variables.colors.white};
            background-color: rgba(255, 255, 255, 0.3);
            border-radius:5px;
            color:${Variables.colors.white};
            cursor:pointer;
            padding-right:20px;
            position:relative;
            &::before{
                font-family:maleno;
                font-size: 22px;
                font-style: normal;
                color: ${Variables.colors.white};
                content:"\\2a";
                position:absolute;
                top:16px;
                right:25px;
            }
        }
    }
`
