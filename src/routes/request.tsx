import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/request')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/request"!</div>
}
