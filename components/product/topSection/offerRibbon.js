import React from 'react';
const OfferRibbon = props => {
    if (props.variation === undefined) {
        return (
            <div className="out-off">
                <span>
                    ناموجود
                </span>
            </div>
        )
    } else if (props.variation.old_price > 0) {
        return (
            <div className="off">
                <span>
                    فـروش ویـژه
                </span>
            </div>
        )
    }else{
        return null;
    }
};
export default OfferRibbon;