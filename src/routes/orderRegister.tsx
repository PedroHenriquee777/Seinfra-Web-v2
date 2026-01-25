import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orderRegister')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/orderRegister"!</div>
}
