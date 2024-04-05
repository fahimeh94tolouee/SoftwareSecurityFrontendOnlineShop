import React from 'react';
import Checkbox from '../lib/checkbox'
import {FactorBox} from "../../styled_components/shipping";

const Factor =props=>{
    const detail=()=>{
      if(props.status){
          return(
              <div className="factor-detail">
                  <span className="detail-title">فاکتور حقوقی</span>
                    <div className="com">
                        برای صدور فاکتور حقوقی اطلاعات حقوقی خود را وارد کنید.
                        <span>
                            افزودن اطلاعات حقوقی
                        </span>
                    </div>
                  <div className="notice">
                      فاکتور خرید کالاهایی که توسط مال نو عرضه شده‌است به همراه مرسوله برای شما ارسال خواهد شد.
                  </div>
              </div>
          )
      }
    };
    return(
        <FactorBox status={props.status}>
            <div className="title">
                صدور فاکتور
            </div>
            <div className="factor-check" onClick={()=>{
                props.needFactor();
            }}>
                <Checkbox title="درخواست ارسال فاکتور خرید همراه مرسوله" status={props.status} />
            </div>
            {detail()}
        </FactorBox>
    )
};
export default Factor;