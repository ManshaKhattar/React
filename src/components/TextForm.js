import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick =() => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  }
  const handleLoClick =() => {
    // console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  }

  const handleOnChange =(event) => {
   // console.log("onchange was clicked");      // onChange isliye banaaya as iske bina hm text likh ni paate khud se
    setText(event.target.value)
  }
  const[text, setText] = useState('');
  //text = "new text";      // wrong way to change the state
  //setText("new text");    // right way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">Another label</label> */}
        <textarea className="form-control" value={text} onChange= {handleOnChange} 
        style ={{backgroundColor: props.mode === 'dark' ? 'grey':'white',color: props.mode==='dark'? 'white':'#042743'} }id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-danger mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-info mx-2" onClick={handleLoClick}>Convert to lowercase</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.trim().split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes lagega</p>
      <h2>Preview</h2>
      <p>{text.length>0? text: "Enter something in the textbox above  to preview it here"}</p>
    </div>
    </>
  )
}
