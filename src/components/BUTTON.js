import React, { useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

export default function BUTTON(props) {
    const [hover, setHover] = useState(false);
    const ref = useRef(null);

    const iconSpring = useSpring({
        width: hover ? ref.current.offsetWidth + 13 + 'px' : '44px',
        opacity: hover ? '100%' : '15%',
    })
    
    return (
        <div className='rounded-full avenirbook clickable px-[20px] py-[10px] bg-white text-black'>
            <div>
            {props.text}
            </div>
        </div>
    )
}
