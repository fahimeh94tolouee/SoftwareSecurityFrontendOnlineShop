import styled from 'styled-components'
import Variables from '../variables'
export const Box= styled.div`
    padding-right:30px;
    font-size: 13px;
    font-weight: 500;
    min-height:30px;
    line-height: 1.62;
    display: flex;
    cursor:pointer;
    .checkbox{
        min-width: 20px;
        height: 20px;
        border-radius: 4px;
        border: solid 0.5px rgba(112, 112, 112, 0.5);
        margin-right: 8px;
    }
    .active{
        background:${Variables.colors.nice_blue};
        position: relative;
        &::before{
            font-family:maleno;
            content: "\\e030";
            color:${Variables.colors.white};
            position:absolute;
            font-size: 13px;
            top: -1px;
            right: 3px;
        }
    }
`