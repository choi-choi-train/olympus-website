import React from 'react'

export default function header(props) {
    var o = (props.scrollPosition - window.innerHeight + 300) / 120;

    return (
        <div id='header' className="container-fluid header d-flex flex-row" style={{opacity: o.toFixed(1)}}>
            <div className="container-fluid d-flex flex-row align-items-end borderbottom">
                <h3 className='fw-bold' style={{marginRight: '10px'}}>OLYMPUS</h3>
                <h6 className='gold' style={{marginBottom: '13px'}}>Find strength in numbers.</h6>
            </div>
            <img className="key-up" src={require('../assets/grecian_key_up.png')} alt="key"/>
        </div>
    )
}
