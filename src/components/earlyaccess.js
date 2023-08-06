import React from 'react'

export default function Earlyaccess() {
  return (
    <div className='relative text-white w-[200px] h-[200px] invisible lg:visible'
        >
        <div className=''>
          <img className='object-contain spin' alt='earlyaccesstext' src={require('../assets/earlyaccessspin.png')}/>
          <div className='absolute left-0 top-0 w-full h-full p-[2rem]'>
            <div className='rounded-full w-full h-full border-[1px] border-white border-solid flex justify-center items-center'>
              <img className='w-[75px] h-auto' src={require('../assets/arrow.png')} alt='arrow'/>
            </div>
          </div>
        </div>
    </div>
  )
}
