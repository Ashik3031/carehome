'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sendEmail } from '@/lib/emailjs';
import { Loader2 } from 'lucide-react';

interface PlanInquiryFormProps {
  defaultPlan?: string;
}

export function PlanInquiryForm({ defaultPlan }: PlanInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    plan: defaultPlan || '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await sendEmail('TEMPLATE_ID', {
      ...formData,
      source: 'Plans Page',
    });

    if (success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        plan: defaultPlan || '',
        notes: '',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 9000000000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Property Location *</Label>
          <Input
            id="location"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="Area in Kozhikode"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="plan">Select Plan *</Label>
        <Select
          required
          value={formData.plan}
          onValueChange={(value) => setFormData({ ...formData, plan: value })}
        >
          <SelectTrigger id="plan">
            <SelectValue placeholder="Choose a plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Basic">Basic</SelectItem>
            <SelectItem value="Standard">Standard</SelectItem>
            <SelectItem value="Premium">Premium</SelectItem>
            <SelectItem value="Custom">Custom Plan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Any special requirements or questions?"
          rows={4}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-primary hover:bg-primary/90 font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Submit Inquiry'
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          asChild
          className="flex-1"
        >
          <a
            href="https://wa.me/919000000000?text=Hi%2C%20I%27m%20interested%20in%20CareToHome%20plans."
            target="_blank"
            rel="noopener noreferrer"
          >
            Or Talk on WhatsApp
          </a>
        </Button>
      </div>

      <p className="text-xs text-foreground/60 text-center">
        We'll get back to you within 24 hours. You can also email us at{' '}
        <a href="mailto:hello@example.com" className="text-primary hover:underline">
          hello@example.com
        </a>
      </p>
    </form>
  );
}
