import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

// Project Review Platform screenshots
import prpLogin from '@/assets/projects/Login.png';
import prpH from '@/assets/projects/H.png';
import prpCoordinator from '@/assets/projects/Coordinator.png';
import prpCoordinatorAssignment from '@/assets/projects/CoOrdinator Assignment.png';
import prpHOD from '@/assets/projects/HOD.png';
import prpHODAllProjects from '@/assets/projects/HOD All Projects.png';
import prpMenteeDashboard from '@/assets/projects/Mentee Dashboard.png';
import prpMenteeReviews from '@/assets/projects/Mentee Reviews.png';
import prpMenteeSubmission from '@/assets/projects/Mentee Submission.png';
import prpMentorDashboard from '@/assets/projects/Mentor Dashboard.png';
import prpMentorReviewing from '@/assets/projects/Mentor Reviewing.png';

const prpImages = [
  prpH, prpLogin, prpMentorDashboard, prpMentorReviewing,
  prpMenteeDashboard, prpMenteeReviews, prpMenteeSubmission,
  prpCoordinator, prpCoordinatorAssignment, prpHOD, prpHODAllProjects,
];

// HireLens screenshots
import hlHomepage from '@/assets/projects/hirelens/Homepage.png';
import hlHomepage2 from '@/assets/projects/hirelens/Homepage2.png';
import hlAbout from '@/assets/projects/hirelens/About.png';
import hlCandidateDashboard from '@/assets/projects/hirelens/Candidate Dashboard.png';
import hlProfile from '@/assets/projects/hirelens/Profile.png';
import hlProfile2 from '@/assets/projects/hirelens/Profile2.png';
import hlJobRecommendations from '@/assets/projects/hirelens/Job recommendations.png';
import hlMyApplications from '@/assets/projects/hirelens/My applications.png';
import hlRecruiterDashboard from '@/assets/projects/hirelens/Recruiter Dashboard.png';
import hlScreening from '@/assets/projects/hirelens/Screening.png';

const hlImages = [
  hlHomepage, hlHomepage2, hlAbout,
  hlCandidateDashboard, hlProfile, hlProfile2,
  hlJobRecommendations, hlMyApplications,
  hlRecruiterDashboard, hlScreening,
];

// EcoCycleHUB screenshots
import ecoHomepage from '@/assets/projects/ecocyclehub/Homepage.png';
import ecoAbout from '@/assets/projects/ecocyclehub/AboutUs.png';
import ecoContact from '@/assets/projects/ecocyclehub/Contact.png';
import ecoBuyersLogin from '@/assets/projects/ecocyclehub/Buyers Login.png';
import ecoBuyersPortal from '@/assets/projects/ecocyclehub/Buyers Portal.png';
import ecoBuyersPortal2 from '@/assets/projects/ecocyclehub/Buyers Portal2.png';
import ecoCart from '@/assets/projects/ecocyclehub/Cart.png';
import ecoDelivery from '@/assets/projects/ecocyclehub/delivery.png';
import ecoCenters from '@/assets/projects/ecocyclehub/Centers.png';
import ecoRepair from '@/assets/projects/ecocyclehub/Repair page.png';
import ecoRewards1 from '@/assets/projects/ecocyclehub/Rewards 1.png';
import ecoRewards2 from '@/assets/projects/ecocyclehub/Rewards 2.png';
import ecoRewards3 from '@/assets/projects/ecocyclehub/Rewards 3.png';
import ecoRewards4 from '@/assets/projects/ecocyclehub/Rewards 4.png';
import ecoMyProfile from '@/assets/projects/ecocyclehub/Myprofile.png';
import ecoSellerLogin from '@/assets/projects/ecocyclehub/Seller Login.png';
import ecoSellerSignup from '@/assets/projects/ecocyclehub/Seller Signup 1.png';
import ecoSeller1 from '@/assets/projects/ecocyclehub/Seller1.png';
import ecoSeller2 from '@/assets/projects/ecocyclehub/Seller2.png';
import ecoSeller3 from '@/assets/projects/ecocyclehub/Seller3.png';
import ecoAdminLogin from '@/assets/projects/ecocyclehub/Admin Login.png';
import ecoAdmin1 from '@/assets/projects/ecocyclehub/Admin1.png';
import ecoAdmin2 from '@/assets/projects/ecocyclehub/Admin2.png';
import ecoAdmin3 from '@/assets/projects/ecocyclehub/Admin3.png';
import ecoAdmin4 from '@/assets/projects/ecocyclehub/Admin4.png';

