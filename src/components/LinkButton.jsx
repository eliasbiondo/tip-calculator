import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
    width: 100%;
    height: 7rem;
    margin: 2rem 0rem;
    padding: 0rem 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
    line-height: 3rem;
    color: ${props => props.color || '#000'};
    text-transform: ${props => props.textTransform || 'none'};
    background: ${props => props.orientation == 'next' ? "url('/images/next-arrow.svg')" : "url('/images/back-arrow.svg')"}  no-repeat #FFBE2E ${props => props.orientation == 'next' ? "90%" : "10%"} center; 
    border-radius: 3.5rem;

    &:hover {
        background: ${props => props.orientation == 'next' ? "url('/images/next-arrow.svg') no-repeat #e9ad2b 90% center" : "url('/images/back-arrow.svg') no-repeat #e9ad2b 10% center"}; 
    }
`