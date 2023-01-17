import React from 'react'

export default function SOLUTION(props) {
    var o = (props.scrollPosition - 400) / 380;
    if (o < 0) {
        o = 0;
    }

    const mobile_style = {
        opacity: '100%',
        position: 'absolute',
        objectFit: 'cover',
        width: '100%',
        height: '200px',
        left: '0px'
    }

    return (
        <div className="container-fluid fullheight">
            <h2 style={{marginTop: '200px'}}>OUR SOLUTION</h2>
            <div id="solution">
                <p>
                    <mark>OLYMPUS</mark> is an all-in-one mobile platform that enables weightlifters to analyze key metrics, 
                    share their progress, and engage with a 
                    global community of athletes.
                </p>
            </div>
            <div className="button" style={{marginTop: '50px', zIndex: 1}} onClick={props.onButtonClick}>
                LEARN MORE
            </div>
            {
                props.mobile? <img src={require('../assets/bar.png')} alt='bar'
                style={mobile_style}/>
                : <img id="solutionimg" src={require('../assets/bar.png')} alt='bar'
                style={{opacity: o, marginLeft: -50*o}}/>
            }
        </div>
    )
}
