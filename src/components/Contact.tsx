import { useState } from 'react';
import { Send, Phone, Mail, Linkedin, Github, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
          to_name: 'Atharv',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast({ title: "Message Sent! 🎉", description: "I'll get back to you soon!" });
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch {
      toast({ title: "Error Sending Message", description: "Please try again or contact me directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    { icon: Phone, label: 'Phone', value: '+91 8446379837', href: 'tel:+918446379837', bg: 'bg-green-500' },
    { icon: Mail, label: 'Email', value: 'atharvb03@gmail.com', href: 'mailto:atharvb03@gmail.com', bg: 'bg-red-500' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/atharv-bendkhale-18789324b', bg: 'bg-blue-600' },
    { icon: Github, label: 'GitHub', value: 'View my code', href: 'https://github.com/Atharvb03', bg: 'bg-gray-800' },
    { icon: Instagram, label: 'Instagram', value: 'Follow me', href: 'https://www.instagram.com/atharvb_3304/', bg: 'bg-pink-500' },
  ];

  return (
    <section id="contact" className="section-padding" style={{ background: 'linear-gradient(160deg, hsl(217 91% 60% / 0.04) 0%, hsl(220 30% 98%) 50%, hsl(142 76% 36% / 0.03) 100%)' }}>
      <div className="container-width">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Let's Talk
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT — Send a Message form */}
          <div className="tech-card p-8 hover:shadow-strong transition-all duration-300 bg-primary/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2.5 rounded-xl">
                <Send className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                  <Input name="firstName" value={formData.firstName} onChange={handleInputChange}
                    placeholder="Atharv" required className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                  <Input name="lastName" value={formData.lastName} onChange={handleInputChange}
                    placeholder="Bendkhale" required className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <Input name="email" type="email" value={formData.email} onChange={handleInputChange}
                  placeholder="john.doe@example.com" required className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                <Input name="subject" value={formData.subject} onChange={handleInputChange}
                  placeholder="Let's discuss an opportunity" required className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <Textarea name="message" rows={5} value={formData.message} onChange={handleInputChange}
                  placeholder="Tell me about your project or opportunity..." required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none" />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full hero-button gap-2">
                {isSubmitting ? (
                  <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground" />Sending...</>
                ) : (
                  <><Send className="h-4 w-4" />Send Message</>
                )}
              </Button>
            </form>
          </div>

          {/* RIGHT — Let's Connect */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation. Feel free to reach out through any of the following channels.
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between p-4 tech-card hover:-translate-y-0.5 hover:shadow-md hover:border-primary/50 transition-all duration-300 group border-2 border-transparent"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${item.bg} p-2.5 rounded-xl`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">›</span>
                </a>
              ))}
            </div>

            {/* Based in India */}
            <div className="tech-card p-5 flex items-start gap-4">
              <div className="bg-yellow-500 p-2.5 rounded-xl flex-shrink-0">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Based in India</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Currently pursuing B.E. in Computer Science at Gharda Institute of Technology.
                  Open to remote opportunities and willing to relocate for the right position.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
