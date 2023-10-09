import { SVGProps } from 'react'

type PlayerIconProps = SVGProps<SVGSVGElement>

export function PlayerIcon(props: PlayerIconProps) {
  return (
    <svg
      width={57}
      height={57}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.52 40.92l19.543-12.562L21.52 15.796V40.92zm6.98 15.355c-3.862 0-7.49-.733-10.887-2.2-3.397-1.467-6.351-3.455-8.864-5.966-2.513-2.512-4.501-5.467-5.966-8.863C1.32 35.849.585 32.22.583 28.358c0-3.862.734-7.49 2.2-10.887C4.25 14.074 6.238 11.12 8.75 8.607c2.512-2.512 5.467-4.501 8.864-5.966C21.009 1.177 24.638.443 28.5.441c3.862 0 7.491.734 10.888 2.2 3.396 1.467 6.35 3.455 8.863 5.966 2.513 2.513 4.502 5.467 5.969 8.864 1.466 3.396 2.199 7.025 2.197 10.887 0 3.862-.734 7.491-2.2 10.888-1.467 3.396-3.455 6.35-5.966 8.863-2.512 2.513-5.467 4.502-8.863 5.969-3.397 1.466-7.026 2.199-10.888 2.197zm0-5.584c6.235 0 11.516-2.163 15.843-6.49s6.49-9.608 6.49-15.843c0-6.235-2.163-11.516-6.49-15.843s-9.608-6.49-15.843-6.49c-6.235 0-11.516 2.163-15.843 6.49s-6.49 9.608-6.49 15.843c0 6.235 2.163 11.516 6.49 15.843s9.608 6.49 15.843 6.49z"
        fill="#F8F8F8"
      />
    </svg>
  )
}