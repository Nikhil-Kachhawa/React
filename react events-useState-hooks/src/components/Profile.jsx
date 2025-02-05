// import React, {useState} from 'react'

// const Profile = () => {
  
//     const [user, setUser] = useState({
//         name : "", age
//     }); 
      
//     const handleClick = (event) => 
//     {
//         event.preventDefault()
//         setUser(event.target.value, ...user)
//         console.log(event)
//     }

//   return (
//     <div>
//         <form action="">
//             <label htmlFor="name">Name:</label>
//             <input type="text" name="name" id="name" />
//             <br />
//             <label htmlFor="age">Age:</label>
//             <input type="number" name="age" id="age" />
//             <br />
//             <button type="submit" onClick={handleClick}>Submit</button>
//         </form>
//         <h1>: Profile Information :</h1>
//         <ul>
//             {
//                 user.map(
//                     (user) => (
//                 <li key= {Math.Random() * 1000}>{user.name} - {user.age}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default Profile