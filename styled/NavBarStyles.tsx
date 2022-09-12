import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 35px 135px;
    font-family: "Poppins";
`

export const List = styled.nav`
    list-style: none;
    display: inline-block;
`
export const Item = styled.li`
    display: inline-block;
    justify-content: flex-end;
    align-items: flex-start;

`
export const Links = styled.a`
    color: hsl(257, 7%, 63%) ;
    text-decoration: none;
    margin-left: 2rem;
    align-items: flex-end;
    font-weight: 700;
    font-size: 15px;
    position: relative;
    margin-bottom: 1rem;
    &:hover{
        color: hsl(255, 11%, 22%);
        transition: color 0.3s linear;
    }
    &::after{
        background-color:hsl(180, 66%, 49%) ;
        content:'';
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        margin-top: 1.54rem;
        transform-origin: left;
        transform: scale(0);
        transition: transform 0.3s linear;
    }
    &:hover::after{
        transform: scale(1);
        transform-origin: right;
    }
`
export const Container2 = styled.div`
    color: red;
    display: inline-block;
    margin-left: auto;
    
`

export const Button1 = styled.button`
    background-color: hsl(180, 66%, 49%);
    border-radius: 30px;
    font-family: "Poppins";
    border: transparent;
    padding: 10px 25px;
    cursor: pointer;
    color: white;
    font-weight: 700;
    display: inline-block;
    &:hover{
        background-color: hsl(180, 66%, 49%,0.6);
        transition: background-color 0.3s linear;
    }
`
export const Button2 = styled.button`
    background-color: transparent;
    font-family: "Poppins";
    border-radius: 20px;
    border: transparent;
    padding: 12px 25px;
    cursor: pointer;
    color: hsl(0, 0%, 75%);
    font-weight: 700;
    display: inline-block;
    margin-right: 10px;
`