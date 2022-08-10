import React from 'react';

export default class SliderStyle extends React.Component {
  render(){
    let style = {
      position: "absolute",
      left: "0",
      height: "15px",
      borderRadius: "8px",
      backgroundColor: "#000"
    };

    let tracker = {
      position: "absolute",
      marginLeft: "-7px",
      marginTop: "-5px",
      width: "14px",
      height: "14px",
      cursor: "pointer",
      borderRadius: "50%",
      border: "solid 2px #000",
      backgroundColor: "#fff"
    }


    return(
      <div style={style}><div style={tracker}></div></div>
    )
  }
}