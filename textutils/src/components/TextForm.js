import React from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  return (
    
    <>
<div className="container my-5">

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">{props.title}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

</div>




    </>



  )
}
