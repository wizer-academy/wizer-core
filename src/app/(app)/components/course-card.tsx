/* eslint-disable @next/next/no-img-element */
import { ComputerIcon } from '@/assets/computer-icon'
import { Progress } from '@/components/progress'

export function CourseCard() {
  return (
    <li className="overflow-hidden rounded-[10px]">
      <a
        href="#"
        className="relative flex w-full items-center justify-center overflow-hidden rounded-[10px]"
      >
        <div className="not-sr-only absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2">
          <img
            className="h-full w-full object-cover"
            src="/images/course-card.png"
            alt=""
          />
        </div>

        <div className="z-10 flex flex-col items-center justify-center gap-1 py-[59px]">
          <ComputerIcon />
          <strong className="text-xl font-medium">Programação</strong>
        </div>

        <Progress
          className="absolute bottom-0 left-1/2 h-3 w-full -translate-x-1/2 rounded-none"
          value={55}
        />
      </a>
    </li>
  )
}
