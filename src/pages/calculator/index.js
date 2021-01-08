import React, {useState} from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container';
import { Content } from '../../components/Content';
import { Logo } from '../../components/Logo';
import { Paragraph } from '../../components/Paragraph';
import { LinkButton } from '../../components/LinkButton';
import { NavigationButtons } from '../../components/NavigationButtons';
import { NavigationButton } from "../../components/NavigationButton";
import { Input } from "../../components/Input";


const Calcs = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Calc = styled.div`
    max-width: 48%;
    height: auto;

    & h1 {
        font-size: clamp(1.6rem, 2vw, 2.4rem);
        font-weight: bold;
        text-align: ${props => props.textAlign || 'left'}
    }

    & p {
        font-size: clamp(1.4rem, 2vw, 2rem);
        text-align: ${props => props.textAlign || 'left'}
    }
`

export function Calculator(){

    const [billValue, setBillValue] = useState();
    const [tipValue, setTipValue] = useState();
    const [taxValue, setTaxValue] = useState();
    const [numberOfPeople, setNumberOfPeople] = useState();

    const bill = parseFloat(billValue)
    const tip = parseFloat(billValue*(tipValue/100));
    const tipPerPerson = parseFloat(tip / numberOfPeople);
    const tax = parseFloat(billValue*(taxValue/100));
    
    const total = parseFloat(`${bill + tip + (tax || 0)}`)
    const totalPerPerson = parseFloat(total / numberOfPeople);

    return (
        <Container>
            <Content>
                <Logo/>
                <Paragraph marginBottom="2rem">Save your time with our calculator</Paragraph>

                <Input type="number" placeholder="Bill" value={billValue} onChange={(e) => { setBillValue(e.target.value)}}/>
                <div>
                <Input width="50%" borderRadius="3.5rem 0 0rem 3.5rem"  borderRight="0" type="number" placeholder="Tip (%)" value={tipValue} onChange={(e) => { setTipValue(e.target.value)}}/>
                <Input width="50%" borderRadius="0rem 3.5rem 3.5rem 0rem" type="number" placeholder="Tax (%)" value={taxValue} onChange={(e) => { setTaxValue(e.target.value)}}/>
                </div>
                <Input type="number" placeholder="Number of people" value={numberOfPeople} onChange={(e) => { setNumberOfPeople(e.target.value)}}/>

                {billValue && tipValue && numberOfPeople &&
                    <Calcs>
                        <Calc textAlign="left">
                            <h1>Tip: ${tip.toFixed(2)}</h1>
                            {numberOfPeople > 1 &&
                                <p>Tip per person: <br/> ${tipPerPerson.toFixed(2)}</p>
                            }
                        </Calc>
                        <Calc textAlign="right">
                            <h1>Total: ${total}</h1>

                            {numberOfPeople > 1 && 
                                <p>Total per person: <br/> ${totalPerPerson.toFixed(2)}</p>
                            }

                        </Calc>
                    </Calcs>
                }
                
                
                <LinkButton to="/" color="white" textTransform="uppercase" orientation="back">Back</LinkButton>

                <NavigationButtons>
                    <NavigationButton to="/"/>
                    <NavigationButton to="/calculator" active/>
                </NavigationButtons>
            </Content>
        </Container>
    )
}