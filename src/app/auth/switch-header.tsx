'use client'

import { usePathname } from 'next/navigation'

export function SwitchHeader() {
  const pathname = usePathname()

  const isSignIn = pathname === '/auth/sign-in'

  return (
    <h2 className="text-center text-xl font-semibold lg:text-3xl">
      {isSignIn ? '  Entre na sua conta' : 'Criar sua conta Wizer'}
    </h2>
  )
}
