import { Checkbox } from '@/components/checkbox'
import { useFormContext } from 'react-hook-form'
import { SignUpFormSchema } from './sign-up-form'

export function PasswordRoles() {
  const { watch } = useFormContext<SignUpFormSchema>()

  const passwordField = watch('password')

  const hasAtLeastEightCharacters = passwordField.length >= 8
  const hasOneUpperCaseLetter = /[A-Z]/.test(passwordField)
  const hasOneNumber = /[0-9]/.test(passwordField)

  return (
    <div className="space-y-3 duration-300 animate-in slide-in-from-top-3">
      <div
        data-is-valid={hasAtLeastEightCharacters}
        className="group flex gap-2 text-alert transition-colors data-[is-valid=true]:text-success"
      >
        <Checkbox
          className="cursor-default bg-alert group-data-[is-valid=true]:bg-success"
          id="terms"
          checked={true}
        />

        <label htmlFor="terms">Pelo menos 8 caracteres</label>
      </div>

      <div
        data-is-valid={hasOneUpperCaseLetter}
        className="group flex gap-2 text-alert transition-colors data-[is-valid=true]:text-success"
      >
        <Checkbox
          className="cursor-default bg-alert group-data-[is-valid=true]:bg-success"
          checked={true}
          id="terms"
        />

        <label htmlFor="terms">Pelo menos 1 caractere maiúsculo</label>
      </div>

      <div
        data-is-valid={hasOneNumber}
        className="group flex gap-2 text-alert transition-colors data-[is-valid=true]:text-success"
      >
        <Checkbox
          className="cursor-default bg-alert group-data-[is-valid=true]:bg-success"
          checked={true}
          id="terms"
        />

        <label htmlFor="terms">Pelo menos 1 número</label>
      </div>
    </div>
  )
}
