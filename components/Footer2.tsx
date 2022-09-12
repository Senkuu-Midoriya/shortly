import { Container,Header,List,ListContainer,ListItem, Header2, Links, ImageContainer } from '../styled/Footer2'
import pin from "../public/pin.svg"
import facebook from "../public/facebook.svg"
import twitter from "../public/twitter.svg"
import insta from "../public/insta.svg"
import logo from "../public/logo.svg"
import Image from 'next/image'
const Footer2 = () => {
  return (
    <Container>
        <Header2>
            <Image src={logo}/>
        </Header2>
        <ListContainer>
            <List>
                <ListItem>
                    <Header>
                        Features
                    </Header>
                    <Links>
                        Link shortning 
                    </Links>
                    <Links>
                        branded links
                    </Links>
                    <Links>
                        analytics    
                    </Links>
                </ListItem>
                <ListItem>
                    <Header>
                        Resources
                    </Header>
                    <Links>
                        blog
                    </Links>
                    <Links>
                        developers 
                    </Links>
                    <Links>
                        support     
                    </Links>
                </ListItem>
                <ListItem>
                    <Header>
                        Company
                    </Header>
                    <Links>
                        About 
                    </Links>
                    <Links>
                        out team 
                    </Links>
                    <Links>
                        careers     
                    </Links>
                    <Links>
                        contact     
                    </Links>
                </ListItem>
            </List>
           
        </ListContainer>
        <ImageContainer>
                <Image src={facebook}/>
        </ImageContainer>
        <ImageContainer>
                <Image src={pin}/>
        </ImageContainer>
        <ImageContainer>
                <Image src={twitter}/>
        </ImageContainer>
        <ImageContainer>
                <Image src={insta}/>
        </ImageContainer>
    </Container>
  )
}

export default Footer2