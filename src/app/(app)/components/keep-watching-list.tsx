'use client'

import { useState } from 'react'
import { ClassCard } from './class-card'

import * as Collapsible from '@radix-ui/react-collapsible'

import { ChevronDown, ChevronUp } from 'lucide-react'

const lessons = [
  {
    id: '1',
    title: 'Aula 10: Java',
  },
  {
    id: '2',
    title: 'Aula 9: PHP',
  },
  {
    id: '3',
    title: 'Aula 8: Python',
  },
  {
    id: '4',
    title: 'Aula 1: HTML',
  },
]

export function KeepWatchingList() {
  const [open, setOpen] = useState(true)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="inline-flex items-center gap-3 transition-all">
        <h2 className="text-[1.75rem] font-semibold">Continue assistindo</h2>

        {open ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <ul className="mt-6 grid grid-cols-4 gap-4">
          {lessons.map((lesson) => (
            <ClassCard key={lesson.id} title={lesson.title} />
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
