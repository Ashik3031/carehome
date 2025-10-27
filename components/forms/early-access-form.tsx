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

export function EarlyAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await sendEmail('TEMPLATE_ID', {
      ...formData,
      source: 'Rent Automation Early Access',
    });

    if (success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        userType: '',
        notes: '',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="early-name">Name *</Label>
          <Input
            id="early-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="early-email">Email *</Label>
          <Input
            id="early-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="early-phone">Phone *</Label>
          <Input
            id="early-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 9000000000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="early-userType">I am a *</Label>
          <Select
            required
            value={formData.userType}
            onValueChange={(value) => setFormData({ ...formData, userType: value })}
          >
            <SelectTrigger id="early-userType">
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Homeowner">Homeowner / Landlord</SelectItem>
              <SelectItem value="Tenant">Tenant</SelectItem>
              <SelectItem value="Both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="early-notes">Additional Notes</Label>
        <Textarea
          id="early-notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Tell us about your rental situation or any specific needs..."
          rows={4}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 font-semibold h-12"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Join Early Access'
        )}
      </Button>

      <p className="text-xs text-foreground/60 text-center">
        We'll notify you as soon as Rent Automation launches and give you priority access.
      </p>
    </form>
  );
}
