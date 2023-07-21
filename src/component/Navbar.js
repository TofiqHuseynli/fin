import React from 'react';
import img from "../img/kisspng-turkey-2-1718-sper-lig-sports-league-sports-t-app-spor-toto-sper-lig-cepte-5b758641954406.9370324115344287376114.png";




function Navbar({ setAdd }) {
  return (

    <div className='d-flex justify-content-between  nav '>
      <img src={img} className='img-logo'/>
      <button
        onClick={() => setAdd(true)}
        className='bt'><span className='plus'>+</span> Add</button>
    </div>
  )
}

export default Navbar
