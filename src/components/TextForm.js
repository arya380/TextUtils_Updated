import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [Email, setEmail] = useState([]);

  const handleClick = () => {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleclClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleemailClick = () => {
    let newText = text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
    );

    setEmail(newText);
    console.log(typeof text);
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-3" onClick={handleClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleloClick}>
          Convert to lowecase
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleclClick}>
          Clear text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleemailClick}
        >
          Extract email
        </button>
      </div>
      <div className="container my-3 ">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words And {text.length} Chracters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2> Preview</h2>
        <p>{text}</p>
        <h2>Email</h2>
        <p>{Email}</p>
      </div>
    </>
  );
}
