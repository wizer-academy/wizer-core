'use client'

import { useState } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { ClassCard } from './class-card'

export function SuggestedCoursesList() {
  const [open, setOpen] = useState(true)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="inline-flex items-center gap-3 transition-all">
        <h2 className="text-[1.75rem] font-semibold">Cursos sugeridos</h2>

        {open ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <ul className="grid grid-cols-4 gap-4">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
