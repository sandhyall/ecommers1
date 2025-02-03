import React from 'react'
import NavbarComponent from '../Component/navbar/page'
import Product from '../Component/Product/page'
import Item from '../Component/Item/page'
import Newspaper from '../Component/Newspaper/page'
import Fotter from '../Component/Fotters/page'

const shop=()=> {
  return (
    <div>
   <NavbarComponent/>
   <Product/>
   <Item/>
   <Newspaper/>
   <Fotter/>
    </div>
  )
}

export default shop