import React from 'react'
import Person from './components/Person'
import Products from './components/Products';
import Car from './components/Car';

const App = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  
  const products = [
  { id: 1, name: "Phone", price: "$699" },
  { id: 2, name: "Laptop", price: "$1200" },
  { id: 3, name: "Headphones", price: "$199" },
];

  return (
    <>
    <h1>App Component</h1>
    <Person name="Alice" age={25}  />
    <Products name="Phone" price="$699"/>
    <Car>
      <h2>Car Component</h2>
      <p>Car Component Content</p>
    </Car>
    </>
  )
}

export default App