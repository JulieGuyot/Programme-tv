import React from "react";
import Programme from "./Programme";

const Programmes = ({ data }) => {
  console.log("la props data reçue:", data);
  return (
    <div className="programmes">
      {data.map((emission, index) => {
        console.log("index", index, "emission", emission);
        return (
          <Programme
            time={emission.time}
            title={emission.title}
            type={emission.type}
            image={emission.image}
            duration={emission.duration}
            isUnseen={emission.isUnseen}
            direct={emission.direct}
          />
        );
      })}
    </div>
  );
};
export default Programmes;
