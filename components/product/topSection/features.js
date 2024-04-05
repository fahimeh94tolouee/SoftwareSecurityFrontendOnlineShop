import React ,{useState} from 'react';
import {FeaturesBox} from '../../../styled_components/product/topSection'
const Features = props => {
    const [featureBoxStatus, setFeatureBoxStatus] = useState(false);
    let items = []
    props.items.forEach(item => {
        let attr = item.attributes
        attr = attr.filter(value => {
            if (value.summary_flag) {
                items.push(value)
            }
        })
    });
    const buts = () => {
        if (items.length > 3) {
            return (
                <React.Fragment>
                    <li className="more">
                        <span
                            onClick={()=>{
                                setFeatureBoxStatus(!featureBoxStatus);
                            }}
                        >موارد بیشتر</span>
                    </li>
                    <li className="less">
                        <span
                            onClick={()=>{
                                setFeatureBoxStatus(!featureBoxStatus);
                            }}
                        >بستن</span>
                    </li>
                </React.Fragment>
            )
            
        }
    }
    return (
        <React.Fragment>
            ویژگی های محصول:
            <FeaturesBox status={featureBoxStatus}>
                {items.map((item, key) =>
                    <li key={key}>{item.name} : {item.value.text}</li>
                )}
                {buts()}
            </FeaturesBox>
        </React.Fragment>
    )
}
export default Features;