
import React from 'react';
import { PlayCircle, PauseCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { MeditationExercise } from '@/types/meditation';

interface MeditationPlayerProps {
  selectedExercise: MeditationExercise | null;
  isPlaying: boolean;
  progress: number;
  onTogglePlay: () => void;
}

const MeditationPlayer: React.FC<MeditationPlayerProps> = ({
  selectedExercise,
  isPlaying,
  progress,
  onTogglePlay
}) => {
  const formatTime = (minutes: number) => {
    return `${minutes} min`;
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-xl">
          {selectedExercise 
            ? selectedExercise.title 
            : "Select a Practice"}
        </CardTitle>
        <CardDescription>
          {selectedExercise 
            ? selectedExercise.description 
            : "Choose a mindfulness exercise from the left to begin"}
        </CardDescription>
      </CardHeader>
      
      {selectedExercise && (
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm">{formatTime(selectedExercise.duration)}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
          
          <Button 
            onClick={onTogglePlay}
            className="w-full mt-4 flex items-center justify-center"
            variant={isPlaying ? "secondary" : "default"}
          >
            {isPlaying ? (
              <>
                <PauseCircle className="h-5 w-5 mr-2" />
                Pause
              </>
            ) : (
              <>
                <PlayCircle className="h-5 w-5 mr-2" />
                Begin Practice
              </>
            )}
          </Button>
        </CardContent>
      )}
      
      <CardFooter className="flex-col">
        <p className="text-sm text-muted-foreground mb-4">
          Remember, consistency is key for mindfulness practice.
          Even just a few minutes each day can make a difference.
        </p>
        <Button variant="outline" size="sm" asChild className="w-full">
          <Link to="/resources">Learn More About Mindfulness</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MeditationPlayer;
