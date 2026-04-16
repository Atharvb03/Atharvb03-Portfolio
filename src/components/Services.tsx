import { Code2, MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Life Relier Infosoft Pvt. Ltd.',
    duration: 'Dec 2025 – Mar 2026',
    type: 'Internship',
    location: 'On-Site',
    status: 'Completed',
    description:
      'Completed a 3-month Software Developer Internship at LifeRelier Infosoft Pvt. Ltd., working on .NET web development and MS SQL with hands-on experience in stored procedures, layered architecture (BAL), and software testing.',
    highlights: [
      'Developed and implemented MS SQL Stored Procedures for efficient and optimized database operations',
      'Refactored application logic by introducing a Business Access Layer (BAL), improving code structure and maintainability',
      'Contributed to .NET-based web application development, focusing on backend functionality',
      'Performed website testing and validation to identify bugs and ensure smooth performance and reliability',
    ],
    tech: ['.NET', 'C#', 'MS SQL'],
    certificateUrl: 'https://drive.google.com/file/d/1ti01kzHcbD53qqu04ADi3E9cnbUW13vT/view?usp=drive_link',
    offerLetterUrl: 'https://drive.google.com/file/d/1qssX9LiC_75sc_fCct5sM7NwfRcEC4rh/view?usp=drive_link',
  },
  {
    title: 'Data Science Intern',
    company: 'Capabl.',
    duration: '6 April, 2025 – 6 May, 2025',
    type: 'Virtual Internship',
    location: 'Remote',
    status: 'Completed',
    description:
      'Worked as a Data Science Intern where I applied data analysis and machine learning techniques to solve a real-world problem. The internship involved data preprocessing, exploratory data analysis, model building, and performance evaluation using Python-based tools.',
    highlights: [
      'Built a complete end-to-end data science project from data collection to model deployment',
      'Performed data cleaning, feature engineering, and visualization for insights',
      'Implemented machine learning algorithms for prediction/classification',
      'Gained hands-on experience with real-world datasets and problem-solving',
      'Improved understanding of the data science lifecycle',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    certificateUrl: 'https://drive.google.com/file/d/1WFpXYEZmqWeByD1MY6VY5GHCL24S9RpH/view?usp=drive_link',
    offerLetterUrl: '',
  },
];

const statusColor = (status: string) =>
  status === 'Completed'
    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';

const Experience = () => {
  return (
    <section id="services" className="section-padding" style={{ background: 'linear-gradient(135deg, hsl(142 76% 36% / 0.04) 0%, hsl(217 91% 60% / 0.05) 100%)' }}>
      <div className="container-width">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Work History
          </div>
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experiences and internships that have shaped my technical journey
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <div key={i} className="tech-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-5">

                {/* Icon */}
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-xl">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <div className="flex gap-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor(exp.status)}`}>
                        {exp.status}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-primary font-medium mb-2">{exp.company}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {exp.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary leading-5 mt-0.5 flex-shrink-0 text-lg">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="bg-blue-100 text-blue-600 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-2 border-t border-border">
                    {exp.offerLetterUrl && (
                      <a href={exp.offerLetterUrl} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium flex items-center gap-1">
                        <ExternalLink className="h-3.5 w-3.5" /> View Offer Letter
                      </a>
                    )}
                    {exp.certificateUrl && (
                      <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium flex items-center gap-1">
                        <ExternalLink className="h-3.5 w-3.5" /> View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-10 rounded-2xl text-center border border-primary/20 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.08), hsl(142 76% 36% / 0.06))' }}>
          <div className="absolute inset-0 bg-gradient-primary opacity-[0.03] rounded-2xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Open to Work
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-3">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-button"
            >
              Let's Work Together
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
