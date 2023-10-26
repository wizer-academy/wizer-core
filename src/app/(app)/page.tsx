import { Header } from '@/components/header'
import { InProgressCourseList } from './components/in-progress-courses-list'
import { KeepWatchingList } from './components/keep-watching-list'
import { SuggestedCoursesList } from './components/suggested-courses-list'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-cover dark:bg-background-app">
      <Header />
      <div className="mx-auto w-full max-w-[1308px] space-y-[54px] pb-10">
        <InProgressCourseList />
        <KeepWatchingList />
        <SuggestedCoursesList />
      </div>
    </main>
  )
}
