import React, { useState } from 'react'
import Display from './components/Display'
import ButtonCont from './components/ButtonCont'

const App = ({}) => {

  const [calVal, setCalVal] = useState('')

  const handleKey = (names) => {
    if (names === 'c') {
      setCalVal('');
    } else if (names === '=') {
      try {
        setCalVal(eval(calVal));
       } catch (error) {
        setCalVal('Error');
      }
    } else {
      setCalVal(calVal + names);
    }
  }
  return (
    <>
    <div className='m-auto w-[400px] bg-gray-200 p-4 h-auto rounded-lg shadow-lg mt-4'>
    <Display calVal={calVal}/>
    <ButtonCont handleKey={handleKey}/>
    </div>
    </>
  )
}

export default App