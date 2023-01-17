import {db} from '../firebase'
import { collection, addDoc, Timestamp} from 'firebase/firestore'

import React, { useState } from 'react'

export default function SIGNUP() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [created, setCreated] = useState('');

  const [error, setError] = useState(false);
  const [thankyou, setThankYou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (first !== '' && last !== '' && email !== '') {
      try {
        await addDoc(collection(db, 'Website Registrations'), {
          Email: email,
          First: first,
          Last: last,
          Created: Timestamp.now()
        })
        setFirst('')
        setLast('');
        setEmail('');
        setError(false);
        setThankYou(true);
      } catch (err) {
        alert(err)
      }
    } else {
      setError(true);
    }
  }

  function message() {
    if (error) {
      return <div style={{fontWeight: 'lighter', marginTop: '70px', marginLeft: '15px', color: 'rgba(255, 255, 255, 0.5)'}}>Fields missing</div>
    } else if (thankyou) {
      return <div style={{fontWeight: 'lighter', marginTop: '70px', marginLeft: '15px', color: 'rgba(255, 255, 255, 0.5)'}}>Thank you for your support!</div>
    } else {
      return <div></div>;
    }
  }
 
  return (
    <div id='form' className="container-fluid fullheight">
        <h4 style={{marginTop: '40px', marginBottom: '80px'}}>Sign up for early access</h4>
        <form className="d-flex flex-column" style={{marginLeft: '-7px'}}>
          <div id="name">
            <input id="first" type="text"
                        placeholder='First Name'
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}/>
            <input id="last" type="text"
                        placeholder='Last Name'
                        value={last}
                        onChange={(e) => setLast(e.target.value)}/>
          </div>
          <input id="email" type="text"
                      placeholder='Email Address'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}/>
        </form>
        <div className="d-flex flex-row">
          <div className="button" style={{marginTop: '70px', position: 'static', zIndex: 1}}
                onClick={handleSubmit}>
              SUBMIT
          </div>
          {message()}
        </div>
    </div>
  )
}
