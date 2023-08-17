import React from "react";

function LoveButton(loveButtonProps) {
  return (
    <button name={loveButtonProps.name} onClick={loveButtonProps.onClick}>
      Send some love to {loveButtonProps.name}
    </button>
  );
}

export default LoveButton;
