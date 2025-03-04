import { createFileRoute } from '@tanstack/react-router';
import NewHome from '../pages/NewHome';

export const Route = createFileRoute('/newHome')({
  component: NewHome,
})