import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meetings')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Hello "/meetings"!</div>
      <div>
        This page will encompass the old agendas, minutes, docs, and meetings
        pages
      </div>
    </>
  )
}
