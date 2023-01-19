import React from 'react'
import { isMobile } from 'react-device-detect';

export default function CARD(props) {
  var calc = (props.scrollPosition - props.scrollStart) / 3;
  var o = calc.toFixed(2) + "%"

  return (
    isMobile? 
    <div className="d-flex flex-row justify-start mb-2" style={{width: '90%'}}>
      <img className="card-key" src={require('../assets/grecian_key_down.png')} alt="key"
        style={{marginRight: '10px', width:'15px', height:'15px'}}/>
      <div className="d-flex flex-column justify-start">
        <h4 className="gold" style={{zIndex:2, marginTop:'3px'}}>
          {props.title}
        </h4>
        <h6 className="fw-light" style={{zIndex:2}}>
            {props.content}
        </h6>
      </div>
    </div>
    : <div className="card mb-3">
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
