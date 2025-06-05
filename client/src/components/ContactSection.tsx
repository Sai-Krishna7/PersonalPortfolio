import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { RectangleEllipsis, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { sendContactForm } from '@/lib/utils';
import FadeInElement from './FadeInElement';
import SectionWrapper from './SectionWrapper';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      await sendContactForm(data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again later or contact directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* Updated background to ensure content is visible in both light and dark modes */}
      <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900 -z-10"></div>
      
      <div className="section-container text-center mb-12">
        <FadeInElement>
          <p className="text-primary dark:text-primary-400 font-medium">Contact Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form below or through my contact information.
          </p>
        </FadeInElement>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <div className="md:grid md:grid-cols-5">
          {/* <div className="p-8 md:p-12 md:col-span-2 bg-primary dark:bg-primary-800 text-gray-900 dark:text-white"> */}
          <div className="p-8 md:p-12 md:col-span-2">
            <FadeInElement delay={0.2}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h2>
              <p className="mb-8 text-gray-700 dark:text-gray-200">
                Feel free to contact me for work opportunities or if you have any questions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4 shrink-0">
                    <RectangleEllipsis className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">saideeduvanu@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">Tempe, AZ</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4 shrink-0">
                    <FaLinkedin className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/sai-deeduvanu-6108b21b8/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 text-sm hover:text-primary dark:hover:text-primary-400">
                      linkedin.com/in/sai-deeduvanu
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Follow me</h3>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <FaGithub className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <FaTwitter className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <FaInstagram className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  </a>
                </div>
              </div>
            </FadeInElement>
          </div>
          
          <div className="p-8 md:p-12 md:col-span-3">
            <FadeInElement delay={0.2}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 focus:border-primary dark:focus:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your.email@example.com"
                              type="email"
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 focus:border-primary dark:focus:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What is this regarding?"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 focus:border-primary dark:focus:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message here..."
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 focus:border-primary dark:focus:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </FadeInElement>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
