import { SVGProps } from 'react'

type ThemeIconProps = SVGProps<SVGSVGElement>

export function ThemeIcon(props: ThemeIconProps) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.0019 1.5L17.2956 4.79375H23.2062V10.7037L26.5 13.9975L23.2062 17.2963V23.2062H17.2963L14.0025 26.5L10.7037 23.2062H4.79375V17.2963L1.5 13.9981L4.79375 10.7044V4.79375H10.7037L14.0019 1.5Z"
        stroke="#F8F8F8"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.875 9.625C15.875 14.625 12.75 15.25 9.625 15.25C9.625 17.75 13.6875 20.25 17.125 17.75C20.5625 15.25 18.375 9.625 15.875 9.625Z"
        stroke="#F8F8F8"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
