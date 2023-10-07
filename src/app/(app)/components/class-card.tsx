/* eslint-disable @next/next/no-img-element */
import { PlayerIcon } from '@/assets/player-icon'

export function ClassCard() {
  return (
    <li className="max-h-[185px] overflow-hidden rounded-[10px] shadow-md shadow-black/20">
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

        <div className="z-10 flex flex-col items-center justify-center gap-4 py-[42px]">
          <PlayerIcon />
          <strong className="text-xl font-medium">Aula 10: Java</strong>
        </div>
      </a>
    </li>
  )
}
