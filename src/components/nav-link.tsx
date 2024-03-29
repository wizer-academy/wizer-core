'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export type NavLinkProps = ComponentProps<typeof Link>

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === props.href

  return (
    <Link
      data-active={isActive}
      className={twMerge(
        'relative flex w-full items-center justify-center py-[13px] text-xs text-[#6A6D71] transition-colors hover:text-white data-[active=true]:text-base data-[active=true]:font-semibold data-[active=true]:text-white md:text-lg md:data-[active=true]:text-lg',
        props.className,
      )}
      {...props}
    >
      {props.children}
      {isActive && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary" />
      )}
    </Link>
  )
}
