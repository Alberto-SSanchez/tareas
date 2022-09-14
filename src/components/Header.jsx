// "rafce" is the snippet to create a component
import React from 'react'

const Header = ({titulo}) => {
  return (
    <header>
        <h1>
            {titulo}
        </h1>
    </header>
  )
}

export default Header
