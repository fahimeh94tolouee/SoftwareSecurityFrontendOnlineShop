import styled from 'styled-components'
import Variables, { transition } from '../variables'
export const Box = styled.div`
    background:${Variables.colors.white};
    border-radius:4px;
    border:solid 1px ${Variables.colors.light_grey};
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
    margin-bottom:16px;
    overflow: hidden;
    position:relative;
    .title{
        border-bottom:solid 1px ${Variables.colors.light_grey};
        padding:15px 20px;
        font-weight:500px;
        position:relative;
        display:flex;
        justify-content:space-between;
        width:100%;
        cursor:pointer;
        i{
            display:inline-block;
            transform: ${props => (props.status) ? 'rotate(180deg)' : 'rotate(0deg)'};
            ${transition(0.3)}
            font-style: normal;
            &:before{
                font-size:12px;
                color:${Variables.colors.windows_blue};
                content: "\\76";
                font-family:maleno;
            }
        }
    }
    .content{
        padding:${props => (props.status) ? '20px' : '0px'};
        height:${props => (props.status) ? 'auto' : '0px'};
        max-height:400px;
        overflow-Y:auto;
        overflow-x: hidden;
    }
    .checkbox-filter-search{
        display:${props => (props.status) ? 'block' : 'none'};
        width:100%;
        background-color:${Variables.colors.white};
        padding:16px 20px;
        z-index:1;
        input{
            background-color:${Variables.colors.white};
            border-color:${Variables.colors.windows_blue};
        }
    }
    .checkbox-filter-separator{
        display:block;
        content:'';
        width:100%;
        height:55px;
    }
    .check-section{
        display:flex;
        justify-content:space-between;
        cursor:pointer;
        .color{
            width:16px;
            height:16px;
            border-radius:16px;
            border: solid 1px rgba(0, 0, 0, 0.05);
        }
        .en-name{
            font-size:13px;
            font-weight:normal;
            line-height:30px;
        }
    }
`