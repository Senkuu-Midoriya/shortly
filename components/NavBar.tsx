import React from 'react'
import {Container,List,Item,Button1, Button2, Container2,Links} from "../styled/NavBarStyles"
import Image from 'next/image'
import logo from "../public/logo.svg"
// import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
// import { IconSun, IconMoonStars } from '@tabler/icons';
const NavBar = () => {
  return (
    <Container>
        <Image src={logo}/>
        <List>
            <Item>
                <Links href="/" className="links">
                  Features  
                </Links>
            </Item>
            <Item>
                <Links href="/" className="links">
                  Pricing 
                </Links>
                
            </Item>
            <Item>
                <Links href="/" className="links">
                  Resources 
                </Links>
            </Item>
        </List>
        <Container2>
            <Button2>
                Login
            </Button2>
            <Button1>
                Sign Up
            </Button1>
        </Container2>
        
    </Container>
  )
}

export default NavBar