/**
 * Prism Circuit design system: a midnight editorial technical dossier with a vertical trajectory,
 * restrained Prism Cyan signals, and the user’s supplied portrait as the human focal point.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const profileImage = "/manus-storage/archana-profile_c427f313.png";
const resumeFile = "/manus-storage/archana-resume_16e3ce43.pdf";
const heroAtmosphere = "/manus-storage/archana-hero-atmosphere_f10698ab.jpg";
const markImage = "/manus-storage/archana-prism-mark_d09f6baa.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    eyebrow: "01 / BUILD",
    title: "Programming",
    skills: ["Python", "Java", "C"],
  },
  {
    eyebrow: "02 / EXPLORE",
    title: "AI & Data Science",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Data Science",
    ],
  },
  {
    eyebrow: "03 / IMPLEMENT",
    title: "Frameworks & Libraries",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Streamlit", "Scikit-learn"],
  },
  {
    eyebrow: "04 / SHIP",
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Power BI",
      "Postman",
      "Figma",
      "Canva",
    ],
  },
];

const projects = [
  {
    index: "01",
    category: "NLP · Deep Learning",
    title: "Insurance Claim Fraud Detection",
    description:
      "Developed a deep learning system that analyses insurance claim narratives using LSTM and Transformer models. The work covers text preprocessing, model training, and a Streamlit interface for real-time fraud prediction.",
    technologies: ["LSTM", "Transformer", "NLP", "PyTorch", "Streamlit"],
    image: "/manus-storage/archana-fraud-detection_dc52938f.jpg",
    featured: true,
  },
  {
    index: "02",
    category: "Algorithms · C",
    title: "Sudoku Solver",
    description:
      "Built a Sudoku solver in C using the Backtracking algorithm, applying structured problem-solving logic to explore valid paths and resolve each puzzle efficiently.",
    technologies: ["C", "Backtracking", "Algorithms", "Problem Solving"],
    image: "/manus-storage/archana-sudoku-solver_85ea06e5.jpg",
    featured: false,
  },
  {
    index: "03",
    category: "Data Analysis · ML",
    title: "Agricultural Market Price Trend Analysis",
    description:
      "Analysed agricultural market price data through preprocessing, machine learning, and visualization to explore historical patterns and support trend-focused insights.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Visualization"],
    image: "/manus-storage/archana-agri-price-analysis_e3776b2f.jpg",
    featured: false,
  },
];

const education = [
  {
    date: "Present",
    credential: "B.Tech · Artificial Intelligence and Data Science",
    institution: "Kongu Engineering College",
    detail: "CGPA 7.77",
  },
  {
    date: "Completed",
    credential: "Higher Secondary",
    institution: "Tamil Nadu State Board",
    detail: "83.3%",
  },
  {
    date: "Completed",
    credential: "Secondary",
    institution: "Tamil Nadu State Board",
    detail: "87%",
  },
];

function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading reveal">
      <div className="section-index">
        <span>{number}</span>
        <i />
        <span>{label}</span>
      </div>
      <div className="section-title-row">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="texture" />

      <aside className="side-rail" aria-label="Portfolio identity">
        <a className="rail-logo" href="#home" aria-label="Sri Archanadevi R home">
          <img src={markImage} alt="AR Prism mark" />
        </a>
        <div className="rail-trajectory" aria-label="Portfolio sections">
          {navLinks.map((link, index) => (
            <a href={link.href} key={link.label} aria-label={link.label} title={link.label}>
              <span>{String(index + 1).padStart(2, "0")}</span><i />
            </a>
          ))}
        </div>
        <div className="rail-socials">
          <a href="mailto:sriarchanadevir2007@gmail.com" aria-label="Email Sri Archanadevi R">
            <Mail size={16} />
          </a>
          <a href="https://www.linkedin.com/in/r-sri-archanadevi-57ba2b421" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={16} />
          </a>
        </div>
      </aside>

      <header className="topbar">
        <a className="topbar-wordmark" href="#home">
          <span>AR</span><p>SRI ARCHANADEVI R<small>AI & DATA SCIENCE</small></p>
        </a>
        <a className="mobile-logo" href="#home" aria-label="Sri Archanadevi R home">
          <img src={markImage} alt="AR Prism mark" />
          <span>SRI ARCHANADEVI R</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a href={link.href} key={link.label}>{link.label}</a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a href={link.href} key={link.label} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="mobile-resume" href={resumeFile} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Resume <Download size={15} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title" style={{ backgroundImage: `url(${heroAtmosphere})` }}>
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span />AVAILABLE FOR EARLY-CAREER OPPORTUNITIES</p>
            <h1 id="hero-title">
              Sri<br />
              <em>Archana</em><br />
              devi R.
            </h1>
            <p className="hero-role">Artificial Intelligence <span>+</span> Data Science</p>
            <p className="hero-summary">
              Building practical intelligence from data, language, and disciplined experimentation.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowDownRight size={18} />
              </a>
              <a className="button button-quiet" href={resumeFile} target="_blank" rel="noreferrer">
                Download resume <Download size={17} />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={profileImage} alt="Sri Archanadevi R in a professional black blazer" />
          </div>
        </section>

        <section className="about section-block" id="about" aria-labelledby="about-title">
          <SectionHeading number="01" label="PROFILE" title="A considered start in intelligent systems." />
          <div className="about-layout reveal">
            <p className="about-lead">
              I am an aspiring <em>Artificial Intelligence and Data Science</em> professional with a focused interest in machine learning, deep learning, natural language processing, and data-driven problem solving.
            </p>
            <div className="about-detail">
              <p>
                I am developing technical foundations through academic projects that connect data preparation, model building, and clear application design. My goal is to continue learning new technologies while applying analytical thinking to real-world challenges.
              </p>
              <a className="text-link" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="profile-metrics reveal">
            <div><span>FOCUS</span><strong>AI / ML / NLP</strong></div>
            <div><span>EDUCATION</span><strong>B.Tech AI & DS</strong></div>
            <div><span>CGPA</span><strong>7.77</strong></div>
            <div><span>BASE</span><strong>Palani, India</strong></div>
          </div>
        </section>

        <section className="skills section-block" id="skills" aria-labelledby="skills-title">
          <SectionHeading number="02" label="TOOLKIT" title="Technical capability, assembled with intent.">
            <div className="heading-symbol"><BrainCircuit size={22} /></div>
          </SectionHeading>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card reveal" key={group.title}>
                <p className="skill-number">{group.eyebrow}</p>
                <h3>{group.title}</h3>
                <div className="skill-chips">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
                <div className="card-corner" />
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-block" id="projects" aria-labelledby="projects-title">
          <SectionHeading number="03" label="SELECTED WORK" title="Building from patterns to practical outcomes.">
            <p className="heading-aside">03 projects / AI, algorithms & data</p>
          </SectionHeading>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.featured ? "project-featured" : ""} reveal`} key={project.title}>
                <div className="project-image-wrap">
                  <img src={project.image} alt="Abstract visualization for the project" />
                  <div className="project-image-overlay" />
                  <span className="project-index">{project.index}</span>
                  {project.featured && <span className="featured-flag"><Sparkles size={14} /> MAIN DEEP LEARNING PROJECT</span>}
                </div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tech-list">
                      {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                    <a className="project-link" href="https://github.com/archana2662" target="_blank" rel="noreferrer" aria-label={`GitHub profile for ${project.title}`}>
                      <Github size={18} /><span>GITHUB</span><ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-block" id="education" aria-labelledby="education-title">
          <SectionHeading number="04" label="FOUNDATION" title="A growing technical foundation." />
          <div className="education-layout reveal">
            <div className="education-titlebox">
              <GraduationCap size={28} />
              <p>EDUCATIONAL<br /><em>TRAJECTORY</em></p>
            </div>
            <ol className="timeline">
              {education.map((item) => (
                <li key={item.credential}>
                  <span className="timeline-date">{item.date}</span>
                  <div className="timeline-node"><i /></div>
                  <div className="timeline-content">
                    <h3>{item.credential}</h3>
                    <p>{item.institution}</p>
                  </div>
                  <strong>{item.detail}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="credentials section-block" id="certifications" aria-labelledby="credentials-title">
          <SectionHeading number="05" label="LEARNING" title="Continually extending the practice." />
          <div className="credential-grid">
            <article className="credential-card reveal"><Code2 size={22} /><p>CERTIFICATION</p><h3>Java Programming</h3><span>Infosys</span></article>
            <article className="credential-card reveal"><Sparkles size={22} /><p>CERTIFICATION</p><h3>UI/UX Design</h3><span>Non-formal course</span></article>
            <article className="credential-card reveal"><BrainCircuit size={22} /><p>CERTIFICATION</p><h3>Deep Learning</h3><span>Non-formal course</span></article>
            <article className="credential-card credential-special reveal"><BriefcaseBusiness size={22} /><p>IN-PLANT TRAINING</p><h3>Technical Exposure</h3><span>Codebind Technologies, Chennai<br />Litz Technologies, Coimbatore · 10 days each</span></article>
          </div>
        </section>

        <section className="highlights section-block" aria-labelledby="highlights-title">
          <SectionHeading number="06" label="AT A GLANCE" title="A concise technical profile." />
          <div className="highlight-grid reveal">
            <div className="highlight-intro"><p>RESUME<br />HIGHLIGHTS</p><span>Selected facts, simply stated.</span><i>INSERT / 06</i></div>
            <div className="highlight-item"><strong>01</strong><div><span>Technical strengths</span><p>Python, Java, C, Deep Learning, NLP</p></div></div>
            <div className="highlight-item"><strong>02</strong><div><span>Applied work</span><p>3 projects across NLP, algorithms, and data analysis</p></div></div>
            <div className="highlight-item"><strong>03</strong><div><span>Career interests</span><p>AI, Machine Learning, Deep Learning, Data Science</p></div></div>
          </div>
        </section>

        <section className="contact section-block" id="contact" aria-labelledby="contact-title">
          <div className="contact-orbit" />
          <SectionHeading number="07" label="CONTACT" title="Open to a meaningful conversation." />
          <div className="contact-layout reveal">
            <div>
              <p className="contact-lead">Looking for an early-career AI & Data Science professional who brings curiosity, structure, and a commitment to learning?</p>
              <a className="contact-email" href="mailto:sriarchanadevir2007@gmail.com">sriarchanadevir2007@gmail.com <ArrowUpRight size={20} /></a>
            </div>
            <div className="contact-list">
              <a href="tel:+918438592688"><Phone size={17} /><span>+91 84385 92688</span></a>
              <a href="https://www.linkedin.com/in/r-sri-archanadevi-57ba2b421" target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn profile</span><ArrowUpRight size={14} /></a>
              <a href="https://github.com/archana2662" target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub profile · archana2662</span><ArrowUpRight size={14} /></a>
              <div><MapPin size={17} /><span>Palani, Dindigul, Tamil Nadu, India</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><img src={markImage} alt="AR Prism mark" /><span>SRI ARCHANADEVI R</span></div>
        <p>© 2026 · Built as a professional portfolio.</p>
        <a href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
