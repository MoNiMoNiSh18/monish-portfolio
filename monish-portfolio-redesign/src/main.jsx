import React from "react";
import { createRoot } from "react-dom/client";
import {
  motion, useScroll, useSpring, useMotionValue, useInView, animate
} from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail,
  FileText, Code2, ExternalLink, BrainCircuit, GraduationCap, Award,
  Presentation, Menu, X, Cpu, Layers3, Network, Terminal, Braces,
  Workflow, Copy, Check, MoveUpRight
} from "lucide-react";
import "./style.css";

const GITHUB = "https://github.com/MoNiMoNiSh18";
const EMAIL = "ashishmoni1813@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/monish-v-1820j06/";

const featuredProjects = [
  {
    name: "CacheForge", type: "SYSTEMS PROGRAMMING / C++17",
    desc: "A thread-safe, in-memory key-value cache built around an unordered map and an intrusive doubly linked list. The design keeps lookup and LRU updates efficient while exploring the mechanics behind a small storage engine.",
    detail: "TTL expiration · configurable capacity · LRU eviction · file persistence · CMake library",
    metric: "2.86M inserts / sec", metricNote: "Median benchmark · 100K operations · 5 runs",
    tags: ["C++17", "STL", "Multithreading", "CMake"], url: `${GITHUB}/CacheForge`,
    image: "cacheforge.png", number: "01", live: null,
    architecture: ["Hash map for key-to-node lookup", "Intrusive doubly linked list for LRU ordering", "TTL checks and configurable capacity", "File-based persistence and cache statistics"],
    proof: [{ value: "2.86M", label: "inserts / sec" }, { value: "12.75M", label: "reads / sec" }, { value: "10.37M", label: "mixed ops / sec" }]
  },
  {
    name: "ReleasePilot", type: "AI / DEVELOPER TOOLING",
    desc: "An AI-assisted release-readiness analyzer that reviews a repository through focused analysis agents for code risk, testing, documentation and configuration—then brings the findings into a persisted report.",
    detail: "Specialized analysis agents · asynchronous runs · persisted findings · realtime status",
    metric: "18 persisted findings", metricNote: "Recorded in a documented validation run",
    tags: ["React", "Node.js", "AI agents", "IBM Bob"], url: `${GITHUB}/ReleasePilot`,
    live: "https://release-pilot-nine.vercel.app/", image: "releasepilot.png", number: "02",
    architecture: ["Repository-level release-readiness workflow", "Focused agents for code, tests, docs and config", "Asynchronous analysis with persisted reports", "Validated against two real repositories"], proof: null
  },
  {
    name: "RoadSense", type: "MACHINE LEARNING / FULL STACK",
    desc: "A traffic-risk prediction application that uses a Random Forest classifier to estimate risk from traffic, road, environmental and driver-related inputs. Predictions are served through an API and presented in a map-aware interface.",
    detail: "FastAPI predictions · confidence scoring · geolocation · Leaflet / OpenStreetMap",
    metric: "99.52% test accuracy", metricNote: "10,000 held-out records · 80:20 split",
    tags: ["Python", "FastAPI", "Scikit-learn", "React"], url: `${GITHUB}/RoadSense_Traffic_Risk_Detection_System`,
    image: "roadsense.png", number: "03", live: null,
    architecture: ["50K-record dataset with 8 input features", "Random Forest classifier with 100 estimators", "Low / Medium / High risk classification", "JWT authentication, confidence score and map view"], proof: null
  },
  {
    name: "SkillTree", type: "FULL STACK / CAREER PREPARATION",
    desc: "A placement-preparation platform that brings resume analysis, skill tracking, career roadmaps, company recommendations, interview preparation and coding practice into one connected workflow.",
    detail: "JWT authentication · PDF parsing · skill extraction · MySQL-backed application",
    metric: "Live frontend", metricNote: "Deployed on Vercel",
    tags: ["React", "Node.js", "Express", "MySQL"], url: `${GITHUB}/_SkillTree_`,
    live: "https://skill-tree-silk.vercel.app/", image: "skilltree.png", number: "04",
    architecture: ["Resume upload and PDF text processing", "Skill extraction and personalized roadmaps", "Company recommendations and interview prep", "JWT authentication and password-reset flow"], proof: null
  }
];

