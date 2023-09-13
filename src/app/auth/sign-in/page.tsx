import { Metadata } from 'next'
import { SignInForm } from './components/sign-in-form'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function SignIn() {
  return <SignInForm />
}
