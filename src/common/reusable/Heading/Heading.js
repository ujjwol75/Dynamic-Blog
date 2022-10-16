import React from 'react'

const Heading = (props) => {
  const {headingTitle} = props
  return (
    <div>
      <h1 className="">{headingTitle}</h1>
    </div>
  )
}

export default Heading
