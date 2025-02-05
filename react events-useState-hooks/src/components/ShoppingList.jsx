import React, {useState} from 'react'

const ShoppingList = () => {

  const [cart, setCart] = useState([{name : "123", quantity : 1},]) 
  
  const handleClick = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    }

  return (
    <div>
        <form action="">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />
            <br />
            <label htmlFor="quantity">Quantity: </label>
            <input type="number" name="quantity" id="quantity" />
            <br />
            <button type="submit" onClick={handleClick}>Add to Cart</button>
        </form>

        <h1>: Shopping List :</h1>

        <ul>
            {cart.map(
                (cartItem) => (
                    <li key = {Math.random() * 1000}>{cartItem.name} {cartItem.quantity}</li>
                )
            )    
            }
        </ul>

    </div>
  )
}

export default ShoppingList