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
        <div className="text-center mb-12">
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

        {/* 2x2 skill cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="tech-card p-6">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`${group.iconBg} p-2 rounded-lg`}>
                  <group.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{group.title}</h3>
              </div>

              {/* Skills with progress bars */}
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className={`text-xs text-white font-semibold px-2 py-0.5 rounded-full ${badgeColor(skill.level)}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-1.5">
                      <div
                        className={`${barColor(skill.level)} h-1.5 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="text-center mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">Additional Technologies & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTech.map((tech, i) => (
              <span
                key={tech}
                className={`text-sm px-4 py-1.5 rounded-full border font-medium cursor-default transition-all duration-300 ${tagColors[i % tagColors.length]}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-10">
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

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="tech-card p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                <h4 className="text-base font-bold text-foreground leading-snug group-hover:gradient-text transition-all duration-300">{cert.title}</h4>
                <span className="inline-block bg-secondary text-muted-foreground text-xs px-3 py-1 rounded-full w-fit">
                  {cert.issuer}
                </span>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline font-medium mt-auto"
                >
                  View Certificate →
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
