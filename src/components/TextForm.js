import { useState } from "react";

export default function TextForm(props) {

    // function to convert text to uppercase
    const BtnUpperHandle = () => {
        const newText = text.toUpperCase();
        updatedText(newText)
    }

    // function to convert text to lowercase
    const BtnLowerHandle = () => {
        const newText = text.toLowerCase();
        updatedText(newText)
    }

    // function to clear the text box
    const BtnClearHandle = () => {
        updatedText("")
    }

    // function to extract email
    const EmailExtractorHandle = () => {
        const email_head = text.split("@gmail.com")[0].split(" ")
        const email = email_head[email_head.length - 1] + "@gmail.com"
        updatedText(email)
    }

    // function to handle changes in the textbox
    const OnChangeHandle = (event) => {
        updatedText(event.target.value)
    }
    const [text, updatedText] = useState('');

    // function to copy text to clipboard
    const copyClipboardHandler = () => {
        var text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
            <div className={`container text-${props.mode==='dark'?'dark':'light'}`}>
                <div className="my-3">
                    <h1>{props.title}</h1>
                    <textarea className="form-control" id="textBox" rows="8" value={text} onChange={OnChangeHandle}></textarea>
                    <button className="btn btn-primary my-3" onClick={BtnUpperHandle}>Upper Case</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={BtnLowerHandle}>Lower Case</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={BtnClearHandle}>Clear Text</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={EmailExtractorHandle}>Get Emails</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={copyClipboardHandler}>Copy to Clipboard</button>
                </div>
                <div className="container my-3">
                    <h1>Text Summary</h1>
                    <p>It has {text.length>0?text.split(" ").length:0} words and {text.length} characters.</p>
                    <p>It will take {0.008 * text.length} Minutes to read it.</p>
                    <h1>Preview</h1>
                    <p>{text.length>0?text:"Enter your text on above container to preview it here."}</p>
                </div>
            </div>
        </>
    )
}

