import { createFileRoute } from '@tanstack/react-router';
import  BitacoraRegister  from '../pages/BitacoraRegister';

export const Route = createFileRoute('/bitacoraRegister')({
  component: BitacoraRegister,
})