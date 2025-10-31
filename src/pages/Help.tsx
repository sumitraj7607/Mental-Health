
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PhoneCall, Mail, ExternalLink, AlertTriangle } from 'lucide-react';
import Layout from '@/components/Layout';

const emergencyResources = [
  {
    name: "National Suicide Prevention Lifeline",
    description: "24/7, free and confidential support for people in distress, prevention and crisis resources.",
    phone: "1-800-273-8255",
    website: "https://suicidepreventionlifeline.org/"
  },
  {
    name: "Crisis Text Line",
    description: "Free 24/7 support via text message. Text with a trained Crisis Counselor.",
    phone: "Text HOME to 741741",
    website: "https://www.crisistextline.org/"
  },
  {
    name: "SAMHSA's National Helpline",
    description: "24/7 treatment referral and information service for individuals and families facing mental health disorders.",
    phone: "1-800-662-HELP (4357)",
    website: "https://www.samhsa.gov/find-help/national-helpline"
  },
  {
    name: "National Domestic Violence Hotline",
    description: "Advocates available 24/7 to talk confidentially with anyone experiencing domestic violence.",
    phone: "1-800-799-SAFE (7233)",
    website: "https://www.thehotline.org/"
  }
];

const faqItems = [
  {
    question: "How can I get the most out of MindWell?",
    answer: "We recommend starting with the Resources section to learn about different mental health topics. Use the Mood Tracker daily to identify patterns in your emotional wellbeing, and try a mindfulness practice when feeling stressed or overwhelmed."
  },
  {
    question: "Is MindWell a substitute for professional mental health care?",
    answer: "No. While MindWell provides valuable resources and tools, it is not a substitute for professional diagnosis, counseling, or treatment. If you're experiencing significant distress, please consult with a licensed mental health professional."
  },
  {
    question: "How is my data used and protected?",
    answer: "Your privacy is our priority. All mood tracking data is stored locally on your device and is not shared with any third parties. We don't collect personal health information."
  },
  {
    question: "Can I recommend a resource to be added to MindWell?",
    answer: "Yes! We welcome suggestions for resources that may benefit our community. Please use the contact form below to submit your recommendations."
  },
  {
    question: "How often should I track my mood?",
    answer: "For the most benefit, we recommend tracking your mood daily. This helps establish patterns over time and increases your emotional awareness."
  }
];

const Help = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-10 text-center fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Help & Support</h1>
          <p className="text-lg text-muted-foreground">
            Find resources for immediate help, answers to common questions, and ways to contact us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Emergency Resources Section */}
          <section className="mb-12">
            <div className="flex items-center mb-6 gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h2 className="text-2xl font-bold">Emergency Resources</h2>
            </div>
            
            <div className="bg-destructive/5 p-4 rounded-lg mb-6">
              <p className="text-sm font-medium">
                If you're experiencing a mental health emergency or having thoughts of suicide, 
                please contact one of these services immediately. Help is available 24/7.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 scale-in">
              {emergencyResources.map((resource, index) => (
                <Card key={index} className="border-destructive/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <div className="flex items-center">
                      <PhoneCall className="h-4 w-4 mr-2 text-destructive" />
                      <span className="font-medium">{resource.phone}</span>
                    </div>
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={resource.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="scale-in">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <Card className="scale-in">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Have questions, feedback, or need assistance with MindWell? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a href="mailto:support@mindwell.example.com" className="text-primary hover:underline">
                    support@mindwell.example.com
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our team typically responds within 24-48 hours during business days.
                  For urgent matters related to mental health crises, please use the emergency
                  resources listed above.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Disclaimer Section */}
          <section>
            <Card className="bg-muted/50">
              <CardContent className="p-4 text-sm text-muted-foreground">
                <p>
                  <strong>Disclaimer:</strong> MindWell provides information and resources for educational purposes only. 
                  It is not a substitute for professional medical advice, diagnosis, or treatment. 
                  Always seek the advice of qualified health providers with any questions you may have regarding medical conditions.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
