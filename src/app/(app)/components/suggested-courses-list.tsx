'use client'

import { useState } from 'react'
import { courses } from './in-progress-courses-list'

import * as Collapsible from '@radix-ui/react-collapsible'
import { ClassCard } from './class-card'

import { LuChevronDown, LuChevronUp } from 'react-icons/lu'

export function SuggestedCoursesList() {
  const [open, setOpen] = useState(true)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="inline-flex items-center gap-3 transition-all">
        <h2 className="text-[1.75rem] font-semibold">Cursos sugeridos</h2>

        {open ? <LuChevronUp size={32} /> : <LuChevronDown size={32} />}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <ul className="mt-6 grid grid-cols-4 gap-4">
          {courses.map((course) => (
            <ClassCard key={course.id} title={course.title} />
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
