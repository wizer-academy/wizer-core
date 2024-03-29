import { SVGProps } from 'react'

type GoogleIconProps = SVGProps<SVGSVGElement>

export function GoogleIcon(props: GoogleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <path
        fill="#F8F8F8"
        fillRule="evenodd"
        d="M1.904 5.807a12.113 12.113 0 00-1.898 6.901 12.23 12.23 0 002.3 7.004 12.663 12.663 0 005.95 4.502 12.97 12.97 0 007.511.42 12.752 12.752 0 006.436-3.81c2.4-2.739 2.8-6.454 2.7-9.974H12.703v4.302l7.2.098c-.6 1.956-2 3.911-4.1 4.693a8.183 8.183 0 01-6.129-.295 8.007 8.007 0 01-2.512-1.823 7.808 7.808 0 01-1.608-2.624 7.68 7.68 0 01.303-5.993A7.855 7.855 0 017.72 6.752a8.055 8.055 0 012.684-1.573c2.6-.977 5.399.098 7.499 1.37l3.299-3.227A12.71 12.71 0 0014.647.164a12.857 12.857 0 00-7.246.933 12.516 12.516 0 00-5.497 4.71z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
