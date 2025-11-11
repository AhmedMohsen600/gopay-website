"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please tell us your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please add a phone number we can reach you on.")
    .regex(
      /^[\d+()\-\s]{7,}$/,
      "Phone numbers may include digits, spaces, dashes, parentheses, or a leading +."
    ),
  city: z.string().min(2, "Please tell us where you are located."),
  message: z
    .string()
    .min(10, "A short message helps us prepare the right response."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.info("Contact form submission", values);
      form.reset();
    } catch (error) {
      console.error("Failed to submit contact form", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "rounded-[20px]  bg-[#FAFAFA]",
        "xl:p-8 md:p-6 p-4",
        className
      )}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
          noValidate
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name*</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
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
                <FormLabel>Phone Number*</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City*</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Message*</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    rows={4}
                    {...field}
                    className="bg-white placeholder:text-[#999999]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                className=" rounded-md w-full h-10  text-base font-semibold "
                disabled={isSubmitting || !form.formState.isValid}
                size={"default"}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
