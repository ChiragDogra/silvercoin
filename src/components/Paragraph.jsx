import React from 'react'

function Paragraph({text}) {
  return (
    <div>
        <p className="text-xl sm:4-xl md:5xl text-center sm:text-left my-3">{text}</p>
    </div>
  )
}

export default Paragraph