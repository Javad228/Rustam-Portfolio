'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Menu, 
  X, 
  Mail, 
  MapPin, 
  Calendar,
  Award,
  BookOpen,
  Briefcase,
  Code,
  User,
  ChevronRight,
  Fuel,
  Container,
  Factory
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Navigation items
  const navItems = useMemo(() => [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ], []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Rustam Baghirov
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 border-t border-slate-700"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Expertise Animation Section */}
      <ExpertiseSection />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2025 Rustam Baghirov. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Rustam <span className="text-blue-400">Baghirov</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
              Production Chief Engineer
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl">
              Leading oil storage operations at SOCAR Downstream with expertise in 
              400+ storage tanks, pipeline systems, and digital transformation initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start mb-8">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={20} />
                <span>Baku, Azerbaijan</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail size={20} />
                <span>rystm7@gmail.com</span>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Right Side - Headshot and Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-blue-400/30 animate-pulse delay-200"></div>
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl">
                <Image
                  src="/rustam-headshot.png"
                  alt="Rustam Baghirov"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Icons around the image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 right-8 bg-slate-800 p-3 rounded-lg shadow-lg"
              >
                <Container className="text-blue-400" size={24} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 left-8 bg-slate-800 p-3 rounded-lg shadow-lg"
              >
                <Fuel className="text-green-400" size={24} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -left-4 bg-slate-800 p-3 rounded-lg shadow-lg"
              >
                <Factory className="text-orange-400" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Expertise Animation Section
function ExpertiseSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated Oil Pipeline Background */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 400">
            <motion.path
              d="M0,200 Q300,150 600,200 T1200,200"
              stroke="#3B82F6"
              strokeWidth="20"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <circle r="10" fill="#3B82F6">
              <animateMotion dur="4s" repeatCount="indefinite" path="M0,200 Q300,150 600,200 T1200,200" />
            </circle>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Expertise in <span className="text-blue-400">Oil Storage & Tankage</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Leading the digital transformation of oil storage operations with cutting-edge tank management systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Storage Tanks Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl"
                ></motion.div>
                <Container className="w-full h-full text-blue-400 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">400+</h3>
              <p className="text-blue-400 font-semibold mb-2">Storage Tanks</p>
              <p className="text-slate-300 text-sm">Managing massive oil storage infrastructure across HAOR and regional terminals</p>
            </div>
          </motion.div>

          {/* Digital Systems Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-green-400/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="w-full h-full border-4 border-green-400/30 rounded-full border-dashed"></div>
                </motion.div>
                <Code className="w-12 h-12 text-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">TGS & Database</h3>
              <p className="text-green-400 font-semibold mb-2">Digital Integration</p>
              <p className="text-slate-300 text-sm">Pioneering tank gauging systems and real-time database management</p>
            </div>
          </motion.div>

          {/* Efficiency Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-orange-400/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl"
                ></motion.div>
                <Fuel className="w-full h-full text-orange-400 relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">20%</h3>
              <p className="text-orange-400 font-semibold mb-2">Throughput Increase</p>
              <p className="text-slate-300 text-sm">Optimized pumping schedules and tank farm logistics for maximum efficiency</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Oil and Gas Engineer with 3 years of experience in operations, pre-commissioning, and commissioning 
                of pipelines and tankage systems. Proficient in optimizing production workflows, leading engineering 
                initiatives, and coordinating with subcontractors for seamless project execution.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Proven leadership in training program coordination and delivering efficient engineering solutions 
                in high-stakes environments. Currently serving as Production Chief Engineer at SOCAR Downstream, 
                driving operational efficiency and digital transformation initiatives.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-lg border border-slate-600/50 hover:border-blue-400/50 transition-all"
              >
                <Briefcase className="text-blue-400 mb-4" size={32} />
                <h4 className="text-white font-semibold mb-2">3+ Years</h4>
                <p className="text-slate-400 text-sm">Professional Experience</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-lg border border-slate-600/50 hover:border-blue-400/50 transition-all"
              >
                <Award className="text-blue-400 mb-4" size={32} />
                <h4 className="text-white font-semibold mb-2">10+ Certificates</h4>
                <p className="text-slate-400 text-sm">Professional Certifications</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-lg border border-slate-600/50 hover:border-blue-400/50 transition-all"
              >
                <BookOpen className="text-blue-400 mb-4" size={32} />
                <h4 className="text-white font-semibold mb-2">Master&apos;s Degree</h4>
                <p className="text-slate-400 text-sm">Oil & Gas Engineering</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-lg border border-slate-600/50 hover:border-blue-400/50 transition-all"
              >
                <User className="text-blue-400 mb-4" size={32} />
                <h4 className="text-white font-semibold mb-2">200+ Trainees</h4>
                <p className="text-slate-400 text-sm">Successfully Trained</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Experience Section Component
function ExperienceSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Production Chief Engineer",
      company: "SOCAR Downstream (HAOR)",
      period: "05.2025 – Present",
      responsibilities: [
        "Collaborate with Transformation Department to align operational strategies with corporate sustainability and development goals",
        "Strengthen Digitalization by scaling Tank Database and TGS integration across HAOR and regional terminals",
        "Develop Technical Workforce through mentorship of junior engineers and cross-functional training sessions",
        "Coordinate with Multi-Disciplinary Teams and EPC contractors (Technip Energies, Tekfen)",
        "Drive Operational Efficiency by optimizing pumping schedules and tank farm logistics, increasing throughput capacity by 20%"
      ]
    },
    {
      title: "Production Engineer",
      company: "SOCAR Downstream (HAOR)",
      period: "10.2022 – 05.2025",
      responsibilities: [
        "Oversee daily operations in the commodity area, ensuring regulatory compliance and optimizing process efficiency",
        "Coordinate with subcontractors and vendors to align design and operational processes",
        "Lead SDM Tankage Area Training Program at STAR Refinery (Turkey) for over 200 blue-collar staff",
        "Spearhead digitalization projects, developing Tank Database and TGS systems for over 300 storage tanks",
        "Direct pre-commissioning and commissioning of pipelines, tank farms, and utility pumps",
        "Participate in HAZOP reviews with Technip Energies and Tekfen Engineering"
      ]
    },
    {
      title: "Manager and Teacher",
      company: "CELT Colleges & High School",
      period: "01.2019 – 06.2022",
      responsibilities: [
        "Oversaw curriculum implementation and supervised a team of 12 teachers and over 150 students",
        "Delivered instruction in General English, SAT, IELTS, TOEFL, and GMAT",
        "Streamlined academic planning through scheduling, enrollment, and administrative coordination",
        "Led social media marketing initiatives to boost school visibility and outreach"
      ]
    },
    {
      title: "Exam Invigilator",
      company: "British Council",
      period: "04.2018 – 10.2018",
      responsibilities: [
        "Ensured exam integrity through vigilant monitoring and secure handling of test materials",
        "Maintained a professional environment and supported candidates with excellent interpersonal skills"
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-blue-400"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <h4 className="text-blue-400 font-medium">{exp.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <ChevronRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Projects Section Component
function ProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Tank Optimization Projects – HAOR (SOCAR Downstream)",
      period: "2025–present",
      description: "Initiatives on tank replacement, maintenance, reconstruction, and construction"
    },
    {
      title: "ASOIU Thesis",
      period: "2025",
      description: "Study of the operational characteristics of the distribution terminals"
    },
    {
      title: "ASOIU Research Paper",
      period: "2025",
      description: "Mitigating Emissions and Product Losses in Oil Storage Tanks: The Role of Nitrogen, Noble Gases, and Industry Best Practices"
    },
    {
      title: "TechnipFMC Group Research",
      period: "2019",
      description: "Polylactic Acid as a Renewable Energy Resource"
    },
    {
      title: "ASOIU Project",
      period: "2019",
      description: "Natural Gas Engineering: From Reservoir to Transportation"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Key <span className="text-blue-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="text-blue-400" size={20} />
                  <span className="text-blue-400 text-sm font-medium">{project.period}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Education Section Component
function EducationSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const education = [
    {
      degree: "Master of Science, Oil and Gas Engineering",
      school: "Azerbaijan State Oil and Industry University",
      period: "2023 – 2025",
      gpa: "90%",
      details: [
        "Specialization in tankage operations, including design, optimization, and maintenance",
        "Technical expertise in pipeline systems, storage solutions, and facility management",
        "Research focused on safety enhancement, operational efficiency, and sustainable engineering practices"
      ]
    },
    {
      degree: "Bachelor of Science, Oil and Gas Engineering",
      school: "Azerbaijan State Oil and Industry University",
      period: "2016 – 2020",
      gpa: "86%",
      details: [
        "Core focus areas in reservoir engineering, downstream operations, and production systems",
        "Foundational knowledge in process design, engineering safety, and optimization techniques"
      ]
    }
  ];

  return (
    <section id="education" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="text-blue-400">Education</span>
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-800/50 rounded-lg p-6 border-r-4 border-blue-400"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-blue-400 font-medium mb-2">{edu.school}</h4>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <ChevronRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Section Component
function SkillsSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    "Interpersonal Skills",
    "Adaptability & Problem Solving",
    "Leadership & Training",
    "Commissioning Experience",
    "Process Optimization",
    "Digital Tools & Systems"
  ];

  const languages = [
    { name: "English", level: "Native or Bilingual Proficiency" },
    { name: "Turkish", level: "Full Professional Proficiency" },
    { name: "Russian", level: "Limited Working Proficiency" }
  ];

  const certificates = [
    "ICARO – Train the Trainer (2023)",
    "ICARO – Middle Management (2022)",
    "ICARO – Site Supervisors (2022)",
    "CELT Colleges – Teacher with Highest Student Results (2021)",
    "TechnipFMC – Master Technology Program (2019)",
    "BHOS & BP – Business Education for Engineers (2019)",
    "TPA – Drilling Techniques and Offshore Activities (2019)",
    "IELTS – Overall Band Score: 7.5 (2013)",
    "INEPO Turkey – 3rd Place in Solar Energy Innovation (2013)",
    "ITLTA & Dilset – Turkish Language C2 Level (2013)",
    "ITLTA & Dilset – Turkish Language C1 Level (2012)"
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Skills & <span className="text-blue-400">Certifications</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-slate-700/50 px-4 py-2 rounded-lg"
                  >
                    <span className="text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-slate-700/50 p-4 rounded-lg"
                  >
                    <h4 className="text-white font-semibold">{lang.name}</h4>
                    <p className="text-slate-400 text-sm">{lang.level}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Certifications</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    className="flex items-start gap-3 bg-slate-700/50 p-3 rounded-lg"
                  >
                    <Award size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });


  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Let&apos;s Connect</h3>
            <p className="text-slate-300 mb-12">
              I&apos;m always interested in discussing new opportunities, collaborations, 
              or simply connecting with fellow professionals in the oil and gas industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center gap-4">
                <div className="bg-blue-400/20 p-4 rounded-lg">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:rystm7@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    rystm7@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-400/20 p-4 rounded-lg">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-400">Baku, Azerbaijan</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a
                href="mailto:rystm7@gmail.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                <Mail size={20} />
                Send Me an Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}