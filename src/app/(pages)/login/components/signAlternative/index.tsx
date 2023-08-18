'use client'
import Styles from 'styled-components'
import Image from 'next/image'
import theme from '../../../../../themes'

const Line = Styles.div`
    margin-top: 50px;
    flex-grow: 1;
    height: 1px;
    width: 350px;
    background-color: #ffffff;
`;


const SignButton = Styles.button`
    background: ${(props) => props.color || 'blue'};
    width: 60px;
    height: 45px;
    padding-top: 5px;
    margin-top: 62px;
    margin:35px 10px;
	border: none;
    border-radius: 8px;
`

const OrText = Styles.span`
    position: absolute;
    padding: 0px 15px;
    font-size: 20px;
    color: #fff;
    pointer-events: none;
    background: ${theme.BACKGROUND};
    top: 30px;
    left: 42%;
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
    const iconSize: any = 26
    return (
        <>
            <OrLine>
                <Line>
                    <OrText style={{ backgroundColor: theme.BACKGROUND }}>Ou</OrText>
                </Line>
            </OrLine>
            <Conteiner>
                <SignButton color="#3B5998" >
                    <Image src="/icons/facebook.svg" alt="me" width={iconSize} height={iconSize} />
                </SignButton>
                <SignButton color="#E52C34" >
                    <Image src="/icons/google.svg" alt="me" width={iconSize} height={iconSize} />
                </SignButton>
                <SignButton color="#F8F8F8" >
                    <Image src="/icons/apple.svg" alt="me" width={iconSize} height={iconSize} />
                </SignButton>
                <SignButton color="#4E4C83" >
                    <Image src="/icons/github.svg" alt="me" width={iconSize} height={iconSize} />
                </SignButton>
            </Conteiner>
        </>
    )
}