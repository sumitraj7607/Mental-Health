
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, HeartHandshake, Sparkles, Users } from 'lucide-react';
import Layout from '@/components/Layout';

// Resource items for different categories
const articlesData = [
  {
    id: 1,
    title: "Understanding Anxiety",
    description: "Learn about different types of anxiety disorders and how they affect your mind and body.",
    category: "anxiety",
    icon: Sparkles,
    url: "#"
  },
  {
    id: 2,
    title: "Depression: Signs and Symptoms",
    description: "Recognize the signs of depression and understand when to seek help.",
    category: "depression",
    icon: BookOpen,
    url: "#"
  },
  {
    id: 3,
    title: "Stress Management Techniques",
    description: "Practical approaches to manage stress in your daily life.",
    category: "stress",
    icon: Brain,
    url: "#"
  },
  {
    id: 4,
    title: "Building Healthy Relationships",
    description: "Tips for creating and maintaining supportive relationships.",
    category: "relationships",
    icon: Users,
    url: "#"
  },
  {
    id: 5,
    title: "Self-Care Fundamentals",
    description: "Essential practices for maintaining your mental and emotional wellbeing.",
    category: "self-care",
    icon: HeartHandshake,
    url: "#"
  },
  {
    id: 6,
    title: "Mindfulness for Beginners",
    description: "Simple mindfulness practices you can incorporate into your daily routine.",
    category: "mindfulness",
    icon: Brain,
    url: "#"
  }
];

const supportData = [
  {
    id: 1,
    title: "National Suicide Prevention Lifeline",
    description: "24/7, free and confidential support for people in distress.",
    phone: "1-800-273-8255",
    url: "https://suicidepreventionlifeline.org/",
    category: "crisis"
  },
  {
    id: 2,
    title: "Crisis Text Line",
    description: "Text-based crisis intervention service available 24/7.",
    phone: "Text HOME to 741741",
    url: "https://www.crisistextline.org/",
    category: "crisis"
  },
  {
    id: 3,
    title: "SAMHSA's National Helpline",
    description: "Treatment referral and information service for individuals dealing with mental health or substance use disorders.",
    phone: "1-800-662-4357",
    url: "https://www.samhsa.gov/find-help/national-helpline",
    category: "general"
  },
  {
    id: 4,
    title: "Psychology Today Therapist Finder",
    description: "Search for therapists in your area, filtered by specialty and insurance.",
    url: "https://www.psychologytoday.com/us/therapists",
    category: "therapy"
  }
];

const toolsData = [
  {
    id: 1,
    title: "Breathing Exercises",
    description: "Simple breathing techniques to reduce anxiety and promote relaxation.",
    category: "anxiety",
    url: "#"
  },
  {
    id: 2,
    title: "Mood Journal Template",
    description: "A downloadable template to track your moods and emotions.",
    category: "mood",
    url: "#"
  },
  {
    id: 3,
    title: "Thought Record Worksheet",
    description: "Identify and challenge negative thinking patterns.",
    category: "cbt",
    url: "#"
  },
  {
    id: 4,
    title: "Gratitude Practice Guide",
    description: "How to build a daily gratitude practice for improved wellbeing.",
    category: "wellbeing",
    url: "#"
  }
];

const Resources = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-10 text-center fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mental Health Resources</h1>
          <p className="text-lg text-muted-foreground">
            Access articles, support services, and practical tools to support your mental health journey.
          </p>
        </div>

        <Tabs defaultValue="articles" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
            <TabsTrigger value="support">Support Services</TabsTrigger>
            <TabsTrigger value="tools">Tools & Worksheets</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="scale-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlesData.map((item) => (
                <Card key={item.id} className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <item.icon className="h-5 w-5 text-primary mt-1" />
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={item.url}>Read Article</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="support" className="scale-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportData.map((item) => (
                <Card key={item.id} className={`card-hover ${item.category === 'crisis' ? 'border-destructive/30' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {item.phone && (
                      <p className="font-medium">{item.phone}</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant={item.category === 'crisis' ? 'destructive' : 'outline'} size="sm" className="w-full">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="scale-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolsData.map((item) => (
                <Card key={item.id} className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={item.url}>Access Tool</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="max-w-3xl mx-auto mt-16 text-center py-8 px-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Need Immediate Help?</h2>
          <p className="mb-6">
            If you're experiencing a mental health crisis or having thoughts of suicide, 
            please call the National Suicide Prevention Lifeline immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="destructive" size="lg" asChild>
              <a href="tel:1-800-273-8255">Call 1-800-273-8255</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="sms:741741&body=HOME">Text HOME to 741741</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
