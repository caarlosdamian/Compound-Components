import styled from "styled-components";
export const Container = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
margin: 1rem;
max-width:250px;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

export const Image = styled.img`
width:100%
`

export const Body = styled.div`
min-height:1px;
padding:1.25rem;
text-align:center;
`
export const Title = styled.h1`
    font-size:1.5rem;
    font-family:cursive;
    font-weight:bold;
    margin:0;
`
export const Text = styled.p`
    color:gray;
`