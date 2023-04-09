'use client'
import Button from "./components/button/";
import Input from "./components/input/";
import SignAlternative from "./components/signAlternative/";
import theme from '../../../themes';
import Styles from 'styled-components'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const ConteinerForm = Styles.div`
  background: ${theme.BACKGROUND};
  margin: 0 auto;
  width: 50%;
  color: #fff;

  display: grid;
  place-items: center;
`
const ConteinerMessage = Styles.div`
  width: 50%;
  height: 100%;
  color: #fff;

  display: grid;
  place-items: center;
`
const BackImage = Styles.div`
  background-image: url(/images/Rectangle_com_imagem.jpg);
  opacity: 0.5;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  color: #fff;

  display: grid;
  place-items: center;
`
const Message = Styles.p`
  position: absolute;
  margin-left: -20vw;
  width: 16%;

  font-size: 40px;
  color: #fff;
`


const Conteiner = Styles.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${poppins.style.fontFamily};
  line-height: 40px;

  background: ${theme.BACKGROUND};
  margin: -8px -8px;
  padding: 0;
  height: 100vh;
  width: 100vw;
  color: #fff;
`

export default function Login() {
  return (
    <>
    <Conteiner>
    
    <ConteinerMessage>
      <BackImage/>
      <Message>Você está a um passo do seu <b>futuro</b></Message>
    </ConteinerMessage>

    <ConteinerForm>
      <Image src="/logo.svg" alt="me" width="128" height="64" />
      <h2>Entre na sua conta</h2>
      <div>
        <button></button>
        <button></button>
      </div>
      <Input placeholder="Digite aqui seu e-mail" type='email'>E-mail</Input>
      <Input placeholder="Digite aqui sua senha" type='password'>Senha</Input>
      <p style={{marginLeft: '35%'}}>Esqueceu sua senha?</p>
      <Button>Entrar</Button>
      <SignAlternative/>
    </ConteinerForm>

    </Conteiner>

    </>
  )
}
