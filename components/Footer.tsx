import React from 'react'
import {Container,Header,Button,Container2,ImageContainer} from "../styled/Footer"
import boost from "../public/boost.svg"
import Image from 'next/image'
const Footer = () => {
  return (
    <Container>
      
      <ImageContainer>
        <Image src={boost} width={7500} height={1550}/>
      </ImageContainer>
      <Container2>
        <Header>
          Boost your links today
        </Header>
        <Button>
          Get Started
        </Button>
      </Container2>
      
    </Container>
  )
}

export default Footer