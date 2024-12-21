import React from 'react'

interface buttonAttributes {
    btnText: string;
    width: string;
    height: string;
}

export const Button = (props: buttonAttributes) => {
  return (
    <div>
        <button className={`bg-[#4F9CF9] flex justify-center items-center gap-x-[10px] text-white p-5 rounded-lg ${props.width} ${props.height}`}>
            {props.btnText}  {`->`} 
        </button>
    </div>
  )
}