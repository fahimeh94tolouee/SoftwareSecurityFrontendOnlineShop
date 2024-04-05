import styled from 'styled-components'
import Variables from '../variables'
export const Box=styled.div`
    background:${Variables.colors.white};
    border-radius:4px;
    border:solid 1px ${Variables.colors.light_grey};
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
    margin-bottom:16px;
    overflow: hidden;
    .title{
        border-bottom:solid 1px ${Variables.colors.light_grey};
        padding:15px 20px;
        font-weight:500px;
        position:relative;
    }
    .content{
        padding:20px;
    }
    .switch{
        display:flex;
        justify-content: space-between;
        .but{
            direction:ltr;
        }
    }
`