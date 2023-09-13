import { Metadata } from 'next'

import SignUpForm from './components/sign-up-form'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function SignUp() {
<<<<<<< HEAD
<<<<<<< HEAD
  return <SignUpForm />
=======
  return (
    <form className="mt-9 space-y-[18px]">
      <div className="space-y-[35px]">
        <InputRoot>
          <InputLabel htmlFor="full-name">Nome completo</InputLabel>
          <InputControl id="full-name" placeholder="Digite aqui seu nome" />
        </InputRoot>

        <InputRoot>
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <InputControl
            id="email"
            type="email"
            placeholder="Digite aqui seu e-mail"
          />
        </InputRoot>

        <InputRoot>
          <InputLabel htmlFor="password">Senha</InputLabel>
          <InputControl
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
          />
          <InputPasswordViewControl />
        </InputRoot>

        <InputRoot>
          <InputLabel htmlFor="confirm-password">Confirme sua senha</InputLabel>
          <InputControl
            id="confirm-password"
            type="password"
            placeholder="Confirme sua senha"
          />
          <InputPasswordViewControl />
        </InputRoot>
      </div>

      <Checkbox />

      <Button className="w-full">Criar</Button>
    </form>
  )
>>>>>>> 6e0a526 (feat: finish sign in validation form)
=======
  return <SignUpForm />
>>>>>>> d7534b5 (feat: add sign up form)
}
