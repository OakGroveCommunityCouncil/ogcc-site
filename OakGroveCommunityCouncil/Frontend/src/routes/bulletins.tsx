import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bulletins')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bulletins"!</div>
}
