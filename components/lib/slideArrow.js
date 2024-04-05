import React from 'react'

const Arrow = (props)=>{
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={style}
      onClick={onClick}
    >
        <img src={"/static/images/"+props.side+"_"+props.color+".png"} />
    </div>
  );
}
export default Arrow