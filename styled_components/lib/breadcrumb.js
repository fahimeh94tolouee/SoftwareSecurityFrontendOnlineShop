import styled from 'styled-components';
import Variables from '../variables';

export const List = styled.ul`
    padding:0px;
    margin:0px;
    list-style:none;
    li{
        display:inline-block;
        &:before{
            content:'/';
            padding:0px 4px;
        }
        &:first-child{
            &:before{
                content:'';
            }
        }
        a{
            color:${Variables.colors.medium_grey};
        }
    }
`