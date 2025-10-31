import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Smile, SmilePlus, Meh, Frown, Heart } from 'lucide-react';
import Layout from '@/components/Layout';

const moodEmojis = [
  { value: 0, icon: Frown, label: "Very Bad", color: "text-red-500" },
  { value: 1, icon: Frown, label: "Bad", color: "text-orange-500" },
  { value: 2, icon: Meh, label: "Okay", color: "text-yellow-500" },
  { value: 3, icon: Smile, label: "Good", color: "text-green-500" },
  { value: 4, icon: SmilePlus, label: "Very Good", color: "text-primary" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [moodIntensity, setMoodIntensity] = useState([50]);
  const [notes, setNotes] = useState('');
  const { toast } = useToast();

  const handleMoodSelect = (moodValue: number) => {
    setSelectedMood(moodValue);
  };

  const handleSaveMood = () => {
    if (selectedMood === null) {
      toast({
        title: "Please select a mood",
        description: "Select how you're feeling today before saving.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would save this to a database
    const moodEntry = {
      mood: selectedMood,
      intensity: moodIntensity[0],
      notes,
      date: new Date().toISOString(),
    };

    console.log('Mood entry saved:', moodEntry);
    
    toast({
      title: "Mood tracked successfully!",
      description: "Your mood entry has been saved.",
    });

    // Reset form
    setSelectedMood(null);
    setMoodIntensity([50]);
    setNotes('');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-10 text-center fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mood Tracker</h1>
          <p className="text-lg text-muted-foreground">
            Track how you're feeling to gain insights into your emotional patterns.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto scale-in">
          <CardHeader>
            <CardTitle>How are you feeling today?</CardTitle>
            <CardDescription>
              Select the emoji that best represents your current mood.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-8">
              {moodEmojis.map((mood) => {
                const Icon = mood.icon;
                return (
                  <button
                    key={mood.value}
                    className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                      selectedMood === mood.value
                        ? "bg-primary/10 scale-110"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => handleMoodSelect(mood.value)}
                  >
                    <Icon 
                      className={`h-10 w-10 mb-2 ${
                        selectedMood === mood.value ? mood.color : "text-muted-foreground"
                      }`} 
                    />
                    <span className="text-sm font-medium">{mood.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">
                  Intensity: {moodIntensity[0]}%
                </label>
                <Slider
                  value={moodIntensity}
                  onValueChange={setMoodIntensity}
                  max={100}
                  step={1}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Notes (optional)
                </label>
                <Textarea
                  placeholder="What's contributing to your mood today?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveMood} className="w-full">
              Save Mood Entry
            </Button>
          </CardFooter>
        </Card>

        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Your mood data is stored locally and is not shared with anyone. In a future update, 
            you'll be able to view your mood history and track patterns over time.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MoodTracker;
