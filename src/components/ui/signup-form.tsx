
"use client";
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle2, AlertTriangle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { apartments as apartmentData } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';
import type { DateRange } from "react-day-picker";

interface SignupFormProps {
  className?: string;
}

const WEBHOOK_URL = "https://hook.eu2.make.com/tb6bs6iffo4vxvr7gt2a7ugtz5d5ys6l";

export function SignupForm({ className }: SignupFormProps) {
  const t = useTranslations('SignupForm');
  const commonT = useTranslations('Common');
  const { toast } = useToast();
  const locale = useLocale();

  const formSchema = z.object({
    fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().min(7, { message: "Phone number must be at least 7 characters." }),
    apartmentId: z.string().min(1, { message: "Please select an apartment." }),
    dates: z.custom<DateRange | undefined>(
      (val) => val === undefined || (typeof val === 'object' && val !== null && 'from' in val && 'to' in val),
      "Please select a date range"
    ).refine(val => val !== undefined && val.from !== undefined && val.to !== undefined, {
      message: "Please select a complete date range.",
    }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, {message: "Message cannot exceed 500 characters."}),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      apartmentId: '',
      dates: undefined,
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form data successfully sent to webhook:', data);
        const apartmentName = apartmentData.find(ap => ap.id === data.apartmentId)?.name[locale] ||
                              apartmentData.find(ap => ap.id === data.apartmentId)?.name['en'] ||
                              'the selected apartment';
        toast({
          title: (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span>{t('submitSuccess')}</span>
            </div>
          ),
          description: t('submitSuccessDescription', { apartmentName }),
        });
        form.reset();
      } else {
        console.error('Webhook submission failed:', response.status, await response.text());
        toast({
          variant: "destructive",
          title: (
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive-foreground" />
              <span>{commonT('error')}</span>
            </div>
          ),
          description: t('submitError'),
        });
      }
    } catch (error) {
      console.error('Error submitting form to webhook:', error);
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive-foreground" />
            <span>{commonT('error')}</span>
          </div>
        ),
        description: t('submitError'),
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full max-w-xl p-8 space-y-6 bg-card text-card-foreground rounded-xl shadow-2xl", className)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('fullNameLabel')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('fullNamePlaceholder')} {...field} />
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
                <FormLabel>{t('emailLabel')}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t('emailPlaceholder')} {...field} />
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
                <FormLabel>{t('phoneLabel')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('phonePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="apartmentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('apartmentLabel')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('selectApartment')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {apartmentData.map((apartment) => (
                      <SelectItem key={apartment.id} value={apartment.id}>
                        {apartment.name[locale] || apartment.name['en']}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{t('datesLabel')}</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value?.from ? (
                          field.value.to ? (
                            <>
                              {format(field.value.from, "LLL dd, y")} -{" "}
                              {format(field.value.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value.from, "LLL dd, y")
                          )
                        ) : (
                          <span>{t('datePlaceholder')}</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value?.from}
                      selected={field.value}
                      onSelect={field.onChange}
                      numberOfMonths={1}
                      fromDate={new Date()}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('messageLabel')}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t('messagePlaceholder')} className="min-h-[100px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? commonT('loading') : t('submitButton')}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}

    