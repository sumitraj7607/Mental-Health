
import React from 'react';
import { Link } from 'react-router-dom';
import { BookHeart, Brain, Heart, HeartPulse, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Mental Health Journey Starts Here
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access resources, track your mood, practice mindfulness, and find support
              in one safe, compassionate space.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/resources">Browse Resources</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/mood">Track Your Mood</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How MindWell Supports You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-border bg-card card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <BookHeart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Mental Health Resources</h3>
                <p className="text-muted-foreground">
                  Access articles, guides, and professional resources on various mental health topics.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <HeartPulse className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Mood Tracking</h3>
                <p className="text-muted-foreground">
                  Track your moods and emotions to identify patterns and triggers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Mindfulness Practices</h3>
                <p className="text-muted-foreground">
                  Guided exercises to reduce stress and increase present-moment awareness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-destructive/10 w-12 h-12 flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Crisis Support</h3>
                <p className="text-muted-foreground">
                  Quick access to emergency services and mental health hotlines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6 breathe" />
            <h2 className="text-3xl font-bold mb-4">Begin Your Wellness Journey Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Small steps today lead to meaningful progress in your mental health journey.
              We're here to support you every step of the way.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/resources">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
