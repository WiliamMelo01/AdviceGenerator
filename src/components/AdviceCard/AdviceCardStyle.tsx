import styled from 'styled-components';

export const Container = styled.div`
    width:40%;
    min-height:25rem;
    background:hsl(217, 19%, 24%);  
    border-radius:1.5625rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;

    @media (max-width:740px){
        width:90%;
    }
`;
export const Title = styled.h1`
    width:100%;
    text-align:center;
    color:hsl(150, 100%, 66%);
    text-transform: uppercase;
    font-size:.9em;
    letter-spacing:0.3125rem;
    margin: 2.5rem 0;
    
`;
export const Advice = styled.p`
    max-width:90%;
    color:hsl(193, 38%, 86%);
    font-size:2em;
    text-align:center;
`;
export const dividerImage = styled.img`
    margin:3.125rem 0;
    width:90%;
`;
export const AdviceGeneratorButton = styled.button`
    width:4.375rem;
    height:4.375rem;
    border:none;
    border-radius:50%;
    display:grid;
    place-items:center;
    background-color:hsl(150, 100%, 66%);
    cursor:pointer;
    position:absolute;
    bottom:-2.1875rem;
    transition: all .3s ease;

    &:hover{
        box-shadow: 0 0 1.25rem hsl(150, 100%, 60%);
    }
  

`;
export const AdviceGeneratorImage = styled.img`

`;