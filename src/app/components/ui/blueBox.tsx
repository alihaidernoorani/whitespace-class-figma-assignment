import React from 'react'

interface BlueBoxProps {
  width: string;
  height: string;
}

export const BlueBox = ({width, height}: BlueBoxProps) => {
  return (
    <div className={`${width} ${height} bg-[#C4DEFD] `}>

    </div>
  )
}