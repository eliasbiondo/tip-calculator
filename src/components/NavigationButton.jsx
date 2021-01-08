import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavigationButton = styled(Link)`
    width: clamp(1.5rem, 2vw, 2rem);
    height: clamp(1.5rem, 2vw, 2rem);
    margin-right: clamp(0.5rem, 0.5vw, 1rem);
    background-color: ${props => props.active ? '#000' : 'transparent'};
    border: 2px solid #000;
    border-radius: clamp(0.75rem, 1vw, 1rem);

`