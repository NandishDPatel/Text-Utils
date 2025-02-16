import React, {useState} from "react";

export default function TextForm(props) {
  
    const [text,setText] = useState("");
    
    const handleUpClick = () => {
        // console.log("Uppercase clicked");
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase(text);
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleRevClick = () => {
        let newText = '';
        for (let index = text.length-1; index >= 0; index--) {
            const char = text[index];
            newText += char;
        }
        setText(newText);
    }

    //if you don't define onchange you can't change the text
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color : props.mode==='light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" value={text}  style={{backgroundColor: props.mode==='dark' ? 'lightgrey' : 'white', color : props.mode==='light' ? 'grey' : 'white'}} onChange={handleOnChange}></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleRevClick}>Reverse String</button>
        
      </div>
    </div>
    <div className="container my-3" style={{color : props.mode==='light' ? 'black' : 'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((ele)=> {return ele.length!==0}).length} words, {text.length} characters</p>
        <p>User will need {0.008 * text.split(" ").filter((ele)=> {return ele.length!==0})} minutes to read the entered text</p>
        <h4>Preview</h4>
        <p>{text.length>0 ? text : 'Enter something in the textarea to show something'}</p>
    </div>
        </>
    
  );
}
