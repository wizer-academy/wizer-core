'use client'
import Styles from 'styled-components'
import Image from 'next/image'
import theme from '../../../../../themes'

const OrDiv = Styles.div`
    border-bottom: 1px solid rgba(255,255,255,1);
    width: 350px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Line = Styles.div`
    margin-top: 60px;
    flex-grow: 1;
    height: 1px;
    width: 350px;
    background-color: #ffffff;
`;


const SignButton = Styles.button`
    background: ${(props) => props.color || 'blue'};
    width: 50px;
    height: 40px;
    margin-top: 62px;
    margin: 40px 10px;
    border-radius: 8px;
`
/*
    margin-top: -1vh;
    margin-left: 10%; 
    position: relative;*/
const OrText = Styles.span`
    position: absolute;
    padding: 0px 15px;
    font-size: 20px;
    color: #fff;
    pointer-events: none;
    background: ${theme.BACKGROUND};
    top: 40px;
    left: 45%;
    transition: top 0.3s ease;
`
const Conteiner = Styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const OrLine = Styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export default function SignAlternative() {
    return (
        <>
            <OrLine>
                <Line>
                    <OrText style={{ backgroundColor: theme.BACKGROUND }}>Ou</OrText>
                </Line>
            </OrLine>
            <Conteiner>
                <SignButton color="#3B5998" >
                    <Image src="/icons/facebook.svg" alt="me" width="24" height="24" />
                </SignButton>
                <SignButton color="#E52C34" >
                    <Image src="/icons/google.svg" alt="me" width="24" height="24" />
                </SignButton>
                <SignButton color="#F8F8F8" >
                    <Image src="/icons/apple.svg" alt="me" width="24" height="24" />
                </SignButton>
                <SignButton color="#4E4C83" >
                    <Image src="/icons/github.svg" alt="me" width="24" height="24" />
                </SignButton>
            </Conteiner>
        </>
    )
}