const moreProjects = [
  { name: "SmartOps OpenEnv", type: "AGENT ENVIRONMENT", desc: "An OpenEnv-compatible customer-support ticket environment where agents classify issues, prioritize work, respond and resolve tickets through structured actions. Includes step, reset and state workflows with reward-oriented tasks.", tags: ["Python", "OpenEnv", "Docker"], url: `${GITHUB}/smartops-openenv`, icon: Workflow },
  { name: "BlockAttend", type: "BLOCKCHAIN / FULL STACK", desc: "A blockchain-backed attendance management system designed to make attendance records transparent, verifiable and resistant to tampering through smart-contract-backed records.", tags: ["React", "Node.js", "Solidity", "Hardhat", "Ethers"], url: `${GITHUB}/BlockAttend`, icon: Network },
  { name: "DocuRAG AI", type: "GENERATIVE AI / RAG", desc: "A PDF-based study assistant that extracts and chunks document text, creates embeddings, retrieves relevant passages with FAISS and generates grounded answers with source context.", tags: ["Python", "Streamlit", "FAISS", "Groq", "SentenceTransformers"], url: `${GITHUB}/docurag-ai`, icon: BrainCircuit }
];

const skillGroups = [
  { title: "LANGUAGES", subtitle: "The building blocks", icon: Braces, items: ["C++", "Python", "SQL", "JavaScript"] },
  { title: "WEB & BACKEND", subtitle: "Interfaces to services", icon: Layers3, items: ["React", "Node.js", "Express", "FastAPI", "REST APIs", "JWT"] },
  { title: "AI & DATA", subtitle: "Retrieval, learning and inference", icon: BrainCircuit, items: ["Scikit-learn", "Pandas", "NumPy", "RAG", "SentenceTransformers", "FAISS", "Groq API"] },
  { title: "CORE CS & TOOLS", subtitle: "Engineering foundations", icon: Cpu, items: ["DSA", "OOP", "DBMS", "Operating Systems", "Multithreading", "Git", "CMake", "Postman", "Leaflet"] }
];

const fadeUp = {
  hidden: { opacity: 0, y: 42, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const projectStories = {
  CacheForge: {
    question: "How do you keep an in-memory cache fast while managing recency, expiry and capacity?",
    build: "A hash map handles key lookup while an intrusive doubly linked list tracks LRU order. TTL checks, persistence and cache statistics round out the storage workflow.",
    outcome: "Benchmarked on a Ryzen 5 3500U Release build across five runs of 100K operations."
  },
  ReleasePilot: {
    question: "Release readiness is not one check. It spans code risk, tests, docs and configuration.",
    build: "Focused analysis agents review separate repository concerns, with asynchronous execution, persisted findings and realtime status updates.",
    outcome: "Validated against two real repositories, with 18 findings recorded in a documented run."
  },
  RoadSense: {
    question: "How can multiple traffic and environmental signals become an understandable risk estimate?",
    build: "A Random Forest model trained on 50K records and eight features serves Low, Medium and High risk predictions through FastAPI.",
    outcome: "99.52% accuracy on 10,000 held-out records from an 80:20 split."
  },
  SkillTree: {
    question: "Placement preparation often spreads resumes, skills, roadmaps and practice across different tools.",
    build: "A React and Node application connects PDF processing, skill extraction, roadmaps, company recommendations and interview preparation.",
    outcome: "A live frontend with JWT authentication and a MySQL-backed application workflow."
  }
};

function Eyebrow({ children, number }) {
  return <div className="eyebrow"><span className="eyebrow-mark" />{number && <span className="eyebrow-number">{number}</span>}{children}</div>;
}

function CountUp({ to, decimals = 0, suffix = "", prefix = "" }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.9, ease: [0.16, 1, 0.3, 1], onUpdate: v => setValue(v) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{prefix}{value.toFixed(decimals)}{suffix}</span>;
}

function ProjectCard({ project, index }) {
  const story = projectStories[project.name];
  return (
    <motion.article className={`project-card project-card-${index + 1}`} layout variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
      <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}>
        <img src={`/projects/${project.image}`} alt={`${project.name} application screenshot`} loading="lazy" />
        <span className="project-number">SELECTED WORK / {project.number}</span>
        <span className="image-open"><ArrowUpRight size={20} /></span>
        <span className="image-caption">OPEN CASE STUDY <MoveUpRight size={13} /></span>
      </a>
      <div className="project-copy">
        <div className="project-type">{project.type}</div>
        <h3>{project.name}<span className="project-index">{project.number}</span></h3>
        <p>{project.desc}</p>
        <div className="project-detail"><span className="detail-label">SYSTEM NOTES</span>{project.detail}</div>
        <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-story">
          <div><span className="story-label">THE QUESTION</span><p>{story.question}</p></div>
          <div><span className="story-label">THE BUILD</span><p>{story.build}</p></div>
          <div><span className="story-label">THE EVIDENCE</span><p>{story.outcome}</p></div>
        </div>
        {project.proof && <div className="proof-grid">{project.proof.map(item => <div key={item.label}><b>{item.value}</b><span>{item.label}</span></div>)}</div>}
        <div className="project-footer">
          <div className="metric-lockup"><strong>{project.metric}</strong><small>{project.metricNote}</small></div>
          <div className="project-links">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE <ExternalLink size={13} /></a>}
            <a href={project.url} target="_blank" rel="noreferrer">SOURCE <Github size={14} /></a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Marquee() {
  const items = ["C++ / SYSTEMS", "APPLIED AI", "FULL-STACK PRODUCTS", "ENGINEERING CURIOSITY", "BUILD · MEASURE · REFINE"];
  return <div className="marquee" aria-label="Areas of interest"><div className="marquee-track">{[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✳</i></span>)}</div></div>;
}

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState("ALL");
  const cursorXRaw = useMotionValue(-100);
  const cursorYRaw = useMotionValue(-100);
  const cursorX = useSpring(cursorXRaw, { stiffness: 360, damping: 34 });
  const cursorY = useSpring(cursorYRaw, { stiffness: 360, damping: 34 });
  const [cursorActive, setCursorActive] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  const filters = ["ALL", "SYSTEMS", "AI / ML", "FULL STACK"];
  const filteredProjects = featuredProjects.filter(project => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "SYSTEMS") return project.name === "CacheForge";
    if (activeFilter === "AI / ML") return ["ReleasePilot", "RoadSense"].includes(project.name);
    return ["SkillTree", "RoadSense"].includes(project.name);
  });

  React.useEffect(() => {
    const move = e => { cursorXRaw.set(e.clientX); cursorYRaw.set(e.clientY); };
    const over = e => setCursorActive(Boolean(e.target.closest("a, button, [data-cursor]")));
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerover", over); };
  }, [cursorXRaw, cursorYRaw]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.div className={`custom-cursor ${cursorActive ? "is-active" : ""}`} style={{ x: cursorX, y: cursorY }} />
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>MV<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>ABOUT</a><a href="#work" onClick={closeMenu}>PROJECTS</a><a href="#stack" onClick={closeMenu}>STACK</a><a href="#journey" onClick={closeMenu}>JOURNEY</a><a href="#contact" onClick={closeMenu}>CONTACT</a>
        </nav>
        <a className="header-link" href="#contact">LET'S TALK <ArrowUpRight size={14} /></a>
      </header>

      <main id="top">
        <section className="chapter hero" id="about">
          <div className="hero-grid" /><div className="hero-noise" /><div className="hero-glow" />
          <div className="hero-content">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}><Eyebrow number="01">SOFTWARE DEVELOPER · BENGALURU, INDIA</Eyebrow></motion.div>
              <motion.h1 variants={fadeUp}>Curious by nature.<br /><em>Built to create.</em></motion.h1>
              <motion.p className="hero-intro" variants={fadeUp}>I'm Monish — a Computer Science undergraduate who enjoys solving problems with code, building practical AI applications and understanding how software works under the hood. I like turning ideas into working systems, from low-level C++ components to full-stack products.</motion.p>
              <motion.div className="hero-actions" variants={fadeUp}><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="button button-outline" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <FileText size={16} /></a></motion.div>
              <motion.div className="hero-facts" variants={fadeUp}><span><GraduationCap size={15} /> B.E. COMPUTER SCIENCE & ENGINEERING</span><span>ACHARYA INSTITUTE OF TECHNOLOGY</span><span>2027 BATCH</span></motion.div>
            </motion.div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-monogram">M<span>V</span></div><div className="hero-ring ring-one" /><div className="hero-ring ring-two" /><div className="hero-ring ring-three" />
            <div className="hero-coordinate">12°58' N<br />77°35' E</div><div className="hero-vertical">DESIGN · ENGINEERING · ITERATION</div>
            <div className="hero-orbit-note">C++ / AI / FULL STACK</div>
          </div>
          <div className="hero-side-note"><span>01 — 07</span><i />SCROLL TO EXPLORE</div>
          <a className="scroll-cue" href="#snapshot" aria-label="Scroll to snapshot"><ArrowDown size={17} /></a>
          <div className="hero-bottomline"><span>PORTFOLIO / 2026</span><span>INDEPENDENTLY BUILT · ALWAYS LEARNING</span></div>
        </section>

        <Marquee />

        <section className="snapshot" id="snapshot">
          <div className="snapshot-intro"><Eyebrow number="02">A QUICK SNAPSHOT</Eyebrow><p>Different layers of software. One constant: a curiosity for how things work.</p></div>
          <div className="stats-grid">
            <motion.div className="stat-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><span className="stat-index">01 / SYSTEMS</span><strong><CountUp to={2.86} decimals={2} suffix="M" /></strong><span className="stat-label">Cache inserts / sec</span><small>CacheForge · median benchmark</small></motion.div>
            <motion.div className="stat-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .08 }}><span className="stat-index">02 / MACHINE LEARNING</span><strong><CountUp to={99.52} decimals={2} suffix="%" /></strong><span className="stat-label">Held-out test accuracy</span><small>RoadSense · 10K records</small></motion.div>
            <motion.div className="stat-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .16 }}><span className="stat-index">03 / PROJECTS</span><strong><CountUp to={7} /></strong><span className="stat-label">Projects showcased</span><small>Across systems, AI and full stack</small></motion.div>
            <motion.div className="stat-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .24 }}><span className="stat-index">04 / RESEARCH</span><strong><CountUp to={1} /></strong><span className="stat-label">Conference presentation</span><small>ICNGSMCA-26 · Paper ID 317</small></motion.div>
            <motion.div className="stat-card stat-card-wide" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .32 }}><span className="stat-index">05 / VALIDATION</span><strong><CountUp to={2} /></strong><span className="stat-label">Repositories tested with ReleasePilot</span><small>Real repository validation</small></motion.div>
          </div>
        </section>

        <section className="chapter approach" id="approach">
          <div className="section-heading"><div><Eyebrow number="03">WHAT I LIKE TO BUILD</Eyebrow><h2>From low-level<br />logic to <em>useful products.</em></h2></div><p>I move between different parts of the stack—choosing tools based on the problem, then focusing on making the pieces work together.</p></div>
          <div className="approach-grid">
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><span className="approach-number">01</span><Cpu size={24} /><h3>Systems thinking</h3><p>Exploring data structures, memory, concurrency and performance through projects such as CacheForge. I enjoy understanding what happens beneath an API and measuring the trade-offs.</p><span className="approach-foot">C++ · DSA · MULTITHREADING</span></motion.article>
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .08 }}><span className="approach-number">02</span><BrainCircuit size={24} /><h3>Applied AI</h3><p>Building practical workflows around machine learning, retrieval, document understanding and AI-assisted analysis—with a focus on useful outputs and traceable context.</p><span className="approach-foot">ML · RAG · AI AGENTS</span></motion.article>
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .16 }}><span className="approach-number">03</span><Layers3 size={24} /><h3>Full-stack delivery</h3><p>Connecting interfaces, APIs, databases and authentication into complete applications, from the first interaction through the data and service layers.</p><span className="approach-foot">REACT · NODE · FASTAPI</span></motion.article>
          </div>
        </section>

        <section className="chapter principles" id="principles">
          <div className="principles-head"><Eyebrow number="04">THE ENGINEERING LENS</Eyebrow><h2>Good software is<br /><em>more than a demo.</em></h2><p>I like projects where the details matter: a data structure that stays efficient, an AI workflow that explains its output, or an application that connects the whole experience.</p></div>
          <div className="principle-list">
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><span>01</span><div><h3>Measure what matters.</h3><p>CacheForge is benchmarked across inserts, reads and mixed operations—not just described as fast.</p></div><b>PERFORMANCE</b></motion.article>
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><span>02</span><div><h3>Make intelligence useful.</h3><p>RoadSense turns model output into risk levels, while DocuRAG AI retrieves document context before generating an answer.</p></div><b>APPLIED AI</b></motion.article>
            <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><span>03</span><div><h3>Think end to end.</h3><p>SkillTree and ReleasePilot connect interfaces, services, processing and persisted results into complete workflows.</p></div><b>PRODUCT ENGINEERING</b></motion.article>
          </div>
        </section>

        <section className="chapter work" id="work">
          <div className="section-heading"><div><Eyebrow number="05">SELECTED WORK</Eyebrow><h2>Ideas turned<br />into <em>working systems.</em></h2></div><p>Four featured builds, each exploring a different engineering problem—from fast in-memory storage to applied machine learning and developer workflows.</p></div>
          <div className="project-filter" role="group" aria-label="Filter selected projects">{filters.map(filter => <button key={filter} className={activeFilter === filter ? "filter-button active" : "filter-button"} onClick={() => setActiveFilter(filter)}>{filter}<span>{filter === "ALL" ? "04" : filter === "SYSTEMS" ? "01" : filter === "AI / ML" ? "02" : "02"}</span></button>)}</div>
          <motion.div className="featured-grid" layout>{filteredProjects.map(project => <ProjectCard key={project.name} project={project} index={featuredProjects.indexOf(project)} />)}</motion.div>
          <div className="more-projects">
            <div className="more-heading"><div><Eyebrow>ALSO IN THE WORKSHOP</Eyebrow><h3>More experiments<span>.</span></h3></div><a href={GITHUB} target="_blank" rel="noreferrer">ALL REPOSITORIES <ArrowUpRight size={15} /></a></div>
            <div className="more-grid">{moreProjects.map((project, index) => { const Icon = project.icon; return <motion.a className="more-card" href={project.url} target="_blank" rel="noreferrer" key={project.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} transition={{ delay: index * .07 }}><div className="more-card-top"><span>0{index + 5}</span><Icon size={21} /><ArrowUpRight size={17} /></div><div className="project-type">{project.type}</div><h4>{project.name}</h4><p>{project.desc}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></motion.a>; })}</div>
          </div>
        </section>

        <section className="chapter stack" id="stack">
          <div className="stack-heading"><div><Eyebrow number="06">TOOLS, CONCEPTS & CURIOSITY</Eyebrow><h2>The technical<br /><em>toolkit.</em></h2></div><p>A growing set of languages, frameworks and fundamentals I use to explore and build software. These are tools I have worked with across coursework and projects—not proficiency scores.</p></div>
          <div className="skills-layout">
            <div className="skills-orbit"><div className="orbit-core"><Terminal size={32} /><span>BUILD<br />THINK<br />REFINE</span></div><div className="orbit-track track-a" /><div className="orbit-track track-b" /><span className="orbit-label orbit-label-a">CODE</span><span className="orbit-label orbit-label-b">SYSTEMS</span><span className="orbit-label orbit-label-c">AI</span></div>
            <div className="skills-groups">{skillGroups.map((group, index) => { const Icon = group.icon; return <motion.div className="skill-group" key={group.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * .08 }}><div className="skill-group-head"><span className="skill-icon"><Icon size={17} /></span><div><b>{group.title}</b><small>{group.subtitle}</small></div><span className="skill-count">0{index + 1}</span></div><div className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></motion.div>; })}</div>
          </div>
        </section>

        <section className="chapter journey" id="journey">
          <div className="journey-top"><Eyebrow number="07">THE JOURNEY SO FAR</Eyebrow><h2>Learning.<br /><em>Sharing.</em><br />Building.</h2><p>Experiences that pushed me to present ideas, collaborate and keep learning beyond coursework.</p><div className="journey-stamp"><span>COMPUTER SCIENCE</span><strong>2027</strong><span>ACHARYA INSTITUTE OF TECHNOLOGY</span></div></div>
          <div className="timeline">
            <motion.article className="timeline-entry" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="timeline-icon"><GraduationCap size={18} /></div><div className="timeline-content"><div className="timeline-meta">UNDERGRADUATE EDUCATION · 2027 BATCH</div><h3>B.E. Computer Science & Engineering</h3><p>Studying at Acharya Institute of Technology, building foundations across computer science while exploring systems programming, full-stack development and applied AI through hands-on projects.</p><div className="timeline-actions"><span>ACHARYA INSTITUTE OF TECHNOLOGY</span></div></div></motion.article>
            <motion.article className="timeline-entry" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="timeline-icon"><Presentation size={18} /></div><div className="timeline-content"><div className="timeline-meta">RESEARCH PRESENTATION · 24–25 JULY 2026</div><h3>Artificial Intelligence Based Traffic Risk Detection System Using Machine Learning</h3><p>Presented the research paper online at the 2nd International Conference on Next-Gen Semiconductor Devices, Materials and Smart Computing Applications (ICNGSMCA-26), hosted by Cambridge Institute of Technology, Bengaluru. Received a certificate of participation; the publication process is in progress.</p><div className="timeline-actions"><span>PAPER ID · 317</span><a href="/certificates/icngsmca-2026.pdf" target="_blank" rel="noreferrer">VIEW CERTIFICATE <ArrowUpRight size={14} /></a></div></div></motion.article>
            <motion.article className="timeline-entry" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="timeline-icon"><BrainCircuit size={18} /></div><div className="timeline-content"><div className="timeline-meta">HACKATHON · 2026</div><h3>lablab.ai × IBM Bob 2.0</h3><p>Built ReleasePilot, an AI-assisted release-readiness analyzer using specialized agents to review code risk, testing, documentation and configuration. The project was validated against two real repositories.</p><a className="text-link" href={`${GITHUB}/ReleasePilot`} target="_blank" rel="noreferrer">EXPLORE RELEASEPILOT <ArrowUpRight size={14} /></a></div></motion.article>
            <motion.article className="timeline-entry" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="timeline-icon"><Award size={18} /></div><div className="timeline-content"><div className="timeline-meta">TECHNICAL PARTICIPATION</div><h3>Scaler Hackathon & Binary Battle</h3><p>Participated in the Scaler Hackathon and Binary Battle, a competitive programming event—opportunities to practice problem-solving and collaborate in technical settings.</p></div></motion.article>
          </div>
        </section>

        <section className="chapter contact" id="contact">
          <div className="contact-kicker"><Eyebrow number="08">THE NEXT CHAPTER</Eyebrow></div>
          <h2>Have a good<br /><em>problem to solve?</em></h2>
          <p>Interested in software engineering, systems and applied AI. Open to connecting about opportunities, ideas and collaboration.</p>
          <div className="final-actions"><a className="final-card" href="#work"><Code2 size={21} /><span>01</span><b>Explore projects</b><small>Take a closer look at what I've built</small><ArrowUpRight className="card-arrow" size={18} /></a><a className="final-card featured" href="/resume.pdf" target="_blank" rel="noreferrer"><FileText size={21} /><span>02</span><b>View resume</b><small>Open my one-page CV</small><ArrowUpRight className="card-arrow" size={18} /></a></div>
          <div className="contact-email-row"><div><span className="contact-overline">FOR OPPORTUNITIES & COLLABORATION</span><a href={`mailto:${EMAIL}`} className="contact-email">{EMAIL}</a></div><button className="copy-email" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "COPIED" : "COPY EMAIL"}</button></div>
          <div className="contact-strip"><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LINKEDIN</span><ArrowUpRight size={14} /></a><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /><span>GITHUB</span><ArrowUpRight size={14} /></a><a href={`mailto:${EMAIL}`}><Mail size={17} /><span>SEND AN EMAIL</span><ArrowUpRight size={14} /></a></div>
          <footer className="site-footer"><span>© 2026 MONISH V.</span><span>DESIGNED & BUILT WITH INTENTION.</span><a href="#top">BACK TO TOP ↑</a></footer>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
