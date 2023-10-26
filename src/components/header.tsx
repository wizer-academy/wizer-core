import * as React from 'react'
import { Logo } from '@/assets/logo'
import { UserIcon } from '@/assets/user-icon'
import { SearchIcon } from '@/assets/search-icon'
import { ThemeIcon } from '@/assets/theme-icon'
import { NotificationIcon } from '@/assets/notification-icon'
import { ArrowIcon } from '@/assets/arrow-icon'

const loggedIn = true

export function Header() {
  if (loggedIn) {
    return (
      <div className="flex items-center justify-between px-32 py-2">
        <Logo />
        <div className="relative ml-4 w-80 rounded-2xl border border-gray-400  bg-transparent px-8 py-2 text-xs text-white">
          <input
            type="text"
            placeholder="O que você quer aprender?"
            className="w-60 bg-transparent"
          />
          <div className="absolute left-2 top-2">
            <SearchIcon />
          </div>
        </div>
        <div className="relative">
          <a href="#" className="mr-4">
            Cursos
          </a>
          <div className="absolute right-0 top-3">
            <ArrowIcon />
          </div>
        </div>
        <div className="flex w-20 justify-between">
          <ThemeIcon />
          <NotificationIcon />
        </div>
        <div className="flex w-40 items-center justify-between px-0">
          <UserIcon width={26} height={26} />
          <div className="relative">
            <a href="#" className="mr-4">
              Nome Usuário
            </a>
            <div className="absolute right-0 top-3">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-between px-40 py-2">
        <Logo />
        <a href="#" className="mr-4 uppercase">
          Categorias
        </a>
        <div className="relative ml-4 w-60 rounded-2xl border border-gray-400  bg-transparent px-8 py-2 text-xs text-white">
          <input
            type="text"
            placeholder="O que você quer aprender?"
            className="w-60 bg-transparent"
          />
          <div className="absolute left-2 top-2">
            <SearchIcon />
          </div>
        </div>
        <button className="flex w-40 items-center justify-between rounded-lg bg-[#9747FF] px-10 py-2 font-bold text-white hover:bg-[#0C66C6]">
          <UserIcon /> Entrar
        </button>
        <button className="border-white-400 w-40 rounded-lg border bg-transparent px-4 py-2 font-bold text-white hover:bg-[#0C66C6]">
          Cadastre-se
        </button>
      </div>
    )
  }
}
