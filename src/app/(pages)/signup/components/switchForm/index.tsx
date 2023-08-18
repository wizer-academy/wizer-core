'use client'
import Styles from 'styled-components'
import Link from "next/link";
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
const Conteiner = Styles.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Button({ isLogin }: any) {
    return (
        <>
            <Conteiner>
                <Link href="/login">
                    <SwtichBtt color={(!isLogin) ? '#0C66C6' : '#ffffff80'}>Já tenho conta</SwtichBtt>
                </Link>
                <Link href="/signup">
                    <SwtichBtt color={(isLogin) ? '#0C66C6' : '#ffffff80'}>Criar conta</SwtichBtt>
                </Link>
            </Conteiner>
        </>
    )
}