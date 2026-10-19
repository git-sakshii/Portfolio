import { useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Github,
  House, Instagram, Linkedin, Mail, Menu, PanelLeftClose, PanelLeftOpen, Sparkles, X,
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
  { number: '01', name: 'Lumio', type: 'Productivity · Web app', description: 'A calmer way to plan your day, bring your notes together, and make space for deep work.', stack: ['React', 'TypeScript', 'Supabase'], className: 'project-art-lumio', initials: 'Lu' },
  { number: '02', name: 'Monograph', type: 'Creative · Portfolio', description: 'An editorial home for independent creatives, made to make the work speak first.', stack: ['Next.js', 'Tailwind', 'Framer Motion'], className: 'project-art-mono', initials: 'M.' },
  { number: '03', name: 'Goodthings', type: 'E-commerce · Lifestyle', description: 'A considered storefront for everyday objects with a lighter footprint.', stack: ['React', 'Node.js', 'Stripe'], className: 'project-art-good', initials: 'g.' },
]

const skillGroups = [
  { category: 'FRONTEND', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML & CSS', 'Tailwind CSS'] },
  { category: 'BACKEND & DATA', items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Supabase', 'Firebase'] },
  { category: 'TOOLS & PRACTICE', items: ['Git & GitHub', 'Figma', 'Responsive design', 'Accessibility', 'Testing', 'Agile'] },
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
        <div className="identity-copy"><div className="identity-name">Sakshi Singh</div><div className="identity-role">Software Developer</div></div>
      </NavLink>
      <div className="side-label"><span className="side-label-text">MENU</span><span className="side-label-rule" /></div>
      <nav className="side-nav" aria-label="Main navigation">
        {navItems.map(({ label, path, icon: Icon }) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title={label}><Icon size={17} strokeWidth={1.7} /><span className="nav-text">{label}</span>{activeTitle === label && <span className="nav-active-dot" />}</NavLink>)}
      </nav>
      <div className="sidebar-bottom">
        <div className="availability"><span className="availability-dot" /><div className="availability-copy"><strong>Available for work</strong><small>Open to opportunities</small></div></div>
        <div className="social-row"><a href="https://github.com" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:hello@sakshisingh.dev" aria-label="Email"><Mail size={17} /></a></div>
        <div className="copyright"><span className="copyright-full">© 2026 Sakshi Singh</span><span className="copyright-mark">©</span><span className="copyright-made">Made with care <span className="amber">✳</span></span></div>
      </div>
    </aside>
  </>
}

function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <header className="page-header"><div className="eyebrow"><span />{eyebrow}</div><h1>{title}</h1><p>{description}</p></header>
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return <article className="project-card"><div className={`project-art ${project.className}`}><div className="art-top"><span>{project.number} / SELECTED WORK</span><ArrowUpRight size={16} /></div><div className="art-mark">{project.initials}</div><div className="art-bottom"><span>{project.type}</span><span className="art-circle"><ArrowUpRight size={16} /></span></div></div><div className="project-info"><div><div className="project-name">{project.name}</div><div className="project-type">{project.type}</div></div><ArrowUpRight className="project-arrow" size={19} /></div><p className="project-description">{project.description}</p><div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></article>
}

function Home() {
  return <div className="page home-page"><section className="hero"><div className="hero-copy"><div className="eyebrow"><span />SOFTWARE DEVELOPER · CREATIVE PROBLEM SOLVER</div><div className="hero-profile"><img className="hero-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=640&q=90" alt="Portrait placeholder for Sakshi Singh" /><div className="hero-name-wrap"><span className="hero-greeting">HELLO, I’M</span><h1>Sakshi Singh<span className="hero-name-period">.</span></h1><span className="hero-title">Software Developer</span></div></div><p className="hero-description">Software developer who loves turning complex problems into simple, human-friendly products. I care about the details, and the people on the other side of the screen.</p><div className="hero-actions"><NavLink to="/projects" className="button button-primary">Explore my work <ArrowUpRight size={16} /></NavLink><a href="https://drive.google.com/" target="_blank" rel="noreferrer" className="button button-outline">Resume <ArrowUpRight size={15} /></a><NavLink to="/contact" className="text-link">Let’s talk <ArrowRight size={16} /></NavLink></div><div className="hero-meta"><div className="mini-avatars"><span>✳</span><span>✦</span><span>●</span></div><span>Thoughtful by design. <b>Curious by nature.</b></span></div></div><div className="hero-visual"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-glow" /><div className="visual-center"><span className="visual-overline">A LITTLE BIT OF</span><strong>creative<br />code<span>.</span></strong><span className="visual-caption">DESIGN MINDED · DETAIL DRIVEN</span></div><span className="float-chip chip-code"><Code2 size={15} /> clean code</span><span className="float-chip chip-spark"><Sparkles size={15} /> good ideas</span><span className="visual-index">01 — 05</span></div><div className="hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></div></section><section className="featured section-block"><div className="section-heading"><div><div className="eyebrow"><span />A FEW RECENT FAVORITES</div><h2>Featured projects<span>.</span></h2></div><NavLink to="/projects" className="view-all">View all projects <ArrowUpRight size={15} /></NavLink></div><div className="project-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div></section><section className="home-about section-block"><div className="eyebrow"><span />A LITTLE ABOUT ME</div><div className="about-teaser"><h2>Good work happens when<br /><em>curiosity meets craft.</em></h2><div><p>I’m a developer who enjoys working across the stack, collaborating with thoughtful people, and creating products that feel as good as they function.</p><NavLink className="text-link" to="/experience">A bit more about me <ArrowRight size={16} /></NavLink></div></div></section><Footer /></div>
}
function Experience() {
  const jobs = [
    { date: '2024 — PRESENT', company: 'Studio North', role: 'Frontend Developer', location: 'Remote · India', description: 'Building thoughtful web experiences for early-stage teams. Partnering with design and product to bring ideas from first sketch to launch.', tags: ['React', 'TypeScript', 'Design systems'] },
    { date: '2022 — 2024', company: 'Brightside Digital', role: 'Associate Developer', location: 'Bengaluru, India', description: 'Worked across a range of client projects, shipping responsive interfaces and reusable components while learning the craft of great software.', tags: ['JavaScript', 'Next.js', 'CSS'] },
    { date: '2021 — 2022', company: 'Open source & learning', role: 'Building the foundations', location: 'Everywhere', description: 'Studied computer science, built small projects, and found my way into frontend development through curiosity and a lot of tinkering.', tags: ['HTML', 'CSS', 'JavaScript'] },
  ]
  return <div className="page inner-page"><PageHeader eyebrow="THE PATH SO FAR" title={<>Experience<span>.</span></>} description="A few places I’ve learned, contributed, and grown along the way." /><div className="timeline">{jobs.map((job, i) => <article className="timeline-item" key={job.company}><div className="timeline-marker"><span>{String(i + 1).padStart(2, '0')}</span></div><div className="timeline-content"><div className="timeline-date">{job.date}</div><div className="job-heading"><div><h2>{job.role}</h2><div className="job-company">{job.company}</div></div><span className="job-location">{job.location}</span></div><p>{job.description}</p><div className="tag-row">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div><div className="note-card"><span className="note-icon"><Sparkles size={19} /></span><div><strong>Always learning, always building.</strong><p>Every project teaches me something new. That’s one of my favorite parts of the work.</p></div></div><Footer /></div>
}

function Skills() {
  return <div className="page inner-page"><PageHeader eyebrow="MY TOOLKIT" title={<>Skills & tech<span>.</span></>} description="The tools I reach for to bring ideas to life, and the ones I’m exploring next." /><div className="skills-intro"><div className="skills-big">Thoughtfully<br /><em>put together.</em></div><p>I believe the best tools are the ones that get out of your way. Here’s what I use to create dependable, considered digital experiences.</p></div><div className="skill-groups">{skillGroups.map((group, index) => <section className="skill-group" key={group.category}><div className="skill-category"><span>0{index + 1}</span>{group.category}</div><div className="skill-chips">{group.items.map((skill, i) => <div className="skill-chip" key={skill}><span className="skill-chip-icon">{['✳', '⌘', '◈', '↗', '✦', '◌'][i % 6]}</span>{skill}<ArrowUpRight size={13} /></div>)}</div></section>)}</div><div className="learning-card"><div><div className="eyebrow"><span />CURRENTLY EXPLORING</div><h3>Making interfaces feel a little more alive.</h3><p>Motion design, subtle interactions, and the little details that make software feel warm and intuitive.</p></div><span className="learning-spark">✳</span></div><Footer /></div>
}

function Projects() {
  return <div className="page inner-page"><PageHeader eyebrow="A SELECTION OF MY WORK" title={<>Selected projects<span>.</span></>} description="A collection of things I’ve made, ideas I’ve explored, and problems I’ve enjoyed solving." /><div className="project-filter"><span className="filter-active">All work <small>03</small></span><span>Web apps</span><span>Experiments</span><span>Open source</span></div><div className="project-grid project-grid-page">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div><div className="project-note"><span>✳</span><p>Have a good idea brewing? I’d love to hear about it.</p><NavLink to="/contact" className="text-link">Let’s make something <ArrowRight size={16} /></NavLink></div><Footer /></div>
}

function Contact() {
  return <div className="page inner-page contact-page"><PageHeader eyebrow="HAVE SOMETHING IN MIND?" title={<>Let’s make it<br /><em>happen.</em></>} description="I’m always up for a thoughtful conversation, a good challenge, or a new opportunity. My inbox is open." /><div className="contact-layout"><div className="contact-main"><a className="email-card" href="mailto:hello@sakshisingh.dev"><span className="contact-icon"><Mail size={20} /></span><span><small>DROP ME A LINE</small><strong>hello@sakshisingh.dev</strong></span><ArrowUpRight size={19} /></a><div className="social-cards"><a href="https://linkedin.com"><Linkedin size={18} /><span><small>CONNECT ON</small><strong>LinkedIn</strong></span><ArrowUpRight size={16} /></a><a href="https://github.com"><Github size={18} /><span><small>SEE WHAT I’M BUILDING</small><strong>GitHub</strong></span><ArrowUpRight size={16} /></a><a href="https://instagram.com"><Instagram size={18} /><span><small>OCCASIONAL THOUGHTS</small><strong>Instagram</strong></span><ArrowUpRight size={16} /></a></div></div><aside className="contact-aside"><div className="contact-aside-mark">✳</div><div className="eyebrow"><span />A NOTE FROM ME</div><p>Good things start with a hello. Tell me what you’re working on, what you’re curious about, or just share something you’ve been thinking about lately.</p><div className="availability contact-availability"><span className="availability-dot" /><div><strong>Currently available</strong><small>For select freelance & full-time work</small></div></div></aside></div><Footer /></div>
}

function Footer() {
  return <footer className="page-footer"><span>Designed & built with a little extra care <span className="amber">✳</span></span><a href="mailto:hello@sakshisingh.dev">Say hello <ArrowUpRight size={13} /></a></footer>
}

function App() {
  return <div className="app-shell"><Sidebar /><main className="main-content"><Routes><Route path="/" element={<Home />} /><Route path="/experience" element={<Experience />} /><Route path="/skills" element={<Skills />} /><Route path="/projects" element={<Projects />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} /></Routes></main></div>
}

export default App







