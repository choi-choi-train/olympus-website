import React from 'react'

export default function TITLE(props) {
    return (
    <div className="container-fluid d-flex flex-column 
                    justify-content-center align-items-center fullheight">
        <img id="titlelogo" src={require('../assets/logo.png')} alt='icon'/>
        <div className="d-flex flex-column align-items-center" style={{zIndex: 2, position: 'absolute', marginTop: '60px'}}>
            <div className="d-flex flex-column align-items-end">
                <h1 className="fw-bold" style={{marginTop:'120px'}}>OLYMPUS</h1>
                <h6 className="gold" style={{marginTop: '-10px'}}>Find strength in numbers.</h6>
            </div>
            <div className="button" style={{marginTop: '100px', zIndex: 1}} onClick={props.onButtonClick}>
                TRY OLYMPUS
            </div>
        </div>
    </div>
    )
}
