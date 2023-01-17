import React from 'react'

export default function CARD(props) {
  var calc = (props.scrollPosition - props.scrollStart) / 3;
  var o = calc.toFixed(2) + "%"

  return (
    <div className="card mb-3">
        <h4 className="gold" style={{zIndex:2}}>
            {props.title}
        </h4>
        <div className="d-flex flex-row">
          <img className="card-key" src={require('../assets/grecian_key_down.png')} alt="key"/>
          <div className="bordertop" style={{height:'15px', marginTop:'5px', width:o}}></div>
        </div>
        <div id="card-shadow" style={{zIndex: 1, marginLeft: '70%', height: '100px', width: '300px'}}></div>
        <h6 className="fw-light" style={{zIndex:2}}>
            {props.content}
        </h6>
    </div>
  )
}
