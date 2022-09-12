import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    font-family: "Poppins";
    height: 24vh;
    padding: 80px 200px;
    padding-bottom: 10px;
    background-color:hsl(260, 8%, 14%);
    color:white;
    overflow: hidden;
`

export const List = styled.ul`
    list-style: none;
    text-align: left;
    display: flex;
    margin-left: 4rem;
`

export const ListContainer = styled.div`
    display: flex;
    margin-right: 15rem;
`
export const ImageContainer = styled.div`
    margin-left: 1.2rem;
    
`

export const Header = styled.h1`
    font-size: 18px;
    color: white;
    margin-bottom: 1rem;
`

export const Header2 = styled.div`
    margin-right: 18rem;
    filter: hue-rotate(0deg) saturate(1) brightness(1200%) saturate(1); 
`

export const ListItem = styled.li`
    font-size: 10px;
    margin-bottom: 1rem;
    margin-left: 4rem;
    display: flex;
    flex-direction:column;
    color: hsl(257, 7%, 63%);
`

export const Links = styled.a`
    color: hsl(257, 7%, 63%);
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 1rem;
    text-transform: capitalize;
    cursor: pointer;
`