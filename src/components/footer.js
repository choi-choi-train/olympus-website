import React from 'react'

export default function footer() {
  return (
    <div className="container-fluid d-flex flex-row justify-content-end align-items-end
                    footer padded">
        <h6 className='fw-bold black'>OLYMPUS {new Date().getFullYear()}</h6>
    </div>
  )
}
