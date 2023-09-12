import { AppleIcon } from '@/assets/apple-icon'
import { FacebookIcon } from '@/assets/facebook-icon'
import { GithubIcon } from '@/assets/github-icon'
import { GoogleIcon } from '@/assets/google-icon'
import { Logo } from '@/assets/logo'
import { Button } from '@/components/button'
import { NavLink } from '@/components/nav-link'
import { SwitchHeader } from './switch-header'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grid min-h-screen w-full grid-cols-2">
      <div className="flex justify-start bg-sign-in-hero-background bg-cover bg-no-repeat pl-[102px]">
        <h1 className="my-auto max-w-[206px] text-6xl">
          Você está a um passo do seu <strong>futuro.</strong>
        </h1>
      </div>

      <div className="relative flex w-full flex-col justify-center overflow-y-auto py-10">
        <div className="bg-background-blur absolute bottom-0 right-0 min-h-screen w-full bg-cover bg-no-repeat" />

        <div className="mx-auto flex w-full max-w-[453px] flex-col justify-center">
          <Logo className="mx-auto" />
          <div className="mt-9 space-y-9">
            <SwitchHeader />

            <nav className="grid grid-cols-2 border-b border-white">
              <NavLink href="/auth/sign-in">Já tenho conta</NavLink>
              <NavLink href="/auth/sign-up">Criar conta</NavLink>
            </nav>
          </div>
          <div>{children}</div>

          <footer className="mt-[18px] space-y-[18px]">
            <div className="flex items-center gap-7">
              <div className="h-px w-full bg-white" />
              <span className="text-xl font-medium">Ou</span>
              <div className="h-px w-full bg-white" />
            </div>

            <div className="flex w-full justify-center gap-7">
              <Button size="icon" className="bg-[#3B5998]">
                <FacebookIcon />
              </Button>
              <Button size="icon" className="bg-[#E52C34]">
                <GoogleIcon />
              </Button>
              <Button size="icon" className="bg-[#F8F8F8]">
                <AppleIcon />
              </Button>
              <Button size="icon" className="bg-[#4E4C83]">
                <GithubIcon />
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
