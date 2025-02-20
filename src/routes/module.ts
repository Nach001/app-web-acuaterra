import { createFileRoute } from '@tanstack/react-router'
import { Module } from '../pages/Module'

export const MooduleRoute = createFileRoute('/module')({
  component: Module
})