
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { MeditationExercise } from '@/types/meditation';

interface MeditationExerciseCardProps {
  exercise: MeditationExercise;
  isSelected: boolean;
  onSelect: (exercise: MeditationExercise) => void;
}

const MeditationExerciseCard: React.FC<MeditationExerciseCardProps> = ({ 
  exercise, 
  isSelected,
  onSelect 
}) => {
  const formatTime = (minutes: number) => {
    return `${minutes} min`;
  };

  const Icon = exercise.icon;

  return (
    <Card 
      className={`cursor-pointer transition-all ${
        isSelected 
          ? "border-primary shadow-md" 
          : "hover:border-primary/50"
      }`}
      onClick={() => onSelect(exercise)}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">{exercise.title}</CardTitle>
        <Icon className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{exercise.description}</CardDescription>
        <div className="flex items-center mt-3 text-sm">
          <Clock className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
          <span>{formatTime(exercise.duration)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeditationExerciseCard;
