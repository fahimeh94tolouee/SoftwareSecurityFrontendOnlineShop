import React from 'react';
const Rating = props => {
    let stars = []
    for (let index = 1; index < 6; index++) {
        if (index <= props.rate) {
            stars.push('active');
        } else {
            stars.push('');
        }
    }

    return (
        <ul>
            {stars.map((star, key) =>
            <li key={key} className={`star ${star}`}></li>
            )}
            <li className="text">
                {props.amount}{" rating"}
            </li>
        </ul>
    )
}
export default Rating;