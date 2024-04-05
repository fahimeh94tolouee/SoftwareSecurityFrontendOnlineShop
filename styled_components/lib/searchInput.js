import styled from 'styled-components'
import Variables from '../variables'
export const Box = styled.div`
    width:100%;
    position:relative;
    input{
        border:none;
        background-color:${Variables.colors.dark_white};
        line-height:38px;
        width:100%;
        padding:0px 8px;
        padding-right:36px;
        font-size:12px;
        border-radius: 8px;
        border:1px solid ${Variables.colors.dark_white};
        &::placeholder{
            color:${Variables.colors.light_font};
        }
        &:focus{
            background-color:${Variables.colors.white};
            border:1px solid ${Variables.colors.windows_blue};
        }
    }
    button{
        position:absolute;
        border:none;
        background:none;
        right:2px;
        top:8px;
        cursor:pointer;
        &::before{
            font-family:maleno;
            content: "\\e012";
            font-size:20px;
            color:${Variables.colors.warm_grey}
        }
    }
`