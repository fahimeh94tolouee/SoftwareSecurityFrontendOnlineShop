import styled from 'styled-components'
import Variables from './variables'

export const ListBox = styled.div`
    margin:32px 0px;
    .filters-row{
        padding:0px 8px;
        width:22%;
    }
    .products-row{
        padding:0px 8px;
        width:78%;
        .breadcrumb-box{
            height:50px;
            display:flex;
            justify-content:space-between;
            font-size:12px;
            line-height:50px;
            color:${Variables.colors.medium_grey};
            .total{
                background-color:${Variables.colors.light_grey};
                padding: 2px 8px;
                border-radius:20px;
                font-family: Number;
                span{
                    margin-left:10px;
                }
            }
        }
        .list-box{
            background-color:${Variables.colors.white};
            border:solid 1px ${Variables.colors.light_grey};
            border-radius:4px;
            .sort{
                border-bottom:solid 1px ${Variables.colors.light_grey};
                padding:15px 20px;
                position:relative;
                font-size:12px;
                i{
                    position:absolute;
                    top:15px;
                    right:10px;
                    &::before{
                        font-size:18px;
                    }
                }
                ul{
                    padding:0px;
                    margin:0px;
                    list-style:none;
                    li{
                        display:inline-block;
                        padding:3px 8px 6px 8px;
                        margin-right:7px;
                        border-radius:12px;
                        cursor: pointer;
                        &:hover{
                            background-color:${Variables.colors.light_white};
                        }
                    }
                    .active{
                        background-color:${Variables.colors.windows_blue};
                        color:${Variables.colors.white};
                        cursor: default;
                        &:hover{
                            background-color:${Variables.colors.windows_blue};
                        }
                    }
                }
            }
            .list{
                padding:8px;
                margin:0px;
                display:flex;
                flex-wrap:wrap;
                list-style:none;
                position:relative;
                &:after{
                    background-color:${Variables.colors.white};
                    content:'';
                    position:absolute;
                    bottom: -1px;
                    right:0px;
                    width: 100%;
                    height: 10px;
                }
            }
            .pagination{
                width:calc(100% - 32px);
                min-height:40px;
                display:inline-block;
                text-align:center;
                margin:16px;
                margin-top:2px;
                border-top:solid 1px ${Variables.colors.light_grey};
                padding-top:16px;
                ul{
                    list-style:none;
                    margin:0px;
                    padding:0px;
                    li{
                        display:inline-block;
                        font-family:Number;
                        margin:6px;
                        font-size:14px;
                        min-width: 24px;
                        height: 24px;
                        border-radius: 5px;
                        border:solid 1px ${Variables.colors.white};
                        cursor:pointer;
                        line-height: 23px;
                        a{
                            color:${Variables.colors.warm_grey};
                            padding: 0px 8px;
                        }
                        i{
                            &:before{
                                font-size:12px;
                            }
                        }
                    }
                    .previous,.next{
                        a{
                            color:${Variables.colors.dusty_teal};
                        }
                    }
                    .selected{
                        cursor:default;
                        border-color:${Variables.colors.dusty_teal};
                    }
                    .disabled{
                        cursor:default;
                    }
                }
            }
        }
    }
    
`