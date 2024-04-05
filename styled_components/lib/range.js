import styled from 'styled-components'
import Variables from '../variables'

export const Box = styled.div`
    position:relative;
    .range{
        position: relative;
        width: 100%;
        height: 40px;
        .rail{
            position: absolute;
            width: 100%;
            height: 5px;
            margin-top: 15px;
            border-radius: 5px;
            background-color: ${Variables.colors.warm_grey};
            opacity:0.15;
        }
    }   
`
export const Dot =styled.div`
    left: ${props => props.percent}%;
    position: absolute;
    margin-left: -12px;
    margin-top: 5px;
    z-index: 2;
    width: 24px;
    height: 24px;
    border: 0;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${Variables.colors.windows_blue};
    color: #333;
    &::before{
        font-family:maleno;
        font-size:12px;
        color: ${Variables.colors.white};
        position:absolute;
        top: 6px;
        left: 7px;
        content: ${props=>(props.id ==='$$-0')?'"\\65"':'"\\2b"'};
    }
    
`
export const ActiveRail = styled.div`
    position: absolute;
    height: 5px;
    z-index: 1;
    margin-top: 15px;
    background-color: #dde5f2;
    border-radius: 5px;
    cursor: pointer;
    left: ${props=>props.source}%;
    width: ${props=> props.target - props.source}%;
`

export const Detail= styled.div`
    border:solid 1px ${Variables.colors.light_grey};
    margin: 16px -21px -20px -21px;
    padding: 16px 20px;
    border-radius: 4px;
    .ranges{
        display:flex;
        width:100%;
        justify-content:space-between;
        div{
            width:50%;
            text-align:center;
            position:relative;
            span{
                display:inherit;
                margin-bottom:8px;
                color:${Variables.colors.medium_grey}
            }
            .number{
                font-family:Number;
                width: 104px;
                height: 42px;
                border-radius: 17px;
                border: solid 1px rgba(112, 112, 112, 0.1);
                line-height: 42px;
                margin: auto;
                margin-bottom: 8px;
                color:${Variables.colors.font};
            }
            &:first-child{
                &::after{
                    content:'';
                    position:absolute;
                    width:1px;
                    height:100%;
                    top:0;
                    left:0px;
                    background:${Variables.colors.light_grey};
                }
            }
        }
    }
    .but{
        margin:8px -20px;
        margin-bottom:0px;
        border-top:solid 1px ${Variables.colors.light_grey};
        padding-top:16px;
        padding-bottom:8px;
        text-align:center;
        button{
            border:none;
            width: 136px;
            height: 40px;
            border-radius: 8px;
            background-color: ${Variables.colors.windows_blue};
            color:${Variables.colors.white};
            font-size: 12px;
            font-weight: 500;
            line-height: 1.58;
            cursor:pointer;
        }
    }
`