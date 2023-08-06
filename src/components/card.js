import React from 'react'
import { isMobile } from 'react-device-detect';

export default function CARD(props) {
  return (
    <div>
      {props.justify === 'end'
      ?
      <div className='flex flex-col items-end'>
        <p className='avenirroman' style={{color: 'rgba(243, 240, 254, 0.60)'}}>Features</p>
        <div className='avenirbook text-end text-[2.5rem] md:text-[4rem]'>{props.title}</div>
        <p className='avenirroman text-end w-[18rem]' style={{color: 'rgba(243, 240, 254, 0.60)'}}>
          {props.text}
        </p>
      </div>
      :
      <div className='flex flex-col items-start'>
      <p className='avenirroman' style={{color: 'rgba(243, 240, 254, 0.60)'}}>Features</p>
      <div className='avenirbook text-[2.5rem] md:text-[4rem]'>{props.title}</div>
      <p className='avenirroman w-[18rem]' style={{color: 'rgba(243, 240, 254, 0.60)'}}>
        {props.text}
      </p>
      </div>
      }
    </div>
  )
}
