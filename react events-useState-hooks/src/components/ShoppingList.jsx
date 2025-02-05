import React, {useState} from 'react'

const ShoppingList = () => {

  const [cart, setCart] = useState([]) 
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setQuantity(Math.max(0, Number(event.target.value)))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(name.trim() && quantity > 0){
      setCart([...cart, {name, quantity}])
    }
    setName("")
    setQuantity("")
  }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={name} onChange={handleNameChange}/>
            <br />
            <label htmlFor="quantity">Quantity: </label>
            <input type="number" name="quantity" id="quantity" value={quantity} onChange={handleQuantityChange}/>
            <br />
            <button type="submit">Add to Cart</button>
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