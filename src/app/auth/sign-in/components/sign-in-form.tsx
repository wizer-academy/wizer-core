import {
  InputControl,
  InputLabel,
  InputPasswordViewControl,
  InputRoot,
} from '@/components/input'
import { InputHTMLAttributes } from 'react'

type SignInFormProps = InputHTMLAttributes<HTMLFormElement>

export function SignInForm(props: SignInFormProps) {
  return (
    <form className="mt-9 space-y-[37px]" {...props}>
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
    </form>
  )
}
