import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: clamp(1.6rem, 2vw, 2.4rem);
    font-weight: 400;
    line-height: 3.0rem;
    color: ${props => props.color || '#000'};
    text-align: ${props => props.textAlign || 'center'};
    margin-bottom: ${props => props.marginBottom || 'none'}
`