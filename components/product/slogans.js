import React from 'react';
import {Col, Row} from "styled-bootstrap-grid";
import {SlogansBox} from "../../styled_components/product";

const Slogans = ()=>{
    return(
        <div className="container">
            <SlogansBox>
                <Row>
                    <Col col="12" sm="3">
                        <div className="slogan-item">
                            <i className="icon-truck"></i>
                            <span>Express Delivery</span>
                        </div>
                    </Col>
                    <Col col="12" sm="3">
                        <div className="slogan-item">
                            <i className="icon-pay-8"></i>
                            <span>Cash on Delivery</span>
                        </div>
                    </Col>
                    <Col col="12" sm="3">
                        <div className="slogan-item">
                            <i className="icon-pay-7"></i>
                            <span>Return Guarantee</span>
                        </div>
                    </Col>
                    <Col col="12" sm="3">
                        <div className="slogan-item">
                            <i className="icon-sticker"></i>
                            <span>Authenticity Guarantee</span>
                        </div>
                    </Col>
                </Row>
            </SlogansBox>
        </div>
    )
}
export default Slogans;