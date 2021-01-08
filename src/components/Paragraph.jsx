import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3.0rem;
    color: ${props => props.color || '#000'};
    text-align: ${props => props.textAlign || 'center'}
`