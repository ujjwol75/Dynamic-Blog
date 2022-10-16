import React from 'react'
import { Container } from 'react-bootstrap'

const index = ({children}) => {
  return (
    <Container 
    style={{ 
    padding: '20px',
    boxSizing:'border-box',
    borderRadius:'5',
    boxShadow:'0 1px 20px 0 rgb(0 0 0 / 10%)' ,
    marginTop: '40px',
    marginBottom: '20px'
    }}
    >{children}</Container>
  )
}

export default index