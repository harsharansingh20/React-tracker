import React, { useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {

  
  const handleupclick = ()=>{
    let newText= text.toUpperCase()
    setText(newText);
    props.showAlert("Converted to uppercase !", "success");
  }
  
  const handledownclick = ()=>{
    let Newtext = text.toLowerCase();
    setText(Newtext);
    props.showAlert("Converted to lowerercase !", "success");

  }

const clear = ()=>{
  let Newtext=''
  setText(Newtext)
  props.showAlert("Text cleared!", "success");

}

const firstCap = ()=>{
        let newText = text.toLowerCase() 
        let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(newText2)
        props.showAlert("First word capitalized !", "success");

    }

const copy = ()=>{
  let text = document.getElementById('exampleFormControlTextarea1');
  text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("Copied to clipboard !", "success");


}

const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
props.showAlert("Extra spaces removed !", "success");

}




  const handleonchange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  
  const [text,setText] = useState('');

  

  return (
    
  
  <>

  <div style={{height:'50px'}}>

  
<div className="container my-5" style={{ color:  props.mode=== 'dark'?'white':'black' }} >

<div className="mb-3" >
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
  <textarea className="form-control"   value={text} onChange={handleonchange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white' , color:  props.mode=== 'dark'?'white':'black' }} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>

<button type="button" disabled = {text.length === 0}  className="btn btn-outline-info mx-2 my-2" onClick={handleupclick} >Convert to Uppercase</button>
<button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-2 my-2" id="button1" onClick={handledownclick} >Convert to Lowercase</button>
<button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-2 my-2" id="button1" onClick={clear} >Clear Text</button>
<button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-2 my-2" id="button1" onClick={firstCap} >First Word Capital</button>
<button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-2 my-2" id="button1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
<button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-2 my-2" id="button1" onClick={copy} >Copy Text</button>

</div>

<div className="container my-3 " style={{ color:  props.mode=== 'dark'?'white':'black' }} >
<h2 className="heading"  >Your Text Summary</h2>
<p className="my-3" >{text.split(/\s+/).filter((element)=>{
  return element.length!==0
}).length} words and {text.length} characters </p>
<p>{0.008 * text.split(" ").filter((element)=>{
  return element.length!==0}).length} Minutes To Read</p>
<h2 className="heading" >Preview</h2>
<p className="my-3">{text.length>0?text:"Enter Your Text Above To Preview It Here"}</p>
  </div>
</div>

</>

  )
}
