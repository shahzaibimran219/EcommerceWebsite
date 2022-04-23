import styled  from 'styled-components'
import React from 'react'

const Container = styled.div`
    height: 20px;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 5px;
    font-size: 14px;
    font-weight: bolder;
`

const Announcement = () => {
  return (
    <Container>Super Deal! Free shipping on order over $500</Container>
  )
}

export default Announcement