const ecoImages = [
  ecoHomepage, ecoAbout, ecoContact,
  ecoBuyersLogin, ecoBuyersPortal, ecoBuyersPortal2, ecoCart, ecoDelivery,
  ecoCenters, ecoRepair,
  ecoRewards1, ecoRewards2, ecoRewards3, ecoRewards4, ecoMyProfile,
  ecoSellerLogin, ecoSellerSignup, ecoSeller1, ecoSeller2, ecoSeller3,
  ecoAdminLogin, ecoAdmin1, ecoAdmin2, ecoAdmin3, ecoAdmin4,
];

// ElevateU screenshots
import euHomepage from '@/assets/projects/ElevateU/Homepage.png';
import euLogin from '@/assets/projects/ElevateU/Login.png';
import euCandidate from '@/assets/projects/ElevateU/Candidate page.png';
import euProfile from '@/assets/projects/ElevateU/Profile.png';
import euGame1 from '@/assets/projects/ElevateU/Game1.png';
import euGame1of2 from '@/assets/projects/ElevateU/Game1of2.png';
import euGame2 from '@/assets/projects/ElevateU/Game2.png';
import euGame2of4 from '@/assets/projects/ElevateU/Game2of4.png';
import euGame3 from '@/assets/projects/ElevateU/Game3.png';
import euGame3of4 from '@/assets/projects/ElevateU/Game3of4.png';
import euGame4of4 from '@/assets/projects/ElevateU/Game4of4.png';
import euResult1 from '@/assets/projects/ElevateU/Result1.png';
import euRoadmap from '@/assets/projects/ElevateU/Roadmap.png';

const euImages = [
  euHomepage, euLogin, euCandidate, euProfile,
  euGame1, euGame1of2, euGame2, euGame2of4,
  euGame3, euGame3of4, euGame4of4,
  euResult1, euRoadmap,
];

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
  github: 'https://github.com/Atharvb03/Project_Review_Platform',
  images: prpImages,
  liveUrl: 'https://project-review-platform.vercel.app/',
  problem: 'Academic project review is usually managed through scattered emails, manual mentor allocation, offline file sharing, and untracked feedback. This creates delays, duplicate work, unclear submission status, weak accountability, and difficulty for coordinators/HODs to monitor project progress across students, mentors, and academic years.',
  solution: 'The Project Review Platform centralizes the complete project lifecycle. Mentees create projects, coordinators approve them and assign mentors, mentors review phase-wise submissions, and HOD/coordinators monitor progress through dashboards. The system supports secure file uploads, deadlines, remarks, notifications, academic-year tracking, and archived project history.',
  fullFeatures: [
    'Role-based dashboards for Mentee, Mentor, Project Coordinator, and HOD',
    'Secure authentication with JWT login, Google OAuth, and email verification',
    'Invite-code protected registration for Mentor, Coordinator, and HOD roles',
    'Mentee project creation with duration, description, and group member details',
    'Project approval and rejection workflow by Project Coordinator',
    'Mentor assignment and reassignment for approved projects',
    'Bulk mentor assignment support using CSV-style data',
    'Phase-wise project submission workflow for 6-month and 1-year projects',
    'Secure AWS S3 file upload and download using pre-signed URLs',
    'Mentor review system with remarks for each submitted phase/file',
    'Deadline setting, one-time deadline extension, and late submission tracking',
    'Final project evaluation with automatic project completion and archiving',
    'Academic year/batch management with active-year filtering',
    'Real-time dashboard statistics for submissions, reviews, assignments, and completion status',
    'Email and in-app notifications for assignments, uploads, remarks, deadlines, and final results',
    'Archived project history — completed projects, uploaded files, mentor remarks, final evaluations, and academic-year records preserved for HOD/coordinator review',
  ],
  architecture: 'React + Vite frontend → Express.js REST API → MongoDB database for users/projects/assignments/files/notifications/batches → AWS S3 for project file storage using pre-signed upload/download URLs. Authentication uses JWT, bcrypt password hashing, Passport Google OAuth, email verification, and OTP-based password reset. The backend is modularized into routes for auth, files, mentee workflow, assignments, batches, coordinator/HOD operations, and dashboard analytics.',
};

