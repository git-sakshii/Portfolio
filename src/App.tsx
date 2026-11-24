import { useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Github,
  House, Linkedin, Mail, Menu, PanelLeftClose, PanelLeftOpen, Sparkles, X,
} from 'lucide-react'

type IconType = typeof House

const navItems: { label: string; path: string; icon: IconType }[] = [
  { label: 'Home', path: '/', icon: House },
  { label: 'Experience', path: '/experience', icon: BriefcaseBusiness },
  { label: 'Skills', path: '/skills', icon: Code2 },
  { label: 'Projects', path: '/projects', icon: Sparkles },
  { label: 'Contact', path: '/contact', icon: Mail },
]

const projects = [
  { number: '01', name: 'ClinicConnect AI', type: 'Healthcare · Appointment discovery', description: 'Built a clinic discovery and appointment platform with separate clinic and admin portals, bilingual search and voice input, and an AI-assisted specialty matcher.', stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenStreetMap'], className: 'project-art-good', initials: 'CC', github: 'https://github.com/git-sakshii/ClinicConnect-AI', demo: 'https://clinicconnect-ai.vercel.app/' },
  { number: '02', name: 'FairMeet', type: 'Travel · Group meetup planner', description: 'A group meetup planner that finds a fair meeting point based on participant travel times, with venue discovery and group voting.', stack: ['Next.js', 'Google Maps', 'MongoDB'], className: 'project-art-mono', initials: 'FM', github: 'https://github.com/git-sakshii/FairMeet' },
  { number: '03', name: 'Travellopedia', type: 'Travel · AI trip planner', description: 'A Gemini-powered travel planner for destination recommendations and multi-day itineraries, tested by 60+ users. Semantic caching cut repeat API calls by about 38%.', stack: ['React', 'Node.js', 'MongoDB', 'Gemini 2.5 Flash'], className: 'project-art-lumio', initials: 'T.', github: 'https://github.com/git-sakshii/Travellopedia' },
  { number: '04', name: 'IT Ticket Management System', type: 'Full stack · IT helpdesk', description: 'A full-stack IT helpdesk with role-based access for users, technicians, and admins, plus PostgreSQL ticket workflows, SLA dashboards, and JWT authentication.', stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'], className: 'project-art-ticket', initials: 'IT', github: 'https://github.com/git-sakshii/IT-Ticket-Management-System' },
  { number: '05', name: 'ZeroDayShield', type: 'Research · Network security', description: 'A reproducible research project evaluating network anomaly detectors on held-out attack families as a zero-day-style proxy.', stack: ['Python', 'Scikit-learn', 'ML research'], className: 'project-art-security', initials: 'ZD', github: 'https://github.com/git-sakshii/ZeroDayAttack' },
]

const skillGroups = [
  { category: 'LANGUAGES', items: ['Java', 'JavaScript', 'SQL'] },
  { category: 'FRONTEND & FULL STACK', items: ['React.js', 'MERN stack', 'HTML', 'CSS', 'Responsive UI design'] },
  { category: 'BACKEND & SECURITY', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT authentication', 'RBAC', 'Rate limiting', 'Pagination'] },
  { category: 'DATABASES', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Schema design', 'Indexing'] },
  { category: 'AI & INTEGRATIONS', items: ['Generative AI', 'LLMs', 'Gemini API', 'Prompt engineering', 'Semantic caching', 'Sentiment analysis', 'Resume parsing', 'OpenStreetMap API'] },
  { category: 'TOOLS & CORE CS', items: ['Git', 'GitHub', 'Vercel', 'Data structures & algorithms', 'OOP'] },
]

function Sidebar() {
  const [open, setOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const activeTitle = navItems.find(item => item.path === location.pathname)?.label ?? 'Home'

  return <>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    {open && <button className="sidebar-scrim" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    <aside className={`sidebar ${open ? 'sidebar-open' : ''} ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <button className="desktop-collapse" onClick={() => setCollapsed(!collapsed)} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>{collapsed ? <PanelLeftOpen size={14} /> : <PanelLeftClose size={14} />}</button>
      <NavLink to="/" className="identity" onClick={() => setOpen(false)}>
        <div className="avatar-wrap"><img className="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=85" alt="Portrait placeholder for Sakshi Singh" /><span className="online-dot" /></div>
        <div className="identity-copy"><div className="identity-name">Sakshi Singh</div><div className="identity-role">Full-Stack Software Engineer</div></div>
      </NavLink>
      <div className="side-label"><span className="side-label-text">MENU</span><span className="side-label-rule" /></div>
      <nav className="side-nav" aria-label="Main navigation">
        {navItems.map(({ label, path, icon: Icon }) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title={label}><Icon size={17} strokeWidth={1.7} /><span className="nav-text">{label}</span>{activeTitle === label && <span className="nav-active-dot" />}</NavLink>)}
      </nav>
      <div className="sidebar-bottom">
        <div className="availability"><span className="availability-dot" /><div className="availability-copy"><strong>Available for work</strong><small>Open to opportunities</small></div></div>
        <div className="social-row"><a href="https://github.com/git-sakshii" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com/in/sakshi-singh-7a9539282" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:sakshisingh0101@gmail.com" aria-label="Email"><Mail size={17} /></a></div>
        <div className="copyright"><span className="copyright-full">© 2026 Sakshi Singh</span><span className="copyright-mark">©</span><span className="copyright-made">Made with care <span className="amber">✳</span></span></div>
      </div>
    </aside>
  </>
}

function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <header className="page-header"><div className="eyebrow"><span />{eyebrow}</div><h1>{title}</h1><p>{description}</p></header>
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return <article className="project-card"><div className={`project-art ${project.className}`}><div className="art-top"><span>{project.number} / SELECTED WORK</span><ArrowUpRight size={16} /></div><div className="art-mark">{project.initials}</div><div className="art-bottom"><span>{project.type}</span><span className="art-circle"><ArrowUpRight size={16} /></span></div></div><div className="project-info"><div><div className="project-name">{project.name}</div><div className="project-type">{project.type}</div></div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} source code on GitHub`} title="View source on GitHub"><Github size={16} /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`} title="Open live demo"><ArrowUpRight size={17} /></a>}</div></div><p className="project-description">{project.description}</p><div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article>
}

function Home() {
  return <div className="page home-page"><section className="hero"><div className="hero-copy"><div className="eyebrow"><span />FULL-STACK SOFTWARE ENGINEER · MERN · LLM APPS</div><div className="hero-profile"><img className="hero-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=640&q=90" alt="Portrait placeholder for Sakshi Singh" /><div className="hero-name-wrap"><span className="hero-greeting">HELLO, I’M</span><h1>Sakshi Singh<span className="hero-name-period">.</span></h1><span className="hero-title">Full-Stack Software Engineer</span></div></div><p className="hero-description">Final-year B.Tech student in Computer Science (AI) and full-stack developer building REST APIs, web apps, and LLM-powered features with the MERN stack. I have shipped three live products and finished as a national hackathon finalist.</p><div className="hero-actions"><NavLink to="/projects" className="button button-primary">Explore my work <ArrowUpRight size={16} /></NavLink><a href="/resume.pdf" target="_blank" rel="noreferrer" className="button button-outline">Resume <ArrowUpRight size={15} /></a><NavLink to="/contact" className="text-link">Let’s talk <ArrowRight size={16} /></NavLink></div><div className="hero-meta"><div className="mini-avatars"><span>✳</span><span>✦</span><span>●</span></div><span>HackVSIT finalist · <b>Top 5 of 80+ teams</b></span></div></div><div className="hero-visual"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-glow" /><div className="visual-center"><span className="visual-overline">A LITTLE BIT OF</span><strong>creative<br />code<span>.</span></strong><span className="visual-caption">DESIGN MINDED · DETAIL DRIVEN</span></div><span className="float-chip chip-code"><Code2 size={15} /> clean code</span><span className="float-chip chip-spark"><Sparkles size={15} /> good ideas</span><span className="visual-index">01 — 05</span></div><div className="hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></div></section><section className="featured section-block"><div className="section-heading"><div><div className="eyebrow"><span />A FEW RECENT FAVORITES</div><h2>Featured projects<span>.</span></h2></div><NavLink to="/projects" className="view-all">View all projects <ArrowUpRight size={15} /></NavLink></div><div className="project-grid">{projects.slice(0, 3).map(project => <ProjectCard key={project.number} project={project} />)}</div></section><section className="home-about section-block"><div className="eyebrow"><span />A LITTLE ABOUT ME</div><div className="about-teaser"><h2>Good work happens when<br /><em>curiosity meets craft.</em></h2><div><p>I build full-stack products with React, Node.js, Express, and MongoDB or PostgreSQL, and add LLM-powered features when they make the experience more useful.</p><NavLink className="text-link" to="/experience">A bit more about me <ArrowRight size={16} /></NavLink></div></div></section><Footer /></div>
}
function Experience() {
  return <div className="page inner-page"><PageHeader eyebrow="HACKATHONS, EDUCATION & MILESTONES" title={<>Experience<span>.</span></>} description="A few milestones from my journey building full-stack products and growing as a software engineer." /><div className="timeline"><article className="timeline-item"><div className="timeline-marker"><span>01</span></div><div className="timeline-content"><div className="timeline-date">2024 · 24-HOUR NATIONAL HACKATHON</div><div className="job-heading"><div><h2>Finalist · Top 5 of 80+ teams</h2><div className="job-company">HackVSIT · VIPS Delhi</div></div><span className="job-location">Delhi, India</span></div><p>Worked as a core member of a three-person team to build and present Real Prep, an AI mock interview platform. Built real-time facial sentiment analysis, automated interview reports and improvement plans, resume parsing, and profile-based question generation. The automated evaluation flow cut manual review time by an estimated 35%.</p><div className="tag-row">{['Real Prep', 'Generative AI', 'Sentiment analysis', 'Resume parsing'].map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article></div><section className="education-card"><div className="eyebrow"><span />EDUCATION</div><div className="education-row"><div><h2>Bachelor of Technology</h2><p>Computer Science (Artificial Intelligence)</p><strong>Galgotias College of Engineering and Technology</strong><small>Greater Noida, India</small></div><span className="education-date">EXPECTED MAY 2027</span></div></section><section className="certifications"><div className="eyebrow"><span />CERTIFICATIONS</div><div className="cert-list"><div><span>01</span><strong>Introduction to Generative AI</strong><small>Google Cloud · Mar 2025</small></div><div><span>02</span><strong>Version Control</strong><small>Meta, Coursera · Jun 2025</small></div><div><span>03</span><strong>Databases and SQL for Data Science</strong><small>IBM · May 2024</small></div></div></section><div className="note-card"><span className="note-icon"><Sparkles size={19} /></span><div><strong>Looking for my next opportunity.</strong><p>Seeking a software engineering internship or new-grad role where I can build useful products and keep learning.</p></div></div><Footer /></div>
}

function Skills() {
  return <div className="page inner-page"><PageHeader eyebrow="MY TOOLKIT" title={<>Skills & tech<span>.</span></>} description="My day-to-day stack across full-stack web development, data, and LLM-powered features." /><div className="skills-intro"><div className="skills-big">Thoughtfully<br /><em>put together.</em></div><p>My core toolkit spans the MERN stack, relational databases, API design, and Gemini-powered application features.</p></div><div className="skill-groups">{skillGroups.map((group, index) => <section className="skill-group" key={group.category}><div className="skill-category"><span>0{index + 1}</span>{group.category}</div><div className="skill-chips">{group.items.map((skill, i) => <div className="skill-chip" key={skill}><span className="skill-chip-icon">{['✳', '⌘', '◈', '↗', '✦', '◌'][i % 6]}</span>{skill}<ArrowUpRight size={13} /></div>)}</div></section>)}</div><div className="learning-card"><div><div className="eyebrow"><span />AREAS I LIKE TO BUILD</div><h3>Useful products, from API to interface.</h3><p>REST APIs, role-based access, persistent data, and LLM integrations designed around real product needs.</p></div><span className="learning-spark">✳</span></div><Footer /></div>
}

function Projects() {
  return <div className="page inner-page"><PageHeader eyebrow="A SELECTION OF MY WORK" title={<>Selected projects<span>.</span></>} description="Selected products and technical projects, from AI-powered platforms to full-stack systems and security research." /><div className="project-filter"><span className="filter-active">All work <small>05</small></span><span>Web apps</span><span>Experiments</span><span>Open source</span></div><div className="project-grid project-grid-page">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div><div className="project-note"><span>✳</span><p>Have a good idea brewing? I’d love to hear about it.</p><NavLink to="/contact" className="text-link">Let’s make something <ArrowRight size={16} /></NavLink></div><Footer /></div>
}

function Contact() {
  return <div className="page inner-page contact-page"><PageHeader eyebrow="HAVE SOMETHING IN MIND?" title={<>Let’s make it<br /><em>happen.</em></>} description="I’m seeking a software engineering internship or new-grad role. Based in Greater Noida, India; open to a thoughtful conversation." /><div className="contact-layout"><div className="contact-main"><a className="email-card" href="mailto:sakshisingh0101@gmail.com"><span className="contact-icon"><Mail size={20} /></span><span><small>DROP ME A LINE</small><strong>sakshisingh0101@gmail.com</strong></span><ArrowUpRight size={19} /></a><div className="social-cards"><a href="https://linkedin.com/in/sakshi-singh-7a9539282"><Linkedin size={18} /><span><small>CONNECT ON</small><strong>LinkedIn</strong></span><ArrowUpRight size={16} /></a><a href="https://github.com/git-sakshii"><Github size={18} /><span><small>SEE WHAT I’M BUILDING</small><strong>GitHub</strong></span><ArrowUpRight size={16} /></a><a href="https://leetcode.com/u/sakshi_singhh" target="_blank" rel="noreferrer"><Code2 size={18} /><span><small>PROBLEM SOLVING</small><strong>LeetCode</strong></span><ArrowUpRight size={16} /></a></div></div><aside className="contact-aside"><div className="contact-aside-mark">✳</div><div className="eyebrow"><span />BASED IN GREATER NOIDA</div><p>I’m a final-year B.Tech student in Computer Science (AI), looking for a team where I can contribute to useful software and keep growing as an engineer.</p><div className="availability contact-availability"><span className="availability-dot" /><div><strong>Currently available</strong><small>For select freelance & full-time work</small></div></div></aside></div><Footer /></div>
}

function Footer() {
  return <footer className="page-footer"><span>Designed & built with a little extra care <span className="amber">✳</span></span><a href="mailto:sakshisingh0101@gmail.com">Say hello <ArrowUpRight size={13} /></a></footer>
}

function App() {
  return <div className="app-shell"><Sidebar /><main className="main-content"><Routes><Route path="/" element={<Home />} /><Route path="/experience" element={<Experience />} /><Route path="/skills" element={<Skills />} /><Route path="/projects" element={<Projects />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} /></Routes></main></div>
}

export default App







