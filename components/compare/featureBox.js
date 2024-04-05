import React from "react";
import { Box } from "../../styled_components/compare/featureBox";
const FeatureBox = props => {
  if (props.products.length <= 0) {
    return null;
  } else {
    return (
      <div className="container">
        {props.features.map(feature => (
          <Box>
            <div className="title">{feature.title}</div>
            {feature.attributes.map(attribute => (
              <React.Fragment>
                <div className="title-row">
                  <div className="title-box">{attribute.title}</div>
                  {props.products.map(product => (
                    <div className="data-box" key={product.id} />
                  ))}
                </div>
                <div className="data-row">
                  {props.products.map(product => (
                    <div className="data-box" key={product.id}>
                      {product.product_data.map(item => {
                        if (item.slug === attribute.slug) {
                          return item.value;
                        }
                      })}
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </Box>
        ))}
      </div>
    );
  }
};
export default FeatureBox;
