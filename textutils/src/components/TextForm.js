import React, { useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {

  
  const handleupclick = ()=>{
    let newText= text.toUpperCase()
    setText(newText);
  }
  
  const handleonchange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  
  const [text,setText] = useState('enter text here');
  return (
    
    <>
  
<div className="container my-5">

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">{props.title}</label>
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>

<button type="button" className="btn btn-outline-dark" onClick={handleupclick} >Convert to uppercase</button>
</div>
</>



  )
}
