import {Line,Container,Section, Header, Desc2, Header2, Desc, Card, Card1, Card2, Main, ImageContainer, ImageContainer2, InputContainer, Input,Button, CardsContainer} from "../styled/Second"
import Image from "next/image"
import p1 from "../public/p1.svg"
import records from "../public/records.svg"
import custom from "../public/custom.svg"
import stats from "../public/stats.svg"

const Second = () => {
  return (
    <Container>
        <Main>
            <ImageContainer>
                <Image src={p1} height={400} width={3000}/>
            </ImageContainer>
            <InputContainer>
                <Input placeholder="Shorten a link here..."/>
                <Button>
                    Shorten it!
                </Button>
            </InputContainer>
        </Main>
        <Section>
            <Header>
                Advanced Statictics
            </Header>
            <Desc>
                Track how you links are performing across the web with <br/> out advanced statictics dashboard.
            </Desc>
            <CardsContainer>
                <Line/>
                <Card>
                    <ImageContainer2>
                        <Image src={stats}/>
                    </ImageContainer2>
                    <Header2>
                        Brand Recognition
                    </Header2>
                    <Desc2>
                        Some random text
                    </Desc2>
                </Card>
                <Card1>
                    <ImageContainer2>
                        <Image src={records} height={40} width={40}/>
                    </ImageContainer2>
                    <Header2>
                        Detailed records
                    </Header2>
                    <Desc2>
                        Some random text
                    </Desc2>
                </Card1>
                <Card2>
                    <ImageContainer2>
                        <Image src={custom}/>
                    </ImageContainer2>
                    <Header2>
                        Fully Customizable
                    </Header2>
                    <Desc2>
                        Some random text
                    </Desc2>
                </Card2>
            </CardsContainer>
            
        </Section>
        
    </Container>
  )
}

export default Second