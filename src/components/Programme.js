import React from "react";

const Programme = (props) => {
  return (
    <div className="ensemble">
      <div className="heure">{props.time}</div>
      <img src={props.image} />
      <div className="colonne">
        <div className="titre">{props.title}</div>
        <div className="type"> {props.type}</div>
        <div className="troisderniers">
          <div className="duration">{props.duration}</div>
          <div className="isUnseen">
            {props.isUnseen}
            <span>
              {props.isUnseen === false ? props.isUnseen : "• Inédit"}
            </span>
          </div>
          <div className="direct">
            {props.direct}
            <span>{props.direct === false ? props.direct : "• Direct"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programme;
