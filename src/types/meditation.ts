
import { LucideIcon } from 'lucide-react';

export interface MeditationExercise {
  id: string;
  title: string;
  description: string;
  duration: number;
  category: string;
  icon: LucideIcon;
}
