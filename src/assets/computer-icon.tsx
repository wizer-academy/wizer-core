import { SVGProps } from 'react'

type ComputerIconProps = SVGProps<SVGSVGElement>

export function ComputerIcon(props: ComputerIconProps) {
  return (
    <svg
      width={27}
      height={26}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_667_4245)"
        stroke="#F8F8F8"
        strokeWidth={4}
        strokeLinejoin="round"
      >
        <path
          d="M26.125 10.688H13.062A3.563 3.563 0 009.5 14.25v24.938h38V26.124"
          strokeLinecap="round"
        />
        <path d="M4.75 39.188h47.5v2.374a7.125 7.125 0 01-7.125 7.126h-33.25a7.125 7.125 0 01-7.125-7.126v-2.374z" />
        <path
          d="M39.188 8.313l-4.75 4.75 4.75 4.75m7.124-9.5l4.75 4.75-4.75 4.75"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_667_4245">
          <path fill="#fff" d="M0 0H57V57H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
