import { ExternalLink, Github, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const mainProject = {
  title: 'Project Review Platform',
  badge: 'Deployed at College',
  category: 'Full-Stack Web Application',
  status: 'Completed',
  description:
    'A comprehensive multi-role academic project review system built with modern web technologies and deployed for institutional use. Features secure authentication, cloud file storage, and structured mentor-student collaboration.',
  tech: ['React.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express.js', 'AWS S3 & IAM', 'JWT', 'Vercel', 'Railway'],
  features: [
    'Secure user authentication and role-based access control (Admin, Reviewer, User)',
    'Project upload and management with descriptions, tech stack, and media files',
    'Review and rating mechanism with structured feedback and average score calculation',
    'Interactive comment and discussion system for project-level collaboration',
    'Advanced search, filter, and sorting for efficient project discovery',
    '+ 5 more features...',
  ],
  github: 'https://github.com/Atharvb03',
};

const otherProjects = [
  {
    title: 'HireLens',
    category: 'AI-based Recruitment Platform',
    status: 'Completed with ongoing improvements',
    description:
      'HireLens is an AI-powered recruitment platform designed to automate and optimize the hiring process by analyzing resumes, matching candidates with job roles, and assisting recruiters in making faster and more accurate hiring decisions. Reduces manual screening effort and improves candidate-job matching using NLP and intelligent filtering.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'NLP', 'REST APIs', 'Git & GitHub'],
    features: [
      'Resume Parsing & Analysis – Automatically extracts skills, education, and experience from resumes',
      'AI-Based Candidate Matching – Matches candidates with job descriptions using NLP similarity scoring',
      'Smart Shortlisting – Filters top candidates based on relevance scores',
      'Recruiter Dashboard – Enables viewing, managing, and comparing applicants in one interface',
      '+ 4 more features...',
    ],
    github: 'https://github.com/Atharvb03/HireLens',
  },
  {
    title: 'EcoCycleHUB',
    category: 'AI + Sustainability + Full-Stack Web Application',
    status: 'Completed with ongoing improvements',
    description:
      'EcoCycleHub is an AI-powered sustainability platform designed to promote efficient waste management and recycling. It connects users, recyclers, and organizations through a smart digital ecosystem that enables waste tracking, recycling recommendations, and environmental impact analysis.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'REST APIs', 'GitHub'],
    features: [
      'Smart Waste Classification – AI model classifies waste into recyclable, organic, and hazardous categories',
      'AI-Based Recycling Recommendations – Suggests optimal recycling methods based on waste type',
      'User Dashboard – Displays activity, recycling contributions, and environmental impact',
      'Recycler/Collector Integration – Connects users with nearby recyclers and waste collectors',
      'Waste Pickup Scheduling – Enables users to schedule doorstep waste collection',
      '+ 4 more features...',
    ],
    github: 'https://github.com/Atharvb03/EcoCycleHub-Old',
  },
];

const statusColor = (status: string) => {
  if (status === 'Completed') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
  if (status === 'In Development') return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
  if (status === 'Completed with ongoing improvements') return 'bg-teal-100 text-teal-700 border border-teal-200 dark:bg-teal-900/30 dark:text-teal-400';
  return 'bg-secondary text-muted-foreground';
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.05) 0%, hsl(142 76% 36% / 0.04) 100%)' }}>
      <div className="container-width">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Portfolio
          </div>
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, AI/ML, and software engineering
          </p>
        </div>

        {/* Main featured project */}
        <div className="tech-card p-8 mb-8 border-2 border-primary/40 hover:border-primary transition-all duration-300 group bg-primary/[0.03]">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">{mainProject.title}</h3>
              <span className="bg-amber-100 text-amber-700 border border-amber-300 text-xs font-bold px-3 py-1 rounded-full dark:bg-amber-900/20 dark:text-amber-400">
                🏆 {mainProject.badge}
              </span>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor(mainProject.status)}`}>
              {mainProject.status}
            </span>
          </div>

          <span className="inline-block text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300 px-3 py-1 rounded-md mb-4 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600">
            {mainProject.category}
          </span>

          <p className="text-muted-foreground leading-relaxed mb-6">{mainProject.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {mainProject.tech.map((t) => (
                  <span key={t} className="bg-blue-100 text-blue-600 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
              <ul className="space-y-1">
                {mainProject.features.slice(0, -1).map((f, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-lg leading-5">•</span>{f}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-2 pl-1">{mainProject.features[mainProject.features.length - 1]}</p>
            </div>
          </div>

          {/* Action bar */}
          <div className="flex gap-3 pt-2 border-t border-border">
            <Button className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Eye className="h-4 w-4" /> View Details
            </Button>
            <Button size="icon" variant="outline" onClick={() => window.open(mainProject.github, '_blank')}>
              <Github className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" disabled>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Two smaller project cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {otherProjects.map((project, index) => (
            <div key={index} className="tech-card p-6 flex flex-col hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 border-2 transition-all duration-300 group">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${statusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {project.category !== 'TBD' && (
                <span className="inline-block text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300 px-3 py-1 rounded-md mb-3 w-fit dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600">
                  {project.category}
                </span>
              )}

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              {project.tech.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-blue-100 text-blue-600 border border-blue-200 px-2.5 py-0.5 rounded-full text-xs font-semibold dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0 text-base leading-4">•</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-3 pt-3 border-t border-border mt-auto">
                <Button className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm" disabled={project.title === 'Coming Soon'}>
                  <Eye className="h-4 w-4" /> View Details
                </Button>
                <Button size="icon" variant="outline" onClick={() => window.open(project.github, '_blank')}>
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" disabled>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <Button
            className="hero-button group gap-2"
            onClick={() => window.open('https://github.com/Atharvb03?tab=repositories', '_blank')}
          >
            <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
