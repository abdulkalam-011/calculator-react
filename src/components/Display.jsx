import React from 'react'

const Display = ({calVal}) => {
  return (
    <><div className='flex justify-center items-center h-20 w-[100%] mb-4 rounded-2xl'>
    <input value={calVal} className='border-2 text-4xl text-right w-[100%] h-[100%] rounded-xl px-3' type="text" readOnly/>
    </div>
    </>
  )
}

export default Display