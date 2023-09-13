import { SVGProps } from 'react'

type FacebookIconProps = SVGProps<SVGSVGElement>

export function FacebookIcon(props: FacebookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="25"
      fill="none"
      viewBox="0 0 12 25"
      {...props}
    >
      <path
        fill="#F8F8F8"
        d="M10.97 12.373H7.58v12.42H2.443v-12.42H0V8.008h2.443V5.183c0-2.02.96-5.183 5.182-5.183l3.805.016v4.237H8.67c-.453 0-1.09.226-1.09 1.19v2.569h3.839l-.45 4.361z"
      ></path>
    </svg>
  )
}
