import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../common/Button';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  project: string;
  message: string;
  agreeTerms: boolean;
}

interface EnquiryFormProps {
  defaultProject?: string;
  isModal?: boolean;
  onSuccess?: () => void;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultProject = 'Green Valley',
  isModal = false,
  onSuccess,
  className = '',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    defaultValues: {
      project: defaultProject,
      agreeTerms: true,
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log('Enquiry Form Submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    onSuccess?.();
  };

  const handleReset = () => {
    setIsSubmitted(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-gold-pale/80 border border-gold/40 rounded-sm p-6 sm:p-8 text-center animate-fade-in">
        <div className="w-14 h-14 bg-forest text-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-forest mb-2">
          Enquiry Received Successfully!
        </h3>
        <p className="text-sm text-text-muted max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for reaching out to Sri Parinithee. One of our dedicated property advisors will contact you shortly with project brochures, pricing details, and visit schedules.
        </p>
        <Button variant="forest" size="sm" onClick={handleReset}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`} noValidate>
      {/* Name and Phone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Ramesh Varma"
            {...register('fullName', {
              required: 'Full name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            className={`w-full px-3.5 py-2.5 rounded-[3px] border bg-white text-sm text-forest placeholder:text-text-muted/60 transition-colors focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-border-light'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /^(\+91[\-\s]?)?[6789]\d{9}$/,
                message: 'Enter a valid 10-digit mobile number',
              },
            })}
            className={`w-full px-3.5 py-2.5 rounded-[3px] border bg-white text-sm text-forest placeholder:text-text-muted/60 transition-colors focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold ${
              errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-border-light'
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>

      {/* Email and Project Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. name@domain.com"
            {...register('email', {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
            className={`w-full px-3.5 py-2.5 rounded-[3px] border bg-white text-sm text-forest placeholder:text-text-muted/60 transition-colors focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-border-light'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="project" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
            Select Project
          </label>
          <select
            id="project"
            {...register('project')}
            className="w-full px-3.5 py-2.5 rounded-[3px] border border-border-light bg-white text-sm text-forest transition-colors focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold cursor-pointer"
          >
            <option value="Green Valley">Green Valley (Visakhapatnam)</option>
            <option value="Golden Avenue">Golden Avenue (Anakapalle)</option>
            <option value="Ocean Heights">Ocean Heights (Bheemunipatnam)</option>
            <option value="General Inquiry">General Real Estate Inquiry</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={isModal ? 3 : 4}
          placeholder="I would like to know more about plot availability, pricing, and schedule a site visit..."
          {...register('message', {
            required: 'Please enter your message or query',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
          })}
          className={`w-full px-3.5 py-2.5 rounded-[3px] border bg-white text-sm text-forest placeholder:text-text-muted/60 transition-colors focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold resize-none ${
            errors.message ? 'border-red-400 bg-red-50/20' : 'border-border-light'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1 font-medium">{errors.message.message}</p>
        )}
      </div>

      {/* Terms & Privacy Consent */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="agreeTerms"
          type="checkbox"
          {...register('agreeTerms', {
            required: 'You must agree before submitting',
          })}
          className="mt-1 h-4 w-4 rounded border-border-light text-gold focus:ring-gold cursor-pointer"
        />
        <label htmlFor="agreeTerms" className="text-xs text-text-muted leading-relaxed cursor-pointer select-none">
          I agree to the <span className="text-forest font-medium underline">Privacy Policy</span> and{' '}
          <span className="text-forest font-medium underline">Terms &amp; Conditions</span>, and authorize Sri Parinithee to contact me regarding my enquiry.
        </label>
      </div>
      {errors.agreeTerms && (
        <p className="text-xs text-red-500 font-medium">{errors.agreeTerms.message}</p>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="gold"
          size="md"
          fullWidth
          disabled={isSubmitting}
          icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        >
          {isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
        </Button>
      </div>
    </form>
  );
};

