import {Container,Header,Desc,Button,ImageContainer,Container2, ImageContainer2} from "../styled/Main"
import Image from "next/image"
import working from "../public/working.svg"
const Main = () => {
  return (
    <Container className="container">
        <Container2>
          <Header>
            More than just <br/>shorter links
          </Header>
          <Desc>
              Build your brands recognition and get detailed <br/> insights on how your links are performing. 
          </Desc>
          <Button>
              Get Started
          </Button>
        </Container2>
        <ImageContainer>
          <ImageContainer2>
            <Image src={working} height={600} width={1000} layout="fixed"/>
          </ImageContainer2>         
        </ImageContainer>
        
    </Container>
  )
}

export default Main