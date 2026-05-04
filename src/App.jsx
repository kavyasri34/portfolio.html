import { useEffect, useMemo, useState } from 'react';

const resumeUrl = new URL('../images/Kavyasri (3).pdf', import.meta.url).href;
const profileUrl = new URL('../images/profile.jpeg', import.meta.url).href;

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { value: '4+', label: 'Featured projects' },
  { value: '9.26/10', label: 'Current CGPA' },
  { value: '2027', label: 'Graduation year' },
];

const strengths = ['Fast learner', 'Open to internships', 'Team collaborator', 'Clean UI focus'];

const skillGroups = [
  {
    title: 'Programming',
    items: ['C', 'Python', 'Java', 'Problem Solving'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Flutter', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Django', 'Spring', 'REST APIs'],
  },
  {
    title: 'Databases & Tools',
    items: ['MySQL', 'SQLite', 'Git', 'GitHub'],
  },
];

const projects = [
  {
    title: 'TO-DO Web Application',
    type: 'Full Stack',
    description:
      'A task management experience focused on clarity, productivity, and responsiveness with authentication, organized workflows, and smooth UI interactions.',
    highlights: ['User authentication', 'Task management', 'Category organization', 'Responsive UI'],
    accent: 'cyan',
    repo: 'https://github.com/kavyasri34',
  },
  {
    title: 'Viago - Ride Sharing App',
    type: 'Mobile App',
    description:
      'A mobile ride-sharing concept inspired by BlaBlaCar, designed to connect drivers and passengers with streamlined trip planning and booking flows.',
    highlights: ['Secure authentication', 'Ride publishing', 'Seat availability', 'Booking management'],
    accent: 'violet',
    repo: 'https://github.com/kavyasri34/viago-blablacar',
  },
  {
    title: 'BookWise',
    type: 'AI + Web',
    description:
      'An AI-powered social book discovery platform with recommendation logic, community features, and an interface designed to feel modern and approachable.',
    highlights: ['Google Books API', 'ML predictions', 'Recommendations', 'Community features'],
    accent: 'teal',
    repo: 'https://github.com/kavyasri34/bookwise',
  },
  {
    title: 'Recipe Recommendation System',
    type: 'Full Stack',
    description:
      'A recipe platform with smart recommendations, favorites, ratings, and an admin-friendly workflow for managing content efficiently.',
    highlights: ['Advanced search', 'Favorites & reviews', 'Ratings system', 'Admin dashboard'],
    accent: 'amber',
    repo: 'https://github.com/kavyasri34',
  },
];

const achievements = [
  { title: 'NPTEL Certification', body: 'Data structures in Python', icon: '🏅' },
  { title: 'HackOverflow Participation', body: 'SRKR Institute', icon: '⚡' },
  { title: 'Mathletes Club Member', body: 'Supported mathematics events and activities', icon: '➗' },
];

const contactLinks = [
  { label: 'Email', value: 'makinenikavyasrim@gmail.com', href: 'mailto:makinenikavyasrim@gmail.com' },
  { label: 'GitHub', value: 'github.com/kavyasri34', href: 'https://github.com/kavyasri34' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kavyasri-makineni',
    href: 'https://www.linkedin.com/in/kavyasri-makineni-967b372aa',
  },
];

const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];

