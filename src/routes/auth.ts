import { createFileRoute } from '@tanstack/react-router'
import { Auth } from '../pages/Auth'

export const AuthRoute = createFileRoute('/auth')({
  component: Auth
})