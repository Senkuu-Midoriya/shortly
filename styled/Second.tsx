import styled from "styled-components";

export const Container = styled.main`
    margin-top: 18rem;
    /* #eff1f7 */
    /* try putting in other styled container instead and see if works */
    background-color:#eff1f7;
    font-family: "Poppins";
    display: flex;
    flex-direction:column;
    align-items: center;
    overflow: visible;
    width: 100%;
    height: 50%;
    z-index: 0;
    position: relative;
    
    
    
`
export const Section = styled.section`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    position: absolute;
    overflow: visible;
    
    
`

export const Header = styled.h1`
    color: hsl(260, 8%, 14%);
    font-size: 40px;
    margin-top: 16rem;
`
export const Desc = styled.p`
    color: hsl(257, 7%, 63%);
    font-size: 20px;
    text-align: center;
    margin-top: 1rem;
`

export const Card = styled.div`
    position: relative;
    background-color:white;
    height: 21rem;
    width: 23rem;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 4rem;
    order: 1;
    z-index: 1;
    top: 40px;
    overflow: visible;
    flex-direction: column;
    padding-left: 3rem;
    
`
export const Card1 = styled.div`
    position: relative; 
    background-color:white;
    flex-direction: column;
    padding-left: 3rem; 
    height: 21rem;
    width: 23rem;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 3rem;
    order: 1;
    z-index: 1; 
    top: 80px;
    overflow: visible;
    

`
export const Card2 = styled.div`
    position: relative; 
    background-color:white;
    height: 21rem;
    width: 23rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 3rem;
    order: 1;
    z-index: 1;
    top: 120px;
    overflow: visible;
    padding-left: 3rem;
    

`

export const CardsContainer = styled.div`
    display: flex;
    position: relative;
    overflow: visible;
`
export const Main = styled.section`
    z-index: 1;
    width: 90rem;
    height: 12rem;
    position: absolute;
    overflow-y: hidden;
    background-color:hsl(257, 27%, 26%);
    margin-top: -70px;
    border-radius: 10px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    

`

export const InputContainer = styled.div`
    display: flex;
    z-index: 1;
    padding-left:5rem ;
    order: 1;
    
`
export const Input = styled.input`
    width: 65rem;
    height: 4.4rem;
    border-radius: 7px;
    border: transparent;
    outline: none;
    font-family: "Poppins";
    font-size: 21px;
    font-family: "Poppins";
    color: hsl(260, 8%, 14%);
    padding-left: 2rem;
    &::placeholder{
        font-size: 21px;
        font-family: "Poppins";
        color: #e1e3e9;
        
    }
`

export const Button = styled.button`
    background-color:hsl(180, 66%, 49%);
    font-family: "Poppins";
    color:white;
    border-radius: 10px;
    z-index: 1;
    width: 12rem;
    height: 4.4rem;
    border: transparent;
    margin-left: 1rem;
    font-size: 18px;
    cursor: pointer;
    margin-right: -100rem;
    &:hover{
        background-color: hsl(180, 100%, 43%);
        transition: background-color 0.3s ease-in-out;
    }
`
// export const Section = styled.section`
//     display: flex;
//     flex-direction:column;
//     align-items: center;
//     justify-content: center;
//     margin-top: 20rem;
    
// `
// export const Section = styled.section`
//     display: flex;
//     flex-direction:column;
//     align-items: center;
//     justify-content: center;
//     margin-top: 20rem;
    
// `
export const ImageContainer = styled.div`
    position: absolute;
    z-index:0;
    overflow: hidden;
    
`
export const ImageContainer2 = styled.div`
    background-color:hsl(257, 27%, 26%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height:6rem;
    border-radius: 50%;
    margin-top: -45px;
    overflow: visible;
`
export const Line = styled.span`
    content: '';
    height: 8px;
    width: 70%;
    top: 70%;
    z-index: 0;
    background-color: hsl(180, 66%, 49%);
    position: absolute;
    margin-left:8rem ;
`

export const Header2 = styled.div`
    font-size:25px;
    font-weight:700;
    color: hsl(257, 27%, 26%);
    padding-top: 1rem;
    text-transform: capitalize;
`
export const Desc2 = styled.div`
    font-size:18px;
    color: hsl(257, 7%, 63%);
`