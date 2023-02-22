import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleUpClick = () => {
    let res = text.toUpperCase();
    console.log("Converted to Upper case " + res);
    setText(res);
    props.showAlert("Changed to UpperCase", "success");
  };
  const handleLowClick = () => {
    let res = text.toLowerCase();
    console.log("Converted to Lower case " + res);
    setText(res);
    props.showAlert("Changed to LowerCase", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1").value;
    navigator.clipboard.writeText(text);
    props.showAlert("Message Successfully Copied", "success");
  };
  const handleUpchange = (e) => {
    setText(e.target.value);
    let characters = e.target.value.length;
    setCountCharacters(characters);
    let sentence = e.target.value;
    let count = 0;
    sentence += " ";
    for (let index = 0; index < sentence.length; index++) {
      if (
        sentence[index] == " " &&
        sentence[index - 1] != " " &&
        index - 1 >= 0
      ) {
        count++;
      }
    }
    setCountWords(count);
  };
  const extraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const [text, setText] = useState("");
  const [countWords, setCountWords] = useState(0);
  const [countCharacters, setCountCharacters] = useState(0);
  return (
    <>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">
          <h1
            style={{
              color: props.modes === "dark" ? "white" : "black",
              backgroundColor: props.modes === "dark" ? "#0e2e61" : "white",
            }}
          >
            {props.heading}
          </h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Enter your text here"
          value={text}
          onChange={handleUpchange}
          style={{
            color: props.modes === "dark" ? "white" : "black",
            backgroundColor: props.modes === "dark" ? "#0e2e61" : "white",
          }}
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Upper Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert To Lower Case
        </button>

        <button className="btn btn-primary mx-1" onClick={extraSpaces}>
          Handle Extra Spaces
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h2
          style={{
            color: props.modes === "dark" ? "white" : "black",
            backgroundColor: props.modes === "dark" ? "#0e2e61" : "white",
          }}
        >
          Number of words and characters
        </h2>
        <p
          style={{
            color: props.modes === "dark" ? "white" : "black",
            backgroundColor: props.modes === "dark" ? "#0e2e61" : "white",
          }}
        >
          Number of words are {countWords} and characters are {countCharacters}
        </p>
        <div
          className="previewText"
          style={{
            color: props.modes === "dark" ? "white" : "black",
            backgroundColor: props.modes === "dark" ? "#0e2e61" : "white",
          }}
        >
          <h2>Preview</h2>
          <p>{text.length === 0 ? "Enter some text to preview it" : text}</p>
        </div>
      </div>
    </>
  );
}
