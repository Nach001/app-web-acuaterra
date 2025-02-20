import { createFileRoute } from '@tanstack/react-router'
import { Users } from '../pages/Users'

export const UserRoute = createFileRoute('/users')({
  component: Users
})