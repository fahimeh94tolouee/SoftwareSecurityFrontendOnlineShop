import React from 'react';
import { Box } from '../../styled_components/lib/fixedFilterBox'
const FixedFilterBox = props => {
    const title = () => {
        if (props.title !== undefined) {
            return (
                <div className="title">
                    {props.title}
                </div>
            )
        }
    }
    return (
        <Box>
            {title()}
            <div className="content">
                {props.children}
            </div>
        </Box>
    )
}
export default FixedFilterBox