const otherProjects = [
  {
    title: 'HireLens',
    category: 'AI-based Recruitment Platform',
    status: 'Completed with ongoing improvements',
    description:
      'HireLens automates the recruitment pipeline using AI. It parses resumes, scores candidate-job fit, recommends jobs, ranks applicants, generates AI interview sessions, evaluates interview performance, and updates hiring statuses automatically.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI/Gemini', 'Socket.io', 'Multer', 'Nodemailer', 'RapidAPI','Render','Vercel'],
    features: [
      'Resume Parsing & Analysis – Extracts skills, education, experience, and contact details',
      'AI-Based Candidate Matching – Matches resumes with job descriptions using AI scoring',
      'Smart Shortlisting – Auto-moves candidates to screening when match score is strong',
      'AI Interview Generation & Evaluation – Secure interview links with score and feedback',
      '+ 12 more features...',
    ],
    github: 'https://github.com/Atharvb03/HireLens',
    images: hlImages,
    liveUrl: 'https://hirelens0.vercel.app/',
    problem: 'Recruiters spend too much time manually reading resumes, comparing candidate skills with job requirements, shortlisting applicants, and coordinating interviews. Candidates also struggle to know which jobs match their profile and what skills they are missing.',
    solution: 'HireLens automates the recruitment pipeline using AI. It parses resumes, scores candidate-job fit, recommends jobs, ranks applicants, generates AI interview sessions, evaluates interview performance, and updates hiring statuses automatically. This helps recruiters shortlist faster and helps candidates understand their fit clearly.',
    fullFeatures: [
      'Resume Parsing & Analysis – Extracts skills, education, experience, projects, certifications, and contact details from resumes',
      'AI-Based Candidate Matching – Matches resumes/profiles with job descriptions using AI + fallback skill scoring',
      'Smart Shortlisting – Automatically moves candidates to screening when their match score is strong',
      'Candidate Registration & Login – Separate candidate authentication flow with protected dashboard access',
      'Recruiter/Admin Registration & Login – Separate recruiter/admin access for hiring workflow management',
      'Job Posting Management – Recruiters can create, view, and delete job postings',
      'Candidate Job Application System – Candidates can apply to jobs using uploaded resumes or saved profiles',
      'Profile-Based Resume Generation – Candidate profile data is converted into resume text for matching without file upload',
      'Skill Gap Analysis – Shows matched skills, missing skills, and suggestions to improve job fit',
      'AI Resume-to-Job Analysis – Candidates can check match score before applying',
      'Best Job Recommendations – Finds suitable jobs from external sources using candidate skills/profile',
      'Candidate Ranking System – Ranks applicants per job based on match score and interview score',
      'AI Interview Link Generation – Recruiters can generate secure interview links for selected candidates',
      'AI Interview Evaluation – Interview results include score, correct answers, feedback, and completion status',
      'Automated Hiring Status Updates – Status changes automatically: applied, screening, interviewed, hired, rejected',
      'Real-Time Recruiter Notifications – Socket.io notifies recruiters when interviews are completed or candidate status changes',
    ],
    architecture: 'React + Vite frontend → Express.js/Node.js API → MongoDB with Mongoose models → AI services using OpenAI/Gemini → Multer + PDF/DOCX parsing for resume uploads → Socket.io for real-time notifications → Nodemailer for email/status updates → External JSearch/RapidAPI integration for job recommendations.',
  },
  {
    title: 'EcoCycleHUB',
    category: 'AI + Sustainability + Full-Stack Web Application',
    status: 'Completed with ongoing improvements',
    description:
      'EcoCycleHub is an AI-powered sustainability platform designed to promote efficient waste management and recycling. Connects users, recyclers, and organizations through a smart digital ecosystem that enables waste tracking, recycling recommendations, and environmental impact analysis.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'Cloudinary', 'Stripe', 'Razorpay'],
    features: [
      'AI-Based Resale Price Prediction using ML with rule-based fallback',
      'Recycle & Repair Center Finder using location and distance',
      'Circular Marketplace for buying reused/refurbished clothing and electronics',
      'Eco Rewards System — earn points from login, orders, and recycling activities',
      'Admin Dashboard for managing products, users, orders, seller KYC, and rewards',
      '+ 10 more features...',
    ],
    github: 'https://github.com/Atharvb03/EcoCycleHub-Old',
    images: ecoImages,
    liveUrl: 'https://ecocyclehub-green.vercel.app/',
    problem: 'Waste, unused products, and second-hand goods are often not managed properly. Users do not know where to recycle/repair items, how much old items are worth, or how their sustainable actions create impact. Buyers need a trusted way to purchase reused products, and sellers need a verified platform to list them.',
    solution: 'EcoCycleHUB solves this by combining recycling support, repair discovery, resale commerce, and reward-based motivation in one platform. Users can find centers, submit items for recycle/repair, get estimated resale value, earn eco-points, buy reused products, track orders, and receive badges/certificates for sustainable activity.',
    fullFeatures: [
      'AI-Based Resale Price Prediction — predicts item value for electronics and fashion using ML, with rule-based fallback',
      'Recycle & Repair Center Finder — shows nearby recycling/repair centers using location, distance, and fallback center data',
      'Recycle/Repair Submission System — users submit products with condition, center, description, and estimated price',
      'Eco Rewards System — users earn points from login, orders, and recycling activities',
      'Leaderboard — ranks users by eco-points and shows their contribution breakdown',
      'Bronze/Silver/Gold Levels — automatic user level calculation based on total points',
      'Downloadable Eco Badges — users can download achievement badges as PDF',
      'Downloadable Eco Certificates — Gold-level users can generate and download certificates',
      'Circular Marketplace — users can buy reused/refurbished clothing and electronics',
      'Advanced Buyer Portal — search, category filters, condition filters, price range, wishlist, sorting, and verified-seller filter',
      'Cart and Checkout System — add products to cart and place orders',
      'Multiple Payment Options — supports COD, Stripe, and Razorpay',
      'Order Tracking — users, sellers, and admins can view/manage orders and statuses',
      'Verified Seller Portal — sellers register, verify mobile OTP, upload profile/ID documents, and list products',
      'Admin Dashboard — admin manages products, users, orders, seller KYC approvals, rewards, and recycle submissions',
    ],
    architecture: 'React + Vite frontend → Express.js REST API → MongoDB/Mongoose database + Cloudinary for file/image uploads → FastAPI ML service for price prediction → Stripe/Razorpay for payments. Admin, seller, buyer, and user-facing portals are all connected through the same backend API.',
  },
  {
    title: 'ElevateU',
    category: 'EdTech / AI Career Guidance',
    status: 'In Development',
    description:
      'A career discovery platform that turns assessment into interactive games. As students play, the system records performance and behavioral patterns, converts them into cognitive scores, and suggests suitable career paths with personalized roadmaps.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Recharts', 'Supabase', 'Jest'],
    features: [
      'Game-based career discovery through interactive skill challenges',
      'Four core assessment games: Logic Lab, Smart Operations Lab, Constraint Crafter, and Fest Stall Simulator',
      'Cognitive profile generation across 8 dimensions including reasoning, creativity, and decision making',
      'Career recommendation engine with primary match % and alternative suggestions',
      'Personalized roadmap with milestones, skills, courses, and networking guidance',
    ],
    github: 'https://github.com/Atharvb03/ElevateU',
    images: euImages,
    problem: 'Students often choose careers based on marks, peer pressure, family expectations, or generic questionnaires. Traditional career tests depend on what students say about themselves, which can be biased or unclear. ElevateU solves the problem of inaccurate and boring career guidance by observing how students actually think, decide, solve, react, and manage tasks.',
    solution: 'ElevateU turns career assessment into interactive games. As students play, the system records performance and behavioral patterns, converts them into cognitive scores, and uses those scores to suggest suitable career paths. After all games are completed, the platform generates career recommendations and a step-by-step roadmap with skills, milestones, resources, courses, and networking guidance.',
    fullFeatures: [
      'Game-based career discovery through interactive skill challenges',
      'Four core assessment games: Logic Lab, Smart Operations Lab, Constraint Crafter, and Fest Stall Simulator',
      'Behavioral interaction tracking — scores, timing, choices, and completion patterns during gameplay',
      'Cognitive profile generation across logical reasoning, pattern recognition, problem solving, attention to detail, multitasking, decision making, creativity, and analytical thinking',
      'Secure user authentication using Supabase Auth',
      'Personalized student dashboard with game progress tracking',
      'Game completion gate that unlocks recommendations only after all required games are completed',
      'Automatic storage of game results and behavioral data in Supabase',
      'Career recommendation engine based on cognitive score matching',
      'Primary career match with percentage-based compatibility',
      'Alternative career suggestions with descriptions',
      'Strengths and areas-for-development analysis',
      'Personalized career roadmap generation after recommendations',
      'Roadmap phases with milestones, skills, learning resources, courses, and networking suggestions',
      'Results dashboard with cognitive radar chart and domain alignment visualization',
      'Privacy-focused architecture using user-owned data, row-level security, and protected routes',
    ],
    architecture: 'Next.js frontend + React UI → Next.js API routes → Supabase Auth + Supabase PostgreSQL database → Recommendation and roadmap services → Results dashboard with cognitive radar chart and domain alignment visualization.',
  },
  {
    title: 'CG Header File',
    category: 'Computer Graphics / C-C++ Academic Mini Project',
    status: 'Completed',
    description:
      'A reusable custom C/C++ header file implementing core Computer Graphics algorithms using the BGI graphics.h library. Built as an academic mini project to demonstrate fundamental CG concepts through modular, reusable code.',
    tech: ['C', 'C++', 'BGI graphics.h', 'stdio.h', 'math.h', 'conio.h'],
    features: [
      'DDA, Bresenham, and Midpoint line drawing algorithms',
      'Circle and ellipse drawing algorithms',
      'Boundary fill and flood fill algorithms',
      '2D transformations: translation, rotation, scaling, reflection, shearing',
      'Cohen-Sutherland and Liang-Barsky line clipping algorithms',
    ],
    github: 'https://github.com/Atharvb03/CG-Header-File',
    images: [],
    problem: 'Implementing Computer Graphics algorithms from scratch for every lab program is time-consuming and error-prone. Students repeatedly write the same DDA, Bresenham, or transformation code across multiple programs without reusability or consistency.',
    solution: 'CG Header File consolidates all core CG algorithms into a single reusable cg.h header. Any C/C++ program can include this file and directly call functions for line drawing, circle drawing, filling, clipping, curves, and 2D transformations — saving time and ensuring consistent, tested implementations.',
    fullFeatures: [
      'DDA Line Drawing Algorithm — incremental line rasterization using float arithmetic',
      'Bresenham\'s Line Algorithm — efficient integer-based line drawing',
      'Midpoint Line Algorithm — decision parameter-based line drawing',
      'Midpoint Circle Algorithm — circle drawing using midpoint method',
      'Ellipse Drawing Algorithm — ellipse rasterization using midpoint technique',
      'Boundary Fill Algorithm — recursive fill using boundary detection',
      'Flood Fill Algorithm — recursive fill using seed point and color replacement',
      '2D Translation — moving objects along X and Y axes',
      '2D Rotation — rotating objects around the origin by a given angle',
      '2D Scaling — scaling objects with respect to origin',
      '2D Reflection — reflecting objects across X-axis, Y-axis, and both axes',
      'X-Shear and Y-Shear transformations',
      'Cohen-Sutherland Line Clipping Algorithm — region-code based line clipping',
      'Liang-Barsky Line Clipping Algorithm — parametric line clipping',
      'Bezier Curve Drawing — smooth curve generation using control points',
      'Koch Curve (Fractal) Drawing — recursive fractal curve generation',
    ],
    architecture: 'Single reusable header file (cg.h) written in C/C++ using the BGI graphics.h library. All algorithms are implemented as standalone functions that can be called directly after including the header. Output is rendered using the BGI graphics window and compiled to a Windows .exe executable.',
  },
];

