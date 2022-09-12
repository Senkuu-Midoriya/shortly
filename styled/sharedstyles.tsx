import { createGlobalStyle } from 'styled-components'
export const Body = createGlobalStyle`
    *{
        overflow-y: visible;
        padding: 0;
        margin:0;        
        scroll-behavior: smooth;
    }
    body{
        overflow-x: hidden;
    }
`