'use client'

import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/button'
import {
  InputControl,
  InputLabel,
  InputMessageError,
  InputPasswordViewControl,
  InputRoot,
} from '@/components/input'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type SignInFormSchema = z.infer<typeof signInFormSchema>

export function SignInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  })

  const { mutateAsync: signIn, isLoading: signInIsLoading } = useMutation(
    async ({ email, password }: SignInFormSchema) => {
      return axios.post('http://localhost:4000/auth/login', { email, password })
    },
  )

  async function handleSignIn(data: SignInFormSchema) {
    try {
      await signIn(data)
    } catch (error) {
      console.log(error)
    }
  }

  const hasFiledErrors = !!Object.values(errors).length

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="mt-9 ">
      <div className="space-y-[37px]">
        <div className="space-y-2">
          <InputRoot error={!!errors.email}>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <InputControl
              id="email"
              type="email"
              placeholder="Digite aqui seu e-mail"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <InputMessageError>*E-mail não cadastrado</InputMessageError>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot error={!!errors.email}>
            <InputLabel htmlFor="password">Senha</InputLabel>
            <InputControl
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register('password')}
            />
            <InputPasswordViewControl />
          </InputRoot>

          {errors.email && (
            <InputMessageError>*Senha incorreta</InputMessageError>
          )}
        </div>
      </div>

      <div className="mt-[18px] flex flex-col gap-[18px]">
        <a href="#" className="ml-auto text-xs">
          Esqueceu sua senha?
        </a>

        <Button disabled={signInIsLoading || hasFiledErrors}>Entrar</Button>
      </div>
    </form>
  )
}
