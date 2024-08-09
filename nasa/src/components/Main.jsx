import React from 'react'

export default function Main(props) {

    const {showData} = props
  return (
    <div className='imgContainer'>
        <img src={showData.hdurl} alt={showData.title || 'bg-Image'} className='bgImage' />
    </div>
    
  )
}
