'use client'
import Styles from 'styled-components'
import theme from '../../../../../themes'

const SwtichBtt = Styles.button`
box-sizing: border-box;
    margin: 0 auto;
    background: ${theme.BACKGROUND};
    border: none;
    width: 175px;
    height: 40px;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    border-bottom: 1px solid ${(props) => props.color || 'rgba(255, 255, 255, 0.5)'};
`
const Conteiner = Styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Button(props: any) {
    const currentUrl: string = window.location.href
    const isLoginForm: boolean = currentUrl.includes('login')
    const colorLoginBtt: string = (isLoginForm) ? '#0C66C6' : 'rgba(255, 255, 255, 0.5)'
    const colorSignInBtt: string = (!isLoginForm) ? '#0C66C6' : 'rgba(255, 255, 255, 0.5)'
    console.log(isLoginForm)
    console.log(!isLoginForm)
    return (
        <>
            <Conteiner>
                <SwtichBtt color={colorLoginBtt}>Já tenho conta</SwtichBtt>
                <SwtichBtt color={colorSignInBtt}>Criar conta</SwtichBtt>
            </Conteiner>
        </>
    )
}