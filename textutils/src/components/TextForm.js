import React, { useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {

  
  const handleupclick = ()=>{
    let newText= text.toUpperCase()
    setText(newText);
  }
  
  const handledownclick = ()=>{
    let Newtext = text.toLowerCase();
    setText(Newtext);
  }

const clear = ()=>{
  let Newtext=''
  setText(Newtext)
}


  const handleonchange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  
  const [text,setText] = useState('');
  return (
    
    <>
  
<div className="container my-5">

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">{props.title}</label>
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>

<button type="button" className="btn btn-outline-dark" onClick={handleupclick} >Convert to Uppercase</button>
<button type="button" className="btn btn-outline-dark" id="button1" onClick={handledownclick} >Convert to Lowercase</button>
<button type="button" className="btn btn-outline-dark" id="button1" onClick={clear} >Clear Text</button>

</div>

<div className="container my-3 ">
<h2 className="heading" >Your Text Summary</h2>
<p className="my-3" >{text.split(" ").length} words and {text.length} characters </p>
<p>{0.008 * text.split(" ").length} Minutes To Read</p>
<h2 className="heading" >Preview</h2>
<p className="my-3">{text}</p>
  </div>

</>

  )
}
