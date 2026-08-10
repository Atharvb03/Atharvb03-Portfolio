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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative w-full px-8 lg:px-20 xl:px-28 z-10">

        {/* Welcome badge with animation */}
        <div className="mb-6 animate-fade-in">
          <span className="group text-xs border border-primary/30 rounded-full px-5 py-2 bg-primary/5 backdrop-blur-sm text-foreground tracking-wider uppercase inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Welcome to my Portfolio
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* LEFT — content, 55% */}
          <div className="w-full lg:w-[55%] space-y-6 fade-in-up animate">

            {/* Name with enhanced styling */}
            <div className="leading-none space-y-2">
              <h1 className="text-6xl xl:text-7xl font-bold animate-fade-in-up text-foreground" style={{ animationDelay: '0.1s' }}>
                Atharv
              </h1>
              <div className="text-6xl xl:text-7xl font-bold flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="gradient-text bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                  Bendkhale
                </span>
                <div className="relative">
                  <Code2 className="h-12 w-12 text-primary animate-float" />
                  <div className="absolute inset-0 h-12 w-12 bg-primary/20 rounded-lg blur-xl animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Animated role with enhanced styling */}
            <div className="relative inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative text-2xl font-semibold text-foreground flex items-center gap-2 h-10 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{displayed}</span>
                <span className="inline-block w-0.5 h-6 bg-gradient-to-b from-primary to-accent animate-pulse"></span>
              </div>
            </div>

            {/* Description with fade-in */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Motivated Computer Science student passionate about developing intelligent systems and solving real-world problems using AI technologies.
            </p>

            {/* Buttons with staggered animations */}
            <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button
                onClick={() => scrollToSection('projects')}
                className="hero-button gap-2 text-base px-8 py-3 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                View Projects
              </Button>
              <Button
                className="gap-2 text-base px-6 py-3 h-auto border-2 border-foreground/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-foreground/5 hover:border-foreground/40 transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
                variant="outline"
                onClick={() => window.open('https://drive.google.com/file/d/1LyAnIgppYknmgHzj9RMSUQ4PF_wVHHld/view?usp=sharing', '_blank')}
              >
                <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="gap-2 text-base px-6 py-3 h-auto border-2 border-primary/30 bg-primary/10 backdrop-blur-sm text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Skill tags with staggered animations */}
            <div className="flex flex-wrap gap-2.5 pt-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {tags.map((tag, index) => (
                <span 
                  key={tag} 
                  className="group text-sm px-5 py-2 rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-foreground font-semibold hover:border-primary hover:bg-primary/10 hover:shadow-lg transition-all duration-300 cursor-default hover:scale-110 hover:-translate-y-1"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <span className="relative">
                    {tag}
                    <span className="absolute -inset-1 bg-primary/0 group-hover:bg-primary/20 blur-sm rounded-full transition-all duration-300"></span>
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — photo, 45% */}
          <div className="w-full lg:w-[45%] flex justify-center mt-12 lg:mt-0 fade-in-up animate" style={{ animationDelay: '0.3s' }}>
            <div className="relative flex items-center justify-center" style={{ width: 500, height: 500 }}>

              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse shadow-lg" style={{ animationDuration: '3s' }}></div>

              {/* Middle rotating gradient ring */}
              <div 
                className="absolute inset-[14px] rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-sm animate-spin"
                style={{ animationDuration: '8s' }}
              ></div>

              {/* Inner spinning dashed ring */}
              <div
                className="absolute inset-[28px] rounded-full border-[3px] border-dashed border-primary/60 animate-spin"
                style={{ animationDuration: '14s' }}
              />

              {/* Multi-layer glow effect */}
              <div className="absolute inset-[60px] bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute inset-[80px] bg-primary rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDuration: '5s' }}></div>

              {/* Photo with enhanced effects */}
              <div className="relative bg-gradient-to-br from-primary via-accent to-primary p-[2px] rounded-full shadow-2xl z-10 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] cursor-pointer group">
                <div className="bg-background rounded-full p-1">
                  <img
                    src={profilePhoto}
                    alt="Atharv Bendkhale"
                    className="w-96 h-96 rounded-full object-cover object-top transition-all duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Floating icon bubbles with enhanced animations */}
              <div className="absolute top-8 left-0 z-20 bg-background/80 backdrop-blur-md border-2 border-primary/30 p-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-float" style={{ animationDuration: '3s' }}>
                <Code2 className="h-7 w-7 text-primary drop-shadow-lg" />
              </div>

              <div className="absolute bottom-8 left-0 z-20 bg-background/80 backdrop-blur-md border-2 border-accent/30 p-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-float" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                <Laptop className="h-7 w-7 text-accent drop-shadow-lg" />
              </div>

              <div className="absolute top-8 right-0 z-20 bg-background/80 backdrop-blur-md border-2 border-primary/30 p-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-float" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                <Rocket className="h-7 w-7 text-primary drop-shadow-lg" />
              </div>

              {/* Orbiting particles */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-lg"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent rounded-full shadow-lg"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
