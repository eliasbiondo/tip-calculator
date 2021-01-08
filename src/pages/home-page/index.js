import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { Content } from '../../components/Content';
import { Logo } from '../../components/Logo';
import { Paragraph } from '../../components/Paragraph';
import { LinkButton } from '../../components/LinkButton';
import { NavigationButtons } from '../../components/NavigationButtons';
import { NavigationButton } from "../../components/NavigationButton";

const InvoiceBg = styled.div `
    width: 100%;
    height: clamp(23.6rem, 20vh, 44rem);
    background: url("images/invoice-bg.svg") no-repeat center center;
    background-size: contain;
`

export function Home(){
    return (
        <Container>
            <Content>
                <Logo/>
                <InvoiceBg/>
                <Paragraph>Calculate your purchase total with tip and tax included</Paragraph>
                <LinkButton to="/calculator" color="white" textTransform="uppercase" orientation="next">Next</LinkButton>
                <NavigationButtons>
                    <NavigationButton to="/" active/>
                    <NavigationButton to="/calculator" />
                </NavigationButtons>
            </Content>
        </Container>
    )
}