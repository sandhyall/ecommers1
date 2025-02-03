import React from 'react'
import Footer from '../Component/Fotters/page'
import Auth from '../Component/auth/page'
import Clothes from '../Component/Clothes/page'
import Flat from '../Component/Flat/data'

const Womem=()=> {
  return (
    <div>
        <Auth/>
        <Flat/>
      <Clothes/>
        <Footer/>
      
    </div>
  )
}

export default Womem
