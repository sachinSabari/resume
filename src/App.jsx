import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Briefcase, GraduationCap, Award, Code, Download, ExternalLink, Calendar } from 'lucide-react';
import profileImage from './assets/Sachinsabari.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const profileData = {
    name: "Sachin Sabari",
    title: "Full Stack Developer",
    tagline: "Building innovative solutions with modern technologies",
    email: "sachin57805@gmail.com",
    phone: "9789463319",
    location: "Coimbatore",
    linkedin: "linkedin.com/in/johnanderson",
    github: "https://github.com/sachinSabari",
    website: "https://sachinsabari-resume-10.vercel.app/",
    avatar: profileImage
  };

  const about = {
    summary: "Passionate Full Stack Developer with 2+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Strong problem-solver with a track record of delivering high-quality software solutions.",
    highlights: [
      "Led development of 2 major enterprise applications",
      "Improved application performance by 40% through optimization",
      "Mentored 2 junior developers",
      "Open source contributor with  GitHub stars"
    ]
  };

  const experience = [
    {
      company: "Creosen pvt limited",
      position: "Full Stack Developer",
      duration: "April 2023 - Present",
      location: "Coimbatore",
      responsibilities: [
        "Developed RESTful APIs and React components for SaaS platform",
        "Optimized database queries improving response time by 35%",
        "Collaborated with UX team to implement responsive designs",
        "Participated in agile ceremonies and sprint planning"
      ],
      tech: ["React", "Express.js", "MongoDB", "Redux"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science Engineering",
      institution: "Coimbatore institute of engineering",
      duration: "2018 - 2021",
      gpa: "7.02/10",
      achievements: ["Computer Science Excellence Award"]
    },
    {
      degree: "Full stack developer",
      institution: "Nschool institutes",
      duration: "2023",
      type: "certification"
    }
  ];

  const skills = {
    "Frontend": ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Express", "Python",  "RESTful APIs"],
    "Database": ["MongoDB", "SQL", "MySQL"],
    "DevOps": [ "CI/CD", "Jenkins", "Git"],
    "Tools": ["VS Code", "Postman","putty", "Jira", "Figma"]
  };

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration, inventory management, and analytics dashboard",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      link: "https://ecommerce-demo.com",
      github: "https://github.com/username/ecommerce"
    },
    {
      name: "Task Management SaaS",
      description: "Collaborative task management tool with real-time updates, team collaboration, and productivity analytics",
      tech: ["React", "Socket.io", "MongoDB", "Express"],
      link: "https://taskmanager-demo.com",
      github: "https://github.com/username/taskmanager"
    },
    {
      name: "Weather Dashboard",
      description: "Real-time weather tracking application with interactive maps and 7-day forecasts",
      tech: ["React", "OpenWeather API", "Leaflet", "Chart.js"],
      link: "https://weather-demo.com",
      github: "https://github.com/username/weather"
    }
  ];

  const renderAbout = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">{about.summary}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {about.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg">
              <Award size={18} className="text-purple-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
      {experience.map((job, idx) => (
        <div key={idx} className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{job.position}</h3>
              <p className="text-blue-600 font-semibold">{job.company}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <Calendar size={14} />
                {job.duration}
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                <MapPin size={14} />
                {job.location}
              </div>
            </div>
          </div>
          <ul className="space-y-2 mb-4">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {job.tech.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md">
          <div className="flex items-start gap-4">
            <GraduationCap size={32} className="text-green-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
              <p className="text-green-600 font-semibold">{edu.institution}</p>
              <p className="text-gray-600 text-sm mt-1">{edu.duration}</p>
              {edu.gpa && <p className="text-gray-700 mt-2">GPA: {edu.gpa}</p>}
              {edu.achievements && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {edu.achievements.map((ach, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                      {ach}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-purple-600" />
              <h3 className="text-lg font-bold text-gray-800">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, idx) => (
                <span key={idx} className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={project.link} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium">
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a href={project.github} className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm font-medium">
                <Github size={16} />
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">

      {/* Header */}
      <div className="bg-slate-800 text-gray-100
 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Picture */}
            <img 
              src={profileData.avatar} 
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-lg"
            />
            
            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{profileData.name}</h1>
              <p className="text-xl text-blue-600 font-semibold mb-2">{profileData.title}</p>
              <p className="text-gray-600 mb-4">{profileData.tagline}</p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <a href={`mailto:${profileData.email}`} className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                  <Mail size={16} />
                  {profileData.email}
                </a>
                <a href={`tel:${profileData.phone}`} className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                  <Phone size={16} />
                  {profileData.phone}
                </a>
                <span className="flex items-center gap-1 text-gray-600">
                  <MapPin size={16} />
                  {profileData.location}
                </span>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-3 mt-4">
                <a href={`https://${profileData.linkedin}`} className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={`https://${profileData.github}`} className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Github size={20} />
                </a>
                <a href={`https://${profileData.website}`} className="p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors">
                  <Globe size={20} />
                </a>
              </div>
            </div>

            {/* Download Button */}
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold shadow-md">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 border-t pt-4 overflow-x-auto">
            {['about', 'experience', 'education', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2 rounded-t-lg font-medium transition-colors whitespace-nowrap ${
                  activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {activeSection === 'about' && renderAbout()}
        {activeSection === 'experience' && renderExperience()}
        {activeSection === 'education' && renderEducation()}
        {activeSection === 'skills' && renderSkills()}
        {activeSection === 'projects' && renderProjects()}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">© 2026 {profileData.name}. Built with React & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}
