import React, { useState } from "react";

export default function NameSelect(props) {
  const [value, setValue] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const inputChangedHandler = event => {
    let validity = /^[A-Za-z ]+$/.test(value); //only chars and whitespaces
    if (value.trim(" ").length < 2) validity = false; // dont mess with whitespaces

    setDisabled(!validity);
    setValue(event.target.value.trim(" "));
  };

  return (
    <div>
      <h2> ok now we need your name </h2>
      <input type="text" onChange={inputChangedHandler} />
      <button onClick={event => props.clicked(value)} disabled={isDisabled}>
        {" "}
        OK{" "}
      </button>
    </div>
  );
}
