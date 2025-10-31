
import { Brain, Waves, Sparkles, Heart, Music } from 'lucide-react';
import { MeditationExercise } from '@/types/meditation';

const meditationExercises: MeditationExercise[] = [
  {
    id: "breathing",
    title: "Deep Breathing",
    description: "A simple practice focusing on slow, deep breaths to promote relaxation.",
    duration: 5,
    category: "beginner",
    icon: Waves,
  },
  {
    id: "body-scan",
    title: "Body Scan",
    description: "Gradually scan your body for tension and release it through awareness.",
    duration: 10,
    category: "beginner",
    icon: Sparkles,
  },
  {
    id: "loving-kindness",
    title: "Loving-Kindness",
    description: "Cultivate feelings of compassion for yourself and others.",
    duration: 15,
    category: "intermediate",
    icon: Heart,
  },
  {
    id: "mindful-awareness",
    title: "Mindful Awareness",
    description: "Focus on the present moment and observe thoughts without judgment.",
    duration: 20,
    category: "intermediate",
    icon: Brain,
  },
  {
    id: "guided-visualization",
    title: "Guided Visualization",
    description: "Journey through a peaceful mental landscape to reduce stress.",
    duration: 15,
    category: "beginner",
    icon: Sparkles,
  },
  {
    id: "sound-meditation",
    title: "Sound Meditation",
    description: "Focus on ambient sounds to anchor your awareness to the present.",
    duration: 10,
    category: "beginner",
    icon: Music,
  },
];

export default meditationExercises;
