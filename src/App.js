import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const skillCategories = [
  {
    category: 'Backend',
    skills: ['.NET Core', 'ASP.NET Web API', 'Entity Framework', 'LINQ'],
  },
  {
    category: 'Frontend',
    skills: ['React JS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Database',
    skills: ['SQL Server', 'Stored Procedures', 'Query Optimization'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Azure basics', 'ServiceNow', 'CI/CD'],
  },
  {
    category: 'Concepts',
    skills: ['REST API', 'JWT Authentication', 'Agile'],
  },
];

const projects = [
  {
    title: 'Gemar USA Warehouse Management',
    description: 'Warehouse management system with packing slip generation, barcode scanning, and inventory workflows for faster fulfillment operations.',
    tech: ['.NET Core', 'SQL Server', 'React'],
    link: 'https://github.com/hariram-shankar/gemar-usa-warehouse-management',
  },
  {
    title: 'Invoice Management System',
    description: 'Role-based invoice workflow for users, vendors, and approvers with REST API validation and SQL debugging support.',
    tech: ['REST API', 'Validation', 'SQL Server'],
    link: 'https://github.com/hariram-shankar/invoice-management-system',
  },
  {
    title: 'E-Cart Web Application',
    description: 'ASP.NET MVC e-commerce application with CRUD operations for products, orders, and customer management.',
    tech: ['ASP.NET MVC', 'C#', 'CRUD'],
    link: 'https://github.com/hariram-shankar/e-cart-web-application',
  },
  {
    title: 'One Vision Agency',
    description: 'Production support and EDI integration solution with BizTalk workflows for reliable data exchange across systems.',
    tech: ['EDI', 'BizTalk', 'Production Support'],
    link: 'https://github.com/hariram-shankar/one-vision-agency',
  },
];

const experiences = [
  {
    role: '.NET Developer',
    company: 'MSC Technology',
    period: 'Current role',
    details: [
      'Production support for enterprise systems',
      'SQL debugging and query optimization',
      'BizTalk monitoring and incident resolution',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Majestic People Infotech',
    period: 'Previous role',
    details: [
      'Developed packing slip workflows for logistics operations',
      'Implemented API features for partner integration',
      'Built React UI enhancements for internal systems',
    ],
  },
  {
    role: 'Intern',
    company: 'J Square',
    period: 'Internship',
    details: [
      'Built e-cart functionality using ASP.NET MVC',
      'Implemented CRUD operations for product and order management',
    ],
  },
];

const highlights = [
  { value: '2+', label: 'Years of experience' },
  { value: 'Logistics', label: 'Industry experience' },
  { value: 'Reliable', label: 'Production support' },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main className="portfolio-content">
        <About highlights={highlights} />
        <Skills skillCategories={skillCategories} />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
