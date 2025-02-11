import React from 'react'
import './weather.css'
import search from '../assets/search.png'

const weather = () => {
  return (
    <div className='weather'>
        <div className='search_bar'>
            <input type="text" placeholder='search'/>
            <img src={search} alt="" />
        </div>
    
    </div>
  )
}

export default weather