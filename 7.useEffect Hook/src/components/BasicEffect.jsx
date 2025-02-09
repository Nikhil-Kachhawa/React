import React, {useEffect} from 'react'

const BasicEffect = () => {

  useEffect(() => {
    console.log('useEffect is called')
  }, [])  

  return (
    <div>
        <h1>: BasicEffect - See console for effect :</h1>
    </div>
  )
}

export default BasicEffect