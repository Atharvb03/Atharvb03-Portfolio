import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: 'B.E. in CSE-AIML',
      institution: 'Gharda Institute Of Technology',
      period: 'Expected 2026',
      score: 'CGPA: 8.22 / 10',
      icon: '🎓',
      badge: 'Current',
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'Dnyandeep Vidya Mandir College',
      period: 'Completed',
      score: '74.50%',
      icon: '📚',
      badge: null,
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'L.T.T English Medium School',
      period: 'Completed',
      score: '88.80%',
      icon: '🏫',
      badge: null,
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'linear-gradient(160deg, hsl(220 30% 98%) 0%, hsl(217 91% 60% / 0.04) 100%)' }}>
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Who I Am
              </div>
              <h2 className="text-4xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Motivated Computer Science student with a strong foundation in{' '}
                <span className="text-primary font-semibold">Artificial Intelligence</span> and{' '}
                <span className="text-accent font-semibold">Python programming</span>. 
                Deeply interested in developing intelligent systems and solving real-world problems 
                using AI technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Skilled in modern web development tools including{' '}
                <span className="text-primary font-semibold">HTML, CSS, JavaScript, React</span>, and{' '}
                <span className="text-accent font-semibold">MongoDB</span>. Currently focused on 
                enhancing expertise in AI algorithms, data-driven development, and Python-based 
                applications to build innovative and impactful solutions.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education Timeline
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="tech-card border-l-4 border-l-primary hover:border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {item.degree}
                          </h4>
                          {item.badge && (
                            <span className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium mb-2">
                          {item.institution}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.period}
                          </div>
                          <span className="text-primary font-semibold">{item.score}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;