const statusColor = (status: string) => {
  if (status === 'Completed') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
  if (status === 'In Development') return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
  if (status === 'Completed with ongoing improvements') return 'bg-teal-100 text-teal-700 border border-teal-200 dark:bg-teal-900/30 dark:text-teal-400';
  return 'bg-secondary text-muted-foreground';
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof mainProject | typeof otherProjects[0] | null>(null);

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
              <span className="bg-amber-100 text-amber-700 border border-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                🏆 {mainProject.badge}
              </span>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor(mainProject.status)}`}>
              {mainProject.status}
            </span>
          </div>

          <span className="inline-block text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300 px-3 py-1 rounded-md mb-4">
            {mainProject.category}
          </span>

          <p className="text-muted-foreground leading-relaxed mb-6">{mainProject.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {mainProject.tech.map((t) => (
                  <span key={t} className="bg-blue-100 text-blue-600 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold">
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

          <div className="flex gap-3 pt-2 border-t border-border">
            <Button className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setSelectedProject(mainProject)}>
              <Eye className="h-4 w-4" /> View Details
            </Button>
            <Button size="icon" variant="outline" onClick={() => window.open(mainProject.github, '_blank')}>
              <Github className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" disabled={!mainProject.liveUrl} onClick={() => mainProject.liveUrl && window.open(mainProject.liveUrl, '_blank')} title={mainProject.liveUrl ? 'Live Demo' : 'Not available'}>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Four smaller project cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {otherProjects.map((project, index) => (
            <div key={index} className="tech-card p-6 flex flex-col hover:border-primary/30 hover:shadow-lg border-2 transition-all duration-300 group">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${statusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <span className="inline-block text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300 px-3 py-1 rounded-md mb-3 w-fit">
                {project.category}
              </span>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground text-sm mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-blue-100 text-blue-600 border border-blue-200 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground text-sm mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0 text-base leading-4">•</span>{f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 pt-3 border-t border-border mt-auto">
                <Button className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm" onClick={() => setSelectedProject(project)}>
                  <Eye className="h-4 w-4" /> View Details
                </Button>
                <Button size="icon" variant="outline" onClick={() => window.open(project.github, '_blank')}>
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" disabled={!project.liveUrl} onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')} title={project.liveUrl ? 'Live Demo' : 'Not available'}>
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

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

    </section>
  );
};

export default Projects;
