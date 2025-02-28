import { createFileRoute } from '@tanstack/react-router';
import Report from '../pages/Report';

export const Route = createFileRoute('/report')({
  component: Report,
})