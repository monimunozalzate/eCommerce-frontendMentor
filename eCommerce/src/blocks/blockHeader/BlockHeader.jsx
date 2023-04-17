import React from 'react'
import NavBar from '../../components/navBar/NavBar'

const BlockHeader = ({addingToCart, setaddingToCart}) => {
  return (
    < >
    <NavBar addingToCart={addingToCart} setaddingToCart={setaddingToCart}/>
    </>
  )
}

export default BlockHeader