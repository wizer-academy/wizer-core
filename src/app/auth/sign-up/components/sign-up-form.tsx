'use client'

import { z } from 'zod'
import { FormProvider, useController, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import {
  InputControl,
  InputLabel,
  InputMessageError,
  InputPasswordViewControl,
  InputRoot,
} from '@/components/input'
import { Checkbox } from '@/components/checkbox'
import { Button } from '@/components/button'
import { PasswordRoles } from './password-roles'

const signUpFormSchema = z
  .object({
    fullName: z
      .string({ required_error: '*Campo nome completo é obrigatório' })
      .min(1, { message: '*Campo nome completo é obrigatório' }),
    email: z
      .string({ required_error: '*Campo e-mail é obrigatório' })
      .email({ message: '*Campo e-mail é obrigatório' }),
    password: z
      .string({ required_error: '*Campo senha é obrigatório' })
      .min(8, { message: '*Campo senha é obrigatório' })
      .refine((value) => /[A-Z]/.test(value))
      .refine((value) => /[0-9]/.test(value)),
    confirmPassword: z
      .string({ required_error: '*Campo confirme sua senha é obrigatório' })
      .min(8, { message: '*Campo confirme sua senha é obrigatório' }),
    terms: z
      .boolean()
      .default(false)
      .refine((value) => value === true, {
        message: 'Confirme os termos e condições',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>

export default function SignUpForm() {
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  })

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = form

  const { mutateAsync: signUp, isLoading: signUpIsLoading } = useMutation(
    async ({ email, password }: SignUpFormSchema) => {
      return axios.post('http://localhost:4000/auth/login', { email, password })
    },
  )

  async function handleSignUp(data: SignUpFormSchema) {
    try {
      await signUp(data)
    } catch (error) {
      console.log(error)
    }
  }

  const hasFiledErrors = !!Object.values(errors).length

  const {
    field: passwordField,
    fieldState: { isDirty },
  } = useController({ name: 'password', control })

  const {
    field: { onChange, value },
  } = useController({ name: 'terms', control })

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="mt-9 space-y-[18px]"
      >
        <div className="space-y-[35px]">
          <div className="space-y-2">
            <InputRoot error={!!errors.fullName}>
              <InputLabel htmlFor="full-name">Nome completo</InputLabel>
              <InputControl
                id="full-name"
                placeholder="Digite aqui seu nome"
                {...register('fullName')}
              />
            </InputRoot>

            {errors.fullName && (
              <InputMessageError>{errors.fullName.message}</InputMessageError>
            )}
          </div>

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
              <InputMessageError>{errors.email.message}</InputMessageError>
            )}
          </div>

          <div className="space-y-2">
            <InputRoot error={!!errors.password}>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <InputControl
                id="password"
                type="password"
                placeholder="Digite aqui sua senha"
                {...passwordField}
              />
              <InputPasswordViewControl />
            </InputRoot>

            {errors.password?.type === 'too_small' && (
              <InputMessageError>{errors.password.message}</InputMessageError>
            )}
          </div>

          <div className="space-y-2">
            <InputRoot error={!!errors.confirmPassword}>
              <InputLabel htmlFor="confirm-password">
                Confirme sua senha
              </InputLabel>
              <InputControl
                id="confirm-password"
                type="password"
                placeholder="Confirme sua senha"
                {...register('confirmPassword')}
              />
              <InputPasswordViewControl />
            </InputRoot>

            {errors.confirmPassword && (
              <InputMessageError>
                {errors.confirmPassword.message}
              </InputMessageError>
            )}
          </div>
        </div>

        {isDirty && <PasswordRoles />}

        <div className="space-y-2">
          <div className="flex gap-2">
            <Checkbox id="terms" checked={value} onCheckedChange={onChange} />

<<<<<<< HEAD
            <label htmlFor="terms" className="text-sm lg:text-base">
=======
            <label htmlFor="terms">
>>>>>>> d7534b5 (feat: add sign up form)
              Eu concordo com os <a href="#">termos e condições</a>
            </label>
          </div>

          {errors.terms && (
            <InputMessageError>{errors.terms.message}</InputMessageError>
          )}
        </div>

        <Button disabled={hasFiledErrors} className="w-full">
          Criar
        </Button>
      </form>
    </FormProvider>
  )
}
