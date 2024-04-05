import React from 'react'
import {Box} from '../../styled_components/lib/checkbox'
const Checkbox = props=>{
    return(
        <Box>
            <div className={`checkbox ${(props.status)?'active':''}`}></div>
            {props.title}
        </Box>
    )
}
export default Checkbox