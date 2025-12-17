"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  company: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number").optional(),
  budget: z.enum(["<5k", "5k-10k", "10k-25k", "25k-50k", "50k+", "not_sure"]),
  serviceType: z.enum(["web_development", "seo", "graphic_design", "digital_marketing", "branding", "consultation", "other", "systems_creation"]),
  timeline: z.enum(["urgent", "1_month", "3_months", "6_months", "flexible"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  referralSource: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and privacy policy"
  }),
  contactPreference: z.enum(["email", "phone", "either"]),
  newsletter: z.boolean().optional(),
  website: z.string().max(0, ""), // honeypot
  submissionTime: z.number().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [startTime] = useState(() => Date.now())
  const [userAgent, setUserAgent] = useState<string>("")
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      company: "",
      phone: "",
      budget: "not_sure",
      serviceType: "consultation",
      timeline: "flexible",
      message: "",
      referralSource: "",
      agreeToTerms: false,
      contactPreference: "email",
      newsletter: false,
      website: "",
      submissionTime: 0,
    },
  })

  useEffect(() => {
    setUserAgent(window.navigator.userAgent)
  }, [])

  async function onSubmit(data: FormValues) {
    const submissionTime = Date.now() - startTime
    if (submissionTime < 2000) {
      toast({
        title: "Slow down just a bit",
        description: "Please take another moment and resubmit so we can verify you're human.",
        variant: "destructive",
      })
      return
    }
    form.setValue("submissionTime", submissionTime, { shouldValidate: false })
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Client-User-Agent': userAgent,
        },
        body: JSON.stringify({ ...data, submissionTime })
      })
      
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      
      form.reset()
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <input
              {...field}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
          )}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
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
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="What's this about?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="web_development">Web Development</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="digital_marketing">Digital Marketing</SelectItem>
                    <SelectItem value="graphic_design">Graphic Design</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                    <SelectItem value="systems_creation">Systems Creation</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a budget" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="<5k">Under $5k</SelectItem>
                    <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                    <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                    <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                    <SelectItem value="50k+">$50k+</SelectItem>
                    <SelectItem value="not_sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timeline</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a timeline" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="1_month">1 month</SelectItem>
                    <SelectItem value="3_months">3 months</SelectItem>
                    <SelectItem value="6_months">6 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell me about your project or inquiry..." 
                  className="min-h-[150px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="referralSource"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How did you hear about me?</FormLabel>
                <FormControl>
                  <Input placeholder="Referral, Google, X, event, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactPreference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred contact</FormLabel>
                <RadioGroup onValueChange={field.onChange} value={field.value} className="grid grid-cols-3 gap-2">
                  {[
                    { value: "email", label: "Email" },
                    { value: "phone", label: "Phone" },
                    { value: "either", label: "Either" },
                  ].map(option => (
                    <FormControl key={option.value}>
                      <label className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:border-primary cursor-pointer">
                        <RadioGroupItem value={option.value} />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    </FormControl>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Subscribe to updates</FormLabel>
                  <FormDescription>Occasional insights on SEO, systems, and digital marketing (no spam).</FormDescription>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>I agree to the Terms and Privacy Policy</FormLabel>
                  <FormDescription>We use your info to respond to your request. No third-party sales.</FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>
        
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  )
}