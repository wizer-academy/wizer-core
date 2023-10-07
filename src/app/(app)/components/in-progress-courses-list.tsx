'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { CourseCard } from './course-card'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function InProgressCourseList() {
  const [open, setOpen] = useState(true)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="inline-flex items-center gap-3 transition-all">
        <h2 className="text-[1.75rem] font-semibold">
          Meus cursos em andamento
        </h2>

        {open ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <ul className="grid grid-cols-4 gap-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
