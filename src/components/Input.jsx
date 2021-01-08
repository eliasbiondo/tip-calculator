import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
    width: ${props => props.width || '100%'};
    height: clamp(3.5rem, 5vw, 7rem);
    margin-bottom: clamp(1rem, 2vw, 2rem);
    padding: clamp(1rem, 5vw, 2rem) clamp(2rem, 5vw, 3.6rem);
    font-size: clamp(1.6rem, 2vw, 2.4rem);
    line-height: auto;
    color: black;
    border: clamp(0.2rem, 5vw, 0.3rem) solid var(--primary);
    border-radius: ${props => props.borderRadius || '3.5rem'};
    border-right: ${props => props.borderRight ? 'none' : 'auto'};

    &::placeholder  {
        color: black;
    }
`