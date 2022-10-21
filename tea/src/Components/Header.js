import React from 'react'
import Barrys_Gold from './img/Barrys_Gold.webp'
import Barrys_Original from './img/Barrys_Original.webp'
import Barrys_Decaf from './img/Barrys_Decaf.webp'


function Header() {
  return (
    <div className='header'>
      <h2>Barry's Irish Tea</h2>
      <h4>Est 1901</h4>
      <div className='header-images'>
      <img style={{ width: "18%", height: "100%" }} src={Barrys_Gold} alt="Barrys-Gold" />
      <img style={{ width: "18%", height: "100%" }} src={Barrys_Original} alt="Barrys-Original" />
      <img style={{ width: "18%", height: "100%" }} src={Barrys_Decaf} alt="Barrys-Decaf" />
      </div>
    </div>
  )
}

export default Header

//rfcp is god tier