import { createFileRoute } from '@tanstack/react-router';
import ModuleRegsiter from '../pages/ModuleRegister';

export const Route = createFileRoute('/moduleRegister')({
  component: ModuleRegsiter,
})