function App() {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('Full Stack Developer');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    const preferredTheme =
      storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const current = roles[roleIndex];
    let charCount = 0;
    let deleting = false;
    let timerId;

    const tick = () => {
      if (!deleting) {
        charCount += 1;
        setTypedRole(current.slice(0, charCount));
        if (charCount >= current.length) {
          deleting = true;
          timerId = window.setTimeout(tick, 1200);
          return;
        }
      } else {
        charCount -= 1;
        setTypedRole(current.slice(0, Math.max(charCount, 0)));
        if (charCount <= 0) {
          setRoleIndex((index) => (index + 1) % roles.length);
          return;
        }
      }

      timerId = window.setTimeout(tick, deleting ? 35 : 70);
    };

    timerId = window.setTimeout(tick, 80);
    return () => window.clearTimeout(timerId);
  }, [roleIndex]);

  const themeLabel = useMemo(() => (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'), [theme]);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">KM</span>
          <span>
            Kavya <strong>Makineni</strong>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          aria-label={themeLabel}
          title={themeLabel}
        >
          {theme === 'dark' ? '☼' : '☾'}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">INTRODUCTION</p>
            <h1>Kavya Makineni</h1>
            <p className="hero-role">
              B.Tech IT Student · <span>{typedRole || ' '}</span>
            </p>
            <p className="hero-subtitle">
              Building elegant, practical, and responsive digital experiences with a strong focus on clean code and user
              value.
            </p>

            <div className="hero-pills" aria-label="Strengths">
              {strengths.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button primary" href={resumeUrl} download>
                Download Resume
              </a>
              <a className="button secondary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="social-row" aria-label="Social links">
              <a href="https://github.com/kavyasri34" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kavyasri-makineni-967b372aa" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:makinenikavyasrim@gmail.com">Email</a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="profile-card">
              <img src={profileUrl} alt="Kavya Makineni" className="profile-image" />
              <div>
                <p className="profile-label">Open to internships</p>
                <h2>React-ready portfolio, polished for recruiters.</h2>
                <p>
                  I’m a B.Tech Information Technology student at SVECW with experience in full-stack development,
                  mobile ideas, and AI-enhanced products.
                </p>
              </div>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">ABOUT ME</p>
            <h2>A focused builder with a modern front-end mindset</h2>
          </div>

          <div className="two-column">
            <div className="panel">
              <p>
                I’m a passionate Information Technology student at Shri Vishnu Engineering College for Women. I enjoy
                crafting polished interfaces, building thoughtful user flows, and learning technologies that turn ideas
                into practical products.
              </p>
              <p>
                My work blends frontend polish with full-stack curiosity. I care about maintainable code, accessible
                design, and projects that feel strong both technically and visually.
              </p>
            </div>

            <div className="panel panel-muted">
              <h3>Quick snapshot</h3>
              <ul className="bullets">
                <li>Special interest in React, Django, Spring, and Flutter</li>
                <li>Building a strong portfolio for internships and interviews</li>
                <li>Focused on clean UI, collaboration, and problem solving</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">EXPERIENCE</p>
            <h2>Internship and mentorship highlights</h2>
          </div>

          <div className="panel timeline-card">
            <div className="timeline-header">
              <div>
                <h3>Mentor — Data Structures & Algorithms</h3>
                <p className="muted">Smart Interviews</p>
              </div>
              <span className="badge">Current</span>
            </div>
            <p>
              Guiding junior developers through DSA concepts, helping them build confidence, and preparing them for
              interviews through structured problem-solving practice.
            </p>
            <div className="chip-row">
              <span>DSA mentoring</span>
              <span>Problem solving</span>
              <span>Junior guidance</span>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">SKILLS</p>
            <h2>Technology stack built for modern web work</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="panel skill-card">
                <h3>{group.title}</h3>
                <div className="chip-row wrap">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">PROJECTS</p>
            <h2>Selected work with a product-focused presentation</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className={`project-card accent-${project.accent}`}>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <span>Featured</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a href={project.repo} target="_blank" rel="noreferrer" className="button secondary small">
                    Source Code
                  </a>
                  <a href="#contact" className="button small ghost">
                    Discuss
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="section-heading">
            <p className="eyebrow">ACHIEVEMENTS</p>
            <h2>Certifications and participation</h2>
          </div>

          <div className="achievements-grid">
            {achievements.map((item) => (
              <article key={item.title} className="panel achievement-card">
                <div className="achievement-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">CONTACT</p>
            <h2>Let’s build something impressive together</h2>
          </div>

          <div className="contact-layout">
            <div className="panel contact-panel">
              <p className="contact-copy">
                I’m open to internships, collaboration opportunities, and conversations about front-end, full-stack,
                and AI-assisted product ideas.
              </p>

              <div className="contact-list">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="contact-item"
                  >
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                ))}
              </div>

              <div className="hero-actions contact-actions">
                <a className="button primary" href="mailto:makinenikavyasrim@gmail.com">
                  Send Email
                </a>
                <a className="button secondary" href={resumeUrl} download>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Kavya Makineni. Built with React and a cleaner visual system.</p>
        <div>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
