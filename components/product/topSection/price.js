import React from 'react';

const Price = props =>{
    if (props.old_price > 0) {
        return (
            <div className="price">
                <div className="old">
                    <span className="through">
                        {props.old_price.toLocaleString('fa-IR')}
                    </span>
                    <span className="currency"> قیمت قبل</span>
                </div>
                <div className="box">
                    <div className="value">
                        {props.price.toLocaleString('fa-IR')}
                        <span className="currency"> تومان</span>
                    </div>
                    <div className="discount">
                        {props.discount_percent}% تخفیف
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="price">
                {props.price.toLocaleString('fa-IR')}
                <span className="currency"> تومان</span>
            </div>
        )
    }
}
export default Price;