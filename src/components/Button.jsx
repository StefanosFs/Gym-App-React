import React from 'react'

export const Button = (props) => {
  const { text, func } = props

  return (
    <button onClick={func} className="px-8 py-4 rounded-md border border-blue-100 border-solid blueShadow duration-200
      ">
        <p>{text}</p>
      </button>
  )
}
