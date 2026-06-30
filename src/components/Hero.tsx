import { ArrowUpRight, Download, Mail, Code2, Laptop, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/atharv-portfolio.jpg';
import { useEffect, useState } from 'react';

const roles = ['AI & ML Enthusiast', 'Python Developer', 'Full-Stack Developer'];
const tags = ['Python', 'React', 'AI/ML', 'MongoDB', 'TensorFlow'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="w-full px-8 lg:px-20 xl:px-28">

        {/* Welcome badge */}
        <div className="mb-2">
          <span className="text-xs border border-border rounded-full px-4 py-1.5 text-muted-foreground tracking-widest uppercase inline-flex items-center gap-2">
            <span className="text-primary">✦</span> Welcome to my Portfolio
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center">

          {/* LEFT — content, 55% */}
          <div className="w-full lg:w-[55%] space-y-5 fade-in-up animate">

            {/* Name */}
            <div className="leading-none">
              <h1 className="text-6xl xl:text-7xl font-bold">Atharv</h1>
              <div className="text-6xl xl:text-7xl font-bold flex items-center gap-3 mt-1">
                <span className="gradient-text">Bendkhale</span>
                <Code2 className="h-12 w-12 text-muted-foreground/60" />
              </div>
            </div>

            {/* Animated role */}
            <div className="text-2xl font-semibold text-foreground flex items-center gap-1 h-9">
              <span>{displayed}</span>
              <span className="inline-block w-0.5 h-6 bg-primary animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Motivated Computer Science student passionate about developing intelligent systems and solving real-world problems using AI technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                onClick={() => scrollToSection('projects')}
                className="hero-button gap-2 text-base px-10 py-3 h-auto"
              >
                <ArrowUpRight className="h-5 w-5" />
                View Projects
              </Button>
              <Button
                className="gap-2 text-base px-6 py-3 h-auto border-2 border-foreground/30 bg-transparent text-foreground hover:bg-foreground/5 transition-all duration-300 group"
                variant="outline"
                onClick={() => window.open('https://drive.google.com/file/d/1LyAnIgppYknmgHzj9RMSUQ4PF_wVHHld/view?usp=sharing', '_blank')}
              >
                <Download className="h-5 w-5 group-hover:translate-y-1 group-hover:animate-bounce transition-transform duration-300" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="gap-2 text-base px-6 py-3 h-auto border-2 border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag) => (
                <span key={tag} className="text-sm px-4 py-1.5 rounded-full border border-border bg-transparent text-foreground font-medium hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default">{tag}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — photo, 45% */}
          <div className="w-full lg:w-[45%] flex justify-center mt-12 lg:mt-0 fade-in-up animate">
            <div className="relative flex items-center justify-center" style={{ width: 500, height: 500 }}>

              {/* Outer still ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />

              {/* Inner spinning dashed ring — close to photo */}
              <div
                className="absolute inset-[28px] rounded-full border-[3px] border-dashed border-primary/60 animate-spin"
                style={{ animationDuration: '14s' }}
              />

              {/* Glow */}
              <div className="absolute inset-[60px] bg-gradient-primary rounded-full blur-2xl opacity-20" />

              {/* Photo */}
              <div className="relative bg-gradient-card p-1.5 rounded-full shadow-strong z-10 transition-all duration-500 hover:scale-[1.04] hover:shadow-glow cursor-pointer">
                <img
                  src={profilePhoto}
                  alt="Atharv Bendkhale"
                  className="w-96 h-96 rounded-full object-cover object-top shadow-glow transition-all duration-500"
                />
              </div>

              {/* Code icon bubble — top left */}
              <div className="absolute top-10 left-2 z-20 bg-card border border-border p-3 rounded-xl shadow-medium animate-bounce" style={{ animationDuration: '2s' }}>
                <Code2 className="h-6 w-6 text-primary" />
              </div>

              {/* Laptop icon — bottom left */}
              <div className="absolute bottom-10 left-2 z-20 bg-card border border-border p-3 rounded-xl shadow-medium animate-bounce" style={{ animationDuration: '2.5s' }}>
                <Laptop className="h-6 w-6 text-accent" />
              </div>

              {/* Rocket icon — top right */}
              <div className="absolute top-10 right-2 z-20 bg-card border border-border p-3 rounded-xl shadow-medium animate-bounce" style={{ animationDuration: '3s' }}>
                <Rocket className="h-6 w-6 text-primary" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
