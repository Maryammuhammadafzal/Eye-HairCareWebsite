import React from 'react'

const Button = ({title}) => {
  return (
    <div className='w-fit flex items-center h-20' >
      <button className='w-[120px] py-3 rounded-4xl flex justify-center items-center border border-white hover:bg-transparent hover:text-black hover:border-black bg-[#30D5C8] text-white'>{title}</button>
    </div>
  )
}

export default Button
