import React, {useState} from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { Content } from '../../components/Content';
import { Logo } from '../../components/Logo';
import { Paragraph } from '../../components/Paragraph';
import { LinkButton } from '../../components/LinkButton';
import { NavigationButtons } from '../../components/NavigationButtons';
import { NavigationButton } from "../../components/NavigationButton";




export function Calculator(){
    const [billValue, setBillValue] = useState(0);
    return (
        <Container>
            <Content>
                <Logo/>
                <Paragraph>Save your time with our calculator =)</Paragraph>

                <LinkButton to="/" color="white" textTransform="uppercase" orientation="back">Back</LinkButton>

                <NavigationButtons>
                    <NavigationButton to="/"/>
                    <NavigationButton to="/calculator" active/>
                </NavigationButtons>
            </Content>
        </Container>
    )
}