'use client'
import { useEffect } from 'react';
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="home" className="pt-14 md:pt-24"><Hero /></div>
      <div id="skills" className="section-animate pt-14 md:pt-24 opacity-0"><SkillsSection /></div>
      <div id="projects" className="section-animate pt-14 md:pt-24 opacity-0"><ProjectsSection /></div>
      <div id="about-me" className="section-animate pt-14 md:pt-24 opacity-0"><AboutMe /></div>
      <div id="contact" className="section-animate pt-14 md:pt-24 opacity-0"><Contact /></div>    
    </>
  );
}
