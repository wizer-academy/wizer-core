import { SVGProps } from 'react'

type GithubIconProps = SVGProps<SVGSVGElement>

export function GithubIcon(props: GithubIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="29"
      fill="none"
      viewBox="0 0 30 29"
      {...props}
    >
      <path
        fill="#F8F8F8"
        d="M15 0c-1.97 0-3.92.385-5.74 1.131a15.01 15.01 0 00-4.867 3.222A14.79 14.79 0 000 14.86C0 21.428 4.305 27 10.26 28.977c.75.12.99-.342.99-.743v-2.511c-4.155.892-5.04-1.991-5.04-1.991-.69-1.724-1.665-2.185-1.665-2.185-1.365-.921.105-.891.105-.891 1.5.104 2.295 1.53 2.295 1.53 1.305 2.259 3.51 1.59 4.365 1.234.135-.966.525-1.62.945-1.992-3.33-.371-6.825-1.65-6.825-7.31 0-1.65.57-2.973 1.545-4.028-.15-.371-.675-1.917.15-3.923 0 0 1.26-.401 4.125 1.516a14.258 14.258 0 013.75-.49c1.275 0 2.565.163 3.75.49 2.865-1.917 4.125-1.516 4.125-1.516.825 2.006.3 3.552.15 3.923.975 1.055 1.545 2.378 1.545 4.027 0 5.677-3.51 6.925-6.855 7.296.54.461 1.035 1.368 1.035 2.75v4.071c0 .401.24.877 1.005.743C25.71 26.986 30 21.428 30 14.86a14.74 14.74 0 00-1.142-5.686 14.851 14.851 0 00-3.251-4.821A15.011 15.011 0 0020.74 1.13 15.123 15.123 0 0015 .001z"
      ></path>
    </svg>
  )
}
