

## Plan: Integrate EmailJS into Contact Form

### What will change

Update `ContactSection.tsx` to send form submissions via EmailJS instead of the current `mailto` approach. When someone fills out the contact form, you will receive the details directly in your Gmail inbox.

### Technical details

1. **Install** `@emailjs/browser` package

2. **Update `src/components/ContactSection.tsx`**:
   - Import `emailjs` from `@emailjs/browser`
   - Replace the `mailto` handler with `emailjs.send()` using your credentials:
     - Service ID: `service_m2c0m3j`
     - Template ID: `template_z5byzja`
     - Public Key: `jq8ciFLgwZ7kur92l`
   - Add loading state to disable the button during submission
   - Show success/error toast notifications using `sonner`
   - Reset form fields on success

3. **No backend or secrets storage needed** — EmailJS public keys are safe to use in frontend code.

### What you need to verify on EmailJS dashboard

Make sure your email template (`template_z5byzja`) has these template variables matching the form fields:
- `from_name` (sender's name)
- `from_email` (sender's email)
- `message` (the message content)

If your template uses different variable names, let me know and I will adjust.

