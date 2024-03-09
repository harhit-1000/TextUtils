import React, { useState } from 'react'
import { Link } from "react-router-dom";
export default function TextForm(props) {


  const handleExtraSpaceClick = () => {
    let newText = text.split(/[" "]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space is removed","success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied","success");
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted into uppercase","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted into owercase ","success");

  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className='container' style= {{color : props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <div className="container mb-3">
            <textarea className="form-control" data-bs-theme={props.mode} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary pl-3 mx-1" onClick={handleUpClick} >Convert to uppercase</button>
          <button className="btn btn-primary pl-3 mx-1" onClick={handleLoClick} >Convert to lowercase</button>
          <button className="btn btn-primary pl-3 mx-1" onClick={handleCopyClick} >Copy text</button>
          <button className="btn btn-primary pl-3 mx-1" onClick={handleExtraSpaceClick} >Remove extra spaces</button>
        </div>
      </div>
      <div className="container my-3" style={{color : props.mode === 'light'?'black':'white'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>

  )
}
