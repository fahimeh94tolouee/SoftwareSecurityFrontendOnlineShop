import React, { useState } from "react";
import {
  AddressOpenBox,
  AddressBox
} from "../../styled_components/shipping/addressBox";
import Modal from "./modal";
const Address = props => {
  const [addressBoxStatus, setAddressBoxStatus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModelData] = useState("");
  const viewMaker = () => {
    const { items } = props;
    if (typeof items[0] === "undefined") {
      return (
        <AddressOpenBox>
          <div className="title">انتخاب آدرس تحویل سفارش</div>
          <span className="notice">
            آدرس مورد نظر خود را جهت تحویل انتخاب فرمایید:
          </span>
          <div
            className="add-address"
            onClick={() => {
              setModalStatus("add");
            }}
          >
            <span>ایجاد آدرس جدید</span>
          </div>
        </AddressOpenBox>
      );
    }
    if (!addressBoxStatus) {
      return (
        <AddressBox>
          <div className="title">انتخاب آدرس تحویل سفارش</div>
          <div className="inner">
            <div className="right">
              <span className="receiver">
                گیرنده:
                {items[0]["name"]}
              </span>
              <ul className="contact">
                <li>
                  شماره تماس:
                  {items[0]["phone"]}
                </li>
                <li>
                  کد پستی:
                  {items[0]["postal_code"]}
                </li>
              </ul>
              <span className="address">
                {items[0]["province"]["label"]} , {items[0]["city"]["label"]} ,
                {items[0]["district"] !== null
                  ? items[0]["district"]["label"] + " , "
                  : ""}
                {items[0]["address"]}
              </span>
            </div>
            <div className="left">
              <div
                className="change"
                onClick={() => {
                  setAddressBoxStatus(true);
                }}
              >
                <span>تغییر آدرس ارسال</span>
              </div>
            </div>
          </div>
        </AddressBox>
      );
    } else {
      return (
        <AddressOpenBox>
          <div className="title">انتخاب آدرس تحویل سفارش</div>
          <span className="notice">
            آدرس مورد نظر خود را جهت تحویل انتخاب فرمایید:
          </span>
          <div
            className="add-address"
            onClick={() => {
              setModalStatus("add");
            }}
          >
            <span>ایجاد آدرس جدید</span>
          </div>
          {items.map((item, index) => (
            <div
              className={`address-bar ${index === 0 ? "active" : ""}`}
              key={item.id}
            >
              <div className="inner">
                <div className="right">
                  <span className="receiver">
                    گیرنده:
                    {item.name}
                  </span>
                  <ul className="contact">
                    <li>
                      شماره تماس:
                      {item.phone}
                    </li>
                    <li>
                      کد پستی:
                      {item.postal_code}
                    </li>
                  </ul>
                  <span className="address">
                    {item.province.label} , {item.city.label} ,
                    {item.district !== null ? item.district.label + " , " : ""}
                    {item.address}
                  </span>
                </div>
                <div className="left">
                  <div
                    className="edit"
                    onClick={() => {
                      setModelData(item);
                      setModalStatus("edit");
                    }}
                  >
                    <span>ویرایش</span>
                  </div>
                  <div
                    className="remove"
                    onClick={() => {
                      props.remove(item.id);
                    }}
                  >
                    <span>حذف</span>
                  </div>
                </div>
              </div>
              <div
                className="back"
                onClick={() => {
                  if (index !== 0) {
                    props.makeDefault(item.id);
                  }
                }}
              >
                {index === 0
                  ? "سفارش به این آدرس ارسال میشود"
                  : "ارسال سفارش به این آدرس"}
              </div>
            </div>
          ))}
        </AddressOpenBox>
      );
    }
  };
  const ModalView = () => {
    if (modalStatus) {
      return (
        <Modal
          status={modalStatus}
          data={modalData}
          onSubmit={(data, id) => {
            props.handleAddress(data, id);
          }}
          close={() => {
            setModalStatus(false);
          }}
        />
      );
    }
  };
  return (
    <React.Fragment>
      {ModalView()}
      {viewMaker()}
    </React.Fragment>
  );
};
export default Address;
