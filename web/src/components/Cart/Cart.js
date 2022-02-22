import styled from 'styled-components'
import { useState } from 'react'

import CartDropDown from 'src/components/CartDropDown'

const Cart = () => {
  const [isVisible, setVisibility] = useState(false)

  const toggleVisibility = () => setVisibility(!isVisible)

  return (
    <>
      <Button onClick={toggleVisibility}>Cart</Button>
      {isVisible && <CartDropDown />}
    </>
  )
}

export default Cart

// Styles

const Button = styled.button`
  border: none;
  background: none;
  font-size: var(--font-size-2);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
