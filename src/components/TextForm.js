import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //   used for dynamic changes without reloading the page
  const [text, setText] = useState("Enter text here");
  return (
    <div className="container my-5">
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
};

export default TextForm;
