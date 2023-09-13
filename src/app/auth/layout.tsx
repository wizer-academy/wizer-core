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
    <main className="flex min-h-screen w-full md:grid md:grid-cols-2">
      <div className="hidden justify-start bg-sign-in-hero-background bg-cover bg-no-repeat pl-[102px] md:flex">
        <h1 className="my-auto max-w-[206px] text-6xl">
          Você está a um passo do seu <strong>futuro.</strong>
        </h1>
      </div>

      <div className="relative flex w-full flex-col justify-center overflow-hidden md:py-10">
        <div className="absolute -right-1/4 -top-1/3 -z-20 h-3/4 w-3/4 bg-background-blur bg-cover bg-no-repeat md:-right-1/3 md:top-[65%] " />

        <div className="mx-auto flex w-full max-w-[387px] flex-col px-8 md:max-w-[453px]">
          <Logo className="mx-auto h-[33px] w-[106px] md:h-[55px] md:w-[177px]" />
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
