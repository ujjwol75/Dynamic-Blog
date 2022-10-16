import React from 'react'

const Paragraph = (props) => {
  const {paragraphTitle} = props
  return (
    <div>
      <p className="">{paragraphTitle}</p>
    </div>
  )
}

export default Paragraph
