import { createFileRoute } from '@tanstack/react-router'
import { Users } from '../pages/Users'
import { authGuard } from '../common/isTokenValid'

export const Route = createFileRoute('/users')({
  component: Users,
  beforeLoad: authGuard
});