import styled from 'styled-components';
import Variables, { transition } from '../variables';

export const Box = styled.li`
    width:25%;
    background-color:${Variables.colors.white};
    .inner{
        background-color:${Variables.colors.white};
        border:solid 1px ${Variables.colors.light_grey};
        border-top-color:${Variables.colors.white};
        border-right-color:${Variables.colors.white};
        padding:8px;
        .image-box{
            overflow:hidden;
            position:relative;
            text-align:center;
            .images{
                margin:0px 30px;
                position:relative;
                img{
                    width:100%;
                }
                .hover{
                    position:absolute;
                    top:0px;
                    right:0px;
                    opacity:0;
                    ${transition(0.3)};
                    width:100%;
                }
                &:hover{
                    .hover{
                        opacity:1;
                    }
                }
            }
            
            .offer{
                position: absolute;
                top: 0px;
                right: 0px;
                width: 87.5px;
                border-radius: 16px;
                color:${Variables.colors.white};
                background-color:${Variables.colors.lipstick};
                font-size:12px;
                line-height:26px;
            }
            .colors{
                list-style:none;
                position: absolute;
                margin:0px;
                padding:0px;
                top:50%;
                right:5px;
                margin-top:-15px;
                direction: ltr;
                li{
                    width:7px;
                    height:7px;
                    border-radius:7px;
                    margin-bottom:5px;
                    border: solid 0.2px rgba(11, 11, 11, 0.21);
                }
                span{
                    position:absolute;
                    bottom:-12px;
                    left:-2.5px;
                    font-family:Number;
                    font-size: 10px;
                    color:${Variables.colors.medium_grey};
                }
            }
        }
        .title{
            font-size:13px;
            border-bottom:dashed 1px ${Variables.colors.light_grey};
            margin:8px -8px;
            padding:8px 8px;
            line-height: 26px;
            height: 65px;
            overflow: hidden;
            a{
                color:${Variables.colors.font};
            }
        }
        .detail{
            display:flex;
            justify-content:space-between;
            height:60px;
            padding-top:30px;
            position:relative;
            .seller{
                .seller-name{
                    font-size:12px;
                    color:${Variables.colors.medium_grey};
                    position: absolute;
                    top: 5px;
                    right: 0px;
                }
            }
            .price{
                .discount{
                    position:absolute;
                    top: 0px;
                    left: 0px;
                    width: 42px;
                    line-height: 24px;
                    text-align: center;
                    background-color:${Variables.colors.lipstick};
                    color: ${Variables.colors.white};
                    border-radius: 12px;
                    font-family:Number;
                }
                .old{
                    position:absolute;
                    font-size:10px;
                    text-decoration:line-through;
                    color:${Variables.colors.warm_grey};
                    top: 6px;
                    left: 50px;
                }
                .currency{
                    margin-right:5px;
                }
                .new{
                    color:${Variables.colors.dark_font};
                    font-size:20px;
                    .currency{
                        font-size:12px;
                    }
                }
            }
            .unavailable{
                width:100%;
                height:100%;
                position:absolute;
                top:0px;
                right:0px;
                background-color:${Variables.colors.white};
                text-align:center;
                line-height:60px;
                span{
                    position: relative;
                    background: ${Variables.colors.white};
                    padding: 0px 10px;
                }
                &::before{
                    position:absolute;
                    background-color:${Variables.colors.light_grey};
                    content:'';
                    width:100%;
                    height:1px;
                    right: 0px;
                    top: 31px;
                    z-index: 0;
                }
            }
        }
        &:hover{
            border:solid 1px ${Variables.colors.light_grey};
            border-radius:4px;
            box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.05);
            margin-top: -1px;
            margin-right:1px;
            .title{
                margin:8px 0px;
                padding:8px 0px;
            }
            .colors{
                li{
                    width:12px;
                    height:12px;
                }
                span{
                    left: 0px;
                }
            }
        }
    }
    &:nth-child(4n+0){
        .inner{
            border-left-color:${Variables.colors.white};
            &:hover{
                border-left-color: ${Variables.colors.light_grey};
            }
        }
    }
    &:hover{
        margin-left:1px;
        margin-right:-1px;
    }
    @media only screen and (max-width: 1360px) {
        width:33.3%;
        &:nth-child(4n+0){
            .inner{
                border-left-color:${Variables.colors.light_grey};
                &:hover{
                    border-left-color: ${Variables.colors.white};
                }
            }
        }
        &:nth-child(3n+0){
            .inner{
                border-left-color:${Variables.colors.white};
                &:hover{
                    border-left-color: ${Variables.colors.light_grey};
                }
            }
        }
    }
`