'use client'

import { useState } from 'react'

import * as Collapsible from '@radix-ui/react-collapsible'
import { CourseCard } from './course-card'

import { LuChevronUp, LuChevronDown } from 'react-icons/lu'

export const courses = [
  {
    id: '1',
    title: 'Programação',
    process: 40,
  },
  {
    id: '2',
    title: 'Devops',
    process: 70,
  },
  {
    id: '3',
    title: 'Front-end',
    process: 100,
  },
  {
    id: '4',
    title: 'Software',
    process: 20,
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

        {open ? <LuChevronUp size={32} /> : <LuChevronDown size={32} />}
      </Collapsible.Trigger>
      <Collapsible.Content>
        <ul className="mt-6 grid grid-cols-4 gap-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              process={course.process}
            />
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
