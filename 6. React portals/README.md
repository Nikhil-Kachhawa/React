React Portal :
----------------
- Portal is a feature that allows you to render a child component into a DOM node that exists outside the hierarchy of the parent component.
- This can be used in the scenarios like modals, tooltips, dropdowns where u want to break out of the usual parent-child structure and render in a different part of the DOM
- index.html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body style="background-color: rgb(26, 23, 23); color: rgb(231, 224, 26);" >
    <div id="root"></div>
    <div id="react-portal"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

- App.jsx

import React, {useState} from 'react'
import Portals from './components/Portals';

const App = () => {

  const [copiedText, setCopiedText] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (copiedText.trim()){
    setClicked(true)
    navigator.clipboard.writeText(copiedText)
    setCopiedText('Copied to clipboard')
    setTimeout(() => {
        setCopiedText('')
        setClicked(false)
      }, 10000)
    }  
  }

  return (
    <div>
      <label htmlFor="text"> Text to be copied: </label>
      <input type="text" name="text" id="text" value ={copiedText} onChange = {(e) => setCopiedText(e.target.value)} />
      <button type="submit" onClick = {handleClick}>Copy Text</button>
      <Portals clicked = {clicked}/>
      
      {/* {
        clicked ? <h1> Notification: {copiedText}</h1> : <h1></h1>
      }   */}
    </div>
  )
}

export default App

- components/Portals.jsx
import React from "react";
import { createPortal } from "react-dom";

const Portals = ({ clicked }) => {
  return createPortal(
    <div style={styles.portal}>
      {clicked && <p>Copied to clipboard</p>}
    </div>,
    document.getElementById("react-portal") // Ensure this div exists in index.html
  );
};

const styles = {
  portal: {
    position: "fixed",
    width : '50%',
    top: "50%",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },
};

export default Portals;
