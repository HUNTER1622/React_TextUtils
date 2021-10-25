import React, { useState } from 'react'

export default function Textform(props) {

    // Use State hook
    const [text, setText] = useState('');

    // Create Onclick function for UpperCase
    const handleUpClick = () => {
        let uCase = text.toUpperCase();
        setText(uCase);
        props.showalert("Uppercase Enabled","success");

    }

    //Create onClick for LoweCase
    const handleLwClick = () => {
        let lCase = text.toLowerCase();
        setText(lCase);
        props.showalert("Lowercase Enabled","success");
    }
    // Create Onclick for copy
    const handleCopyClick =()=>
    {
        let text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showalert("Copy to clipboard","success");
    }

    // Create OnChange function
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    // Create Onclick for clear text are cleared
    const handleClClick = () => {
        setText("");
        props.showalert("Clear Text","success");
    }
    return (
        <>
            <div className="container my-4">
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label" style={{ color: props.mode === "light" ? "black" : "white" }} ><h1>{props.Heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{ backgroundColor: props.mode === "light" ? "white" : "grey",color: props.mode === "light" ? "black" : "white" }}></textarea>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleLwClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear text</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy text</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters </p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter text in above textbox to preview it here"}</p>
            </div>
        </>
    )
}
