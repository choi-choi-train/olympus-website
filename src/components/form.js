import {db} from '../firebase'
import { collection, addDoc, Timestamp} from 'firebase/firestore'

import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'

export default function Form() {
  const [email, setEmail] = useState('');

  const [error, setError] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  const submitSpring = useSpring({
    backgroundColor: (email === '') ? 'rgba(245, 233, 137, 0.3)' : 'rgba(245, 233, 137, 1)',
    color: (email === '') ? '#F5E989' : '#0B0B0C',
    cursor: (email === '') ? 'default' : 'pointer',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email !== '') {
      try {
        await addDoc(collection(db, 'Website Registrations'), {
          Email: email,
          Created: Timestamp.now()
        })
        setEmail('');
        setError(false);
        setThankYou(true);
      } catch (err) {
        alert(err)
      }
    }
  }

  return (
    <div>
      <p id='form' className='flex w-full border-solid border-[1px] border-white rounded-full p-[8px] justify-start items-center avenirroman'>
        <input className='bg-[rgba(0,0,0,0)] px-[20px] w-[100%]' 
                id="email" type="text"
                placeholder='ex) info@projectolympus.app'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
        <animated.div className='clickable text-black py-[8px] px-[18px] rounded-full'
              onClick={handleSubmit} style={submitSpring}>
            Submit
        </animated.div>
    </p>
    <div className='avenirroman text-gold my-[1rem]'>
      {
        thankYou
        ? 'Thank you, and welcome to Olympus! We will reach out to you shortly with early access details.'
        : ''
      }
    </div>
    </div>
  )
}
