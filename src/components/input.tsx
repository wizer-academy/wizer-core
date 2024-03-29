'use client'

import { LuEye, LuEyeOff } from 'react-icons/lu'
import {
  LabelHTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
  useState,
  createContext,
  useCallback,
  useContext,
  HTMLAttributes,
} from 'react'
import { twMerge } from 'tailwind-merge'

type InputContextProps = {
  isShowPassword: boolean
  handleToggleShowPassword: () => void
  error: boolean
}

const InputContext = createContext({} as InputContextProps)

export interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean
}

function InputRoot({ error = false, ...props }: InputRootProps) {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleToggleShowPassword = useCallback(() => {
    setIsShowPassword((prevState) => !prevState)
  }, [])

  return (
    <InputContext.Provider
      value={{ isShowPassword, handleToggleShowPassword, error }}
    >
      <div
        data-error={error}
        className={twMerge(
          'relative flex h-[58px] rounded-[10px] border border-white px-[22px] py-[18px] transition-colors data-[error=true]:border-alert',
          props.className,
        )}
        {...props}
      />
    </InputContext.Provider>
  )
}

type InputControlProps = InputHTMLAttributes<HTMLInputElement>

const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ className, type, ...props }, ref) => {
    const { isShowPassword } = useContext(InputContext)

    return (
      <input
        type={isShowPassword ? 'text' : type}
        className={twMerge(
          'w-full bg-transparent text-sm text-white placeholder-[#6A6D71]/50 outline-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

InputControl.displayName = 'InputControl'

type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement>

function InputLabel(props: InputLabelProps) {
  const { error } = useContext(InputContext)

  return (
    <label
      data-error={error}
      className={twMerge(
        'absolute -top-4 left-2.5 bg-background px-[10px] font-medium transition-colors data-[error=true]:text-alert',
        props.className,
      )}
      {...props}
    />
  )
}

function InputPasswordViewControl() {
  const { isShowPassword, handleToggleShowPassword } = useContext(InputContext)

  return (
    <button
      onClick={handleToggleShowPassword}
      type="button"
      className="transition-all"
    >
      {isShowPassword ? <LuEye size={22} /> : <LuEyeOff size={22} />}
    </button>
  )
}

type InputMessageErrorProps = HTMLAttributes<HTMLSpanElement>

function InputMessageError(props: InputMessageErrorProps) {
  return <span className="text-xs text-alert" {...props} />
}

export {
  InputRoot,
  InputControl,
  InputLabel,
  InputPasswordViewControl,
  InputMessageError,
}
