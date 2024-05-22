import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("This is Upper", "primary");
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("This is Lower", "warning");
    }

    const handleChange = (event) => {
        console.log("This is change function");
        setText(event.target.value);
        // showAlert("This is dark", "Success");

    }
    const handleCopyCase = () => {

        navigator.clipboard.writeText(text);
        props.showAlert("This is copy", "danger");

    }
    const handleClearCase = () => {
        let newText = "";
        setText(newText);
        props.showAlert("This is clear", "info");
    }
    


    return (
        <>
            <div className="container my-4" style={{ color: props.mode === ("dark" || "success") ? 'white' : '#4D4B4A' }} >
                <h1>{props.txt}</h1>
                <div className="mb-4" >
                    <textarea className="form-control" id="area" value={text} style={{ backgroundColor: props.mode === "dark" ? "#4D4B4A" : "white", color: props.mode === "dark" ? 'white' : '#4D4B4A' }} onChange={handleChange} rows="8" placeholder='Enter Text to Convert in Upper Case'></textarea>
                </div>


                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Upper</button>

                <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleLowerCase}>Lower</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyCase}>Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearCase}>Clear All</button>
            </div >
            <div className='container my-2' style={{ color: props.mode === ("dark" || "success") ? 'white' : '#4D4B4A' }}>
                <h2>Words and Characters</h2>
                <p>{`Characters = ${text.length}`}</p>
                <p>{`Words = ${text.split(/\s+/).filter((element)=>{return (element.length!==0)}).length}`}</p>
                <p>{`Average Time to read = ${(0.008 * (text.split(" ").filter((element)=>{return (element.length!==0)}).length))}`}</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>

            </div>

        </>

    )
}



