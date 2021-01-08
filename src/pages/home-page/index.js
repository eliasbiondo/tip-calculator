import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AppHome = styled.div`
    width: clamp(28rem, 30vw, 60rem);
    min-height: 100vh;
    background-color: black;

`



export function Home(){
    return (
        <Container>
            <AppHome />
        </Container>
    )
}