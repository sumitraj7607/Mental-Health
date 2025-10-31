
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';
import MeditationExerciseCard from '@/components/mindfulness/MeditationExerciseCard';
import MeditationPlayer from '@/components/mindfulness/MeditationPlayer';
import meditationExercises from '@/data/meditationExercises';
import { MeditationExercise } from '@/types/meditation';

const Mindfulness = () => {
  const [selectedExercise, setSelectedExercise] = useState<MeditationExercise | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  
  const handleSelectExercise = (exercise: MeditationExercise) => {
    setSelectedExercise(exercise);
    setIsPlaying(false);
    setProgress(0);
    
    // Clear any existing interval
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };
  
  const handleTogglePlay = () => {
    if (!selectedExercise) return;
    
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    
    if (newIsPlaying) {
      // Start the timer
      const id = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(id);
            setIsPlaying(false);
            return 100;
          }
          return prev + (100 / (selectedExercise.duration * 60));
        });
      }, 1000);
      
      setIntervalId(id);
    } else if (intervalId !== null) {
      // Stop the timer
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-10 text-center fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mindfulness Practices</h1>
          <p className="text-lg text-muted-foreground">
            Simple exercises to help you reduce stress and increase present-moment awareness.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="beginner">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                </TabsList>
                
                <TabsContent value="beginner" className="space-y-4 scale-in">
                  {meditationExercises
                    .filter(exercise => exercise.category === "beginner")
                    .map(exercise => (
                      <MeditationExerciseCard 
                        key={exercise.id}
                        exercise={exercise}
                        isSelected={selectedExercise?.id === exercise.id}
                        onSelect={handleSelectExercise}
                      />
                    ))}
                </TabsContent>
                
                <TabsContent value="intermediate" className="space-y-4 scale-in">
                  {meditationExercises
                    .filter(exercise => exercise.category === "intermediate")
                    .map(exercise => (
                      <MeditationExerciseCard 
                        key={exercise.id}
                        exercise={exercise}
                        isSelected={selectedExercise?.id === exercise.id}
                        onSelect={handleSelectExercise}
                      />
                    ))}
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <MeditationPlayer
                selectedExercise={selectedExercise}
                isPlaying={isPlaying}
                progress={progress}
                onTogglePlay={handleTogglePlay}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mindfulness;
