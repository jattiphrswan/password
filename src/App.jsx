import { useState, useCallback } from 'react'


// import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(()  => {
    let pass =""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for (let i = 0; i < length; i++){
     const char =  Math.floor(Math.random() * str. length + 1 )
     pass += str.charAt(char) 
    }
    setPassword(pass)
  }, [length , numberAllowed , charAllowed]) 

  return (
    <div className='w-full max-w-md h-screen  mx-auto shadow-sm rounded-lg px-4 pb-10 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-white text-center'>
        password gentrator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden'>
          <input
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
           type="text" 
            readOnly
           />
           <button className='bg-green-500 text-white p-5'>
            copy
           </button>
      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
              <input type="range" 
                min={6}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length">length : {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
             <input type="checkbox"
             name=''
             id=''
             defaultChecked={numberAllowed}
             onChange={() => {setNumberAllowed ((prev) => !prev)} }
              />
              <label htmlFor="number">number</label>
          </div>
          <div className='flex item-center gap-x-1'>
             <input type="checkbox"
             name=''
             id=''
             defaultChecked={charAllowed}
             onChange={() => {setCharAllowed ((prev) => !prev)} }
              />
              <label htmlFor="char">char</label>
          </div>
      </div>
      <div onClick={generatePassword} className='bg-green-500 text-white p-3'>Genrate</div>
    </div>
  )
}

export default App( {

  
  plugins: [react()],
  base: '/repository-name/'
  
}
)

