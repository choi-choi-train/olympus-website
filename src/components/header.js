import React from 'react'

import Button from './BUTTON.js'

export default function HEADER(props) {
  return (
    <div className="fixed top-0 h-20 px-[2rem] z-50
                    flex flex-row w-full justify-between items-center
                    text-white drop-shadow-2xl" style={{borderBottom:'solid 1px rgba(255, 255, 255, 0.15)'}}>
      <a href="/" className="flex flex-row items-center h-[30%] space-x-[1rem]">
        <img className='object-contain h-[100%] w-auto' src={require('../assets/grecian_key_up.png')} alt='logo'/>
        <div className="text-3xl avenirblack">OLYMPUS</div>
      </a>
      <div onClick={()=>{props.setFocus('signup'); props.signupRef.current.scrollIntoView();}}>
        <Button type='solid' text='Sign Up'/>
      </div>
    </div>
  )
}