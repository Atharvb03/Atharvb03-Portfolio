import { Globe, Code2, Brain, Wrench } from 'lucide-react';

const skillGroups = [
  {
    title: 'Web Development',
    icon: Globe,
    iconBg: 'bg-primary',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    iconBg: 'bg-accent',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C', level: 70 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    iconBg: 'bg-violet-600',
    skills: [
      { name: 'TensorFlow', level: 70 },
      { name: 'OpenCV', level: 75 },
      { name: 'Computer Vision', level: 70 },
      { name: 'Data Analysis', level: 75 },
      { name: 'Machine Learning', level: 65 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    iconBg: 'bg-orange-500',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'MongoDB Atlas', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'AWS S3', level: 70 },
    ],
  },
];

const additionalTech = [
  'Express.js', 'JWT Authentication', 'Tailwind CSS', 'REST APIs',
  'Vercel', 'Railway', 'NumPy', 'Pandas', 'Multer', 'Dynamic Routing',
];

const certifications = [
  { title: 'Python Zero-to-Hero (Intermediate Level)', issuer: 'Udemy', date: 'Oct 28, 2025', link: 'https://drive.google.com/file/d/1H3Om2Exl6XYW1aFBQJPpPL_tR9hyV4i5/view?usp=drive_link' },
  { title: 'AI for Students: Build Your Own Generative AI Model', issuer: 'NxtWave', date: 'August 6, 2025', link: 'https://drive.google.com/file/d/1oSdtes8nP9D-UxqTreCXltD2bIsqHizR/view?usp=drive_link' },
  { title: 'Machine Learning with Python', issuer: 'IBM', date: 'June 29, 2025', link: 'https://drive.google.com/file/d/1OMt_gQOMkL7n4PaWL9SUi-e86TffyRFU/view?usp=drive_link' },
  { title: 'Python Zero-to-Hero (Beginner Level)', issuer: 'Udemy', date: 'April 5, 2025', link: 'https://drive.google.com/file/d/15C4ZZTeOgK2zskBzPw7AgKOINsCzDlKs/view?usp=drive_link' },
  { title: 'AWS Academy Graduate — Cloud Foundations', issuer: 'AWS Academy', date: 'March 25, 2025', link: 'https://www.credly.com/badges/8a62530c-b9f7-425b-9ce2-2910649fe71c/public_url' },
  { title: 'Introduction to Artificial Intelligence', issuer: 'IBM | Infosys', date: 'August 8, 2024', link: 'https://drive.google.com/file/d/1KJGKJp7fFlk3cH9P2BD43A8Ma8Zkg4lU/view?usp=drive_link' },
  { title: 'Data Science / ML & AI', issuer: 'Capabl.', date: 'May 06, 2024', link: 'https://drive.google.com/file/d/1Bn5o3Itb3at9XBHujPzF0qd5IvDAtsyi/view?usp=drive_link' },
  { title: 'The Joy of Computing using Python', issuer: 'NPTEL (IIT Madras)', date: 'Jan–Apr 2024', link: 'https://drive.google.com/file/d/1qE_45s4UseExkBoc2rZzFkXRx0OoezIX/view?usp=drive_link' },
  { title: 'Python Programming', issuer: 'Capabl.', date: 'February 27, 2024', link: 'https://drive.google.com/file/d/1wlZU46RgkxwNuK4WIsSEnqCRxillivgV/view?usp=drive_link' },
];

const tagColors = [
  'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-500 hover:text-white',
  'bg-green-100 text-green-700 border-green-200 hover:bg-green-500 hover:text-white',
  'bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-500 hover:text-white',
  'bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-500 hover:text-white',
  'bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-500 hover:text-white',
  'bg-cyan-100 text-cyan-700 border-cyan-200 hover:bg-cyan-500 hover:text-white',
  'bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-500 hover:text-white',
  'bg-red-100 text-red-700 border-red-200 hover:bg-red-500 hover:text-white',
];

const barColor = (level: number) => {
  if (level >= 85) return 'bg-accent';
  if (level >= 70) return 'bg-primary';
  return 'bg-yellow-400';
};

const badgeColor = (level: number) => {
  if (level >= 85) return 'bg-accent';
  if (level >= 70) return 'bg-primary';
  return 'bg-yellow-400';
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding" style={{ background: 'linear-gradient(160deg, hsl(142 76% 36% / 0.03) 0%, hsl(220 30% 98%) 60%, hsl(217 91% 60% / 0.03) 100%)' }}>
      <div className="container-width">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Technical Skills
          </div>
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Main Skills Grid - Bento Box Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <div 
              key={gi} 
              className="tech-card p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${
                  gi === 0 ? 'rgba(34, 197, 94, 0.05)' : 
                  gi === 1 ? 'rgba(59, 130, 246, 0.05)' : 
                  gi === 2 ? 'rgba(139, 92, 246, 0.05)' : 
                  'rgba(249, 115, 22, 0.05)'
                } 0%, transparent 100%)`
              }}
            >
              {/* Decorative blur effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${group.iconBg} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity`}></div>
              
              {/* Icon */}
              <div className={`${group.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <group.icon className="h-6 w-6 text-white" />
              </div>

              {/* Category Title */}
              <h3 className="text-lg font-bold text-foreground mb-6">{group.title}</h3>

              {/* Skills List with Modern Design */}
              <div className="space-y-3">
                {group.skills.map((skill, si) => (
                  <div key={si} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${barColor(skill.level)} rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-muted-foreground min-w-[32px] text-right">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner decoration */}
              <div className={`absolute bottom-0 right-0 w-20 h-20 ${group.iconBg} opacity-5 rounded-tl-full`}></div>
            </div>
          ))}
        </div>

        {/* Additional Technologies - Glassmorphism Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Additional Technologies & Frameworks</h3>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto"></div>
          </div>
          
          <div className="tech-card p-8 backdrop-blur-sm" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalTech.map((tech, i) => (
                <span
                  key={tech}
                  className={`text-sm px-5 py-2.5 rounded-lg border-2 font-semibold cursor-default transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-md ${tagColors[i % tagColors.length]}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications with Timeline Style */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-amber-200 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Achievements
            </div>
            <h2 className="text-4xl font-bold mb-4">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">A showcase of my professional certifications and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="tech-card p-6 flex flex-col gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-l-4 border-primary"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 -z-10"></div>
                
                {/* Certificate Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {i + 1}
                </div>

                <h4 className="text-base font-bold text-foreground leading-snug group-hover:gradient-text transition-all duration-300 pr-8">
                  {cert.title}
                </h4>
                
                <div className="flex items-center gap-2">
                  <div className="h-8 w-1 bg-gradient-primary rounded-full"></div>
                  <span className="inline-block bg-secondary text-muted-foreground text-xs px-3 py-1.5 rounded-lg font-medium">
                    {cert.issuer}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground font-medium">{cert.date}</p>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-accent font-semibold mt-auto flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  View Certificate 
                  <span className="text-lg">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
