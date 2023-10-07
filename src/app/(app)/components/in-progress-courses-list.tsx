'use client'

import { useState } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'
import { CourseCard } from './course-card'

import { ChevronUp, ChevronDown } from 'lucide-react'

export const courses = [
  {
    id: '1',
    title: 'Programação',
  },
  {
    id: '2',
    title: 'Devops',
  },
  {
    id: '3',
    title: 'Front-end',
  },
  {
    id: '4',
    title: 'Software',
  },
]

export function InProgressCourseList() {
  const [open, setOpen] = useState(true)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="inline-flex items-center gap-3 transition-all">
        <h2 className="text-[1.75rem] font-semibold text-text">
          Meus cursos em andamento
        </h2>

        {open ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <ul className="mt-6 grid grid-cols-4 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} title={course.title} />
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
