import React, {useState} from 'react'

const App = () => {

  const [color, setColor] = useState('bg-gray-900')

  return (

    <div className={`${color} flex justify-center items-end h-screen w-screen gap-10 text-2xl pb-8`}>
      <button onClick = {() => setColor('bg-red-500')} className='bg-red-500 hover:bg-red-700 rounded p-4'>Red</button>
      <button onClick = {() => setColor('bg-green-500')} className='bg-green-500 hover:bg-green-700 rounded p-4'>Green</button>
      <button onClick = {() => setColor('bg-blue-500')} className='bg-blue-500 hover:bg-blue-700 rounded p-4'>Blue</button>
      <button onClick = {() => setColor('bg-yellow-500')} className='bg-yellow-500 hover:bg-yellow-700 rounded p-4'>Yellow</button>
      <button onClick = {() => setColor('bg-cyan-500')} className='bg-cyan-500 hover:bg-cyan-700 rounded p-4'>Cyan</button>
      <button onClick = {() => setColor('bg-pink-500')} className='bg-pink-500 hover:bg-pink-700 rounded p-4'>Pink</button>
      <button onClick = {() => setColor('bg-violet-500')} className='bg-violet-500 hover:bg-violet-700 rounded p-4'>Violet</button>
      <button onClick = {() => setColor('bg-zinc-500')} className='bg-zinc-500 hover:bg-zinc-700 rounded p-4'>Zinc</button>
    </div>

  )
}

export default App