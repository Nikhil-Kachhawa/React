import React from 'react'

const MainContent = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  return (
    <main>


      {users.map
        (
            user => 
              (
                <ul key={user.id}>
                  <li>{user.id} {user.name} {user.age}</li>
                </ul>
              )
        ) 
      }
    </main>
  )
}

export default MainContent