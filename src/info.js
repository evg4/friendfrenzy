import React from "react";

function Info(infoProps) {
  return (
    <div>
      <p>Age: {infoProps.age}</p>
      <p>Gender: {infoProps.gender}</p>
    </div>
  );
}

export default Info;
