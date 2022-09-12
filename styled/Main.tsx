import styled from "styled-components";


export const Container = styled.div`
    padding-left: 135px;
    padding-top: 60px;
    font-family: "Poppins";
    display: flex;
    margin: 0;
    max-width: 200vh;
    overflow-x: hidden;
`

export const Container2 = styled.div`
    overflow: hidden;
    
`



export const Header = styled.h1`
    font-size: 85px;
    font-weight: 700;
    color: hsl(255, 11%, 22%);
    margin-top: 4rem;
    line-height: 6rem;
    margin-bottom: 1rem;
    overflow: hidden;
`

export const Desc = styled.p`
    font-size: 20px;
    margin-top: 1rem;
    font-weight: 500;
    color: hsl(257, 7%, 63%);
    overflow: hidden;

`

export const Button = styled.button`
    background-color: hsl(180, 66%, 49%);
    border-radius: 60px;
    font-family: "Poppins";
    border: transparent;
    padding: 14px 30px;
    width: 12rem;
    overflow: hidden;
    cursor: pointer;
    font-size: 17px;
    color: white;
    font-weight: bold;
    display: inline-block;
    margin-top: 1rem;
    &:hover{
        background-color: hsl(180, 66%, 49%,0.6);
        transition: background-color 0.3s linear;
    }
`

export const ImageContainer = styled.div`
    
    width: 53rem;
    transform: translateX(35%);
`
export const ImageContainer2 = styled.div`
    overflow: hidden;
    overflow: hidden;
    width: 100%;
    
`