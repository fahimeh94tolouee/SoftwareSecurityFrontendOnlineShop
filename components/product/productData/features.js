import React from 'react';
import {Box} from "../../../styled_components/product/databox/featuresBox";
const Features = props =>{
    return(
        <Box>
            <span className="features-box-title">مشخصات محصول</span>
            {props.enName}
            <ul>
                {props.productData.map(features => {
                    return (
                        <li key={features.id}>
                            <span className="title">{features.name}</span>
                            <table>
                                <tbody>
                                {features.attributes.map(item => {
                                    if (item.type === "boolean") {
                                        if (item.value.text == 0) {
                                            item.value.text = "خیر";
                                        } else {
                                            item.value.text = "بله";
                                        }
                                    }
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>
                                                <span>{item.value.text}</span>
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </li>
                    );
                })}
            </ul>
        </Box>
    )
}
export default  Features;