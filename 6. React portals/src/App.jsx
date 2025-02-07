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