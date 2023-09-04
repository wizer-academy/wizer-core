import { Metadata } from 'next'
import { SignInForm } from './components/sign-in-form'
import { Button } from '@/components/button'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function SignIn() {
  return (
    <div className="flex flex-col gap-[18px]">
      <SignInForm id="sign-in" />

      <a href="#" className="ml-auto text-xs">
        Esqueceu sua senha?
      </a>

      <Button form="sign-in" type="submit">
        Entrar
      </Button>
    </div>
  )
}
