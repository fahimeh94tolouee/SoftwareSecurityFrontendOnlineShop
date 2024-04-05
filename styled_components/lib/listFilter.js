import styled from 'styled-components'
import Variables,{transition} from '../variables'

export const Box =styled.div`
    max-height:${props=>(props.open)?'auto':'260px'};
    overflow:hidden;
    margin:auto -20px;
    position:relative;
    padding-bottom: ${props=>(props.open)?'20px':'0px'};
    .list{
        margin:0px;
        padding:0px;
        list-style:none;
        padding-right:32px;
        line-height:1.6;
        font-weight: 500;
        font-size:13px;
        ul{
            padding:0px;
            margin:0px;
            list-style:none;
            padding-right:15px;
            li{
                a{
                    color:${Variables.colors.font};
                }
                &::before{
                    font-family:maleno;
                    content: "\\65";
                }
            }
        }
        li{
            padding:8px 0px;
            position:relative;
            &::before{
                font-family:maleno;
                content: "\\65";
                font-size:8px;
                position:absolute;
                right: -12px;
                top: 11px;
                color:${Variables.colors.windows_blue};
            }
        }
        .active{
            &::before{
                content:'';
                background:${Variables.colors.windows_blue};
                width:4px;
                height:4px;
                border-radius: 50%;
                top: 14px;
            }
            li{
                font-size:12px;
                font-weight: 200;
                &::before{
                    content:'';
                }
            }
        }
    }
    .toggle{
        position:absolute;
        bottom:0;
        cursor:pointer;
        right:0px;
        width:100%;
        border-top:solid 1px ${Variables.colors.light_grey};
        text-align: center;
        line-height: 40px;
        background-color:${Variables.colors.white};
        i{
            ${transition(0.3)}
            transform: ${props=>(props.open)?'rotate(90deg)':'rotate(-90deg)'};
            display: inline-block;
            margin-right:8px;
            &:before{
                font-family:maleno;
                content: "\\65";
                font-size:8px;
                color:${Variables.colors.windows_blue};
            }
        }
    }
`