'use client'
import data from '@/data/data.json'
import SectionHeader from './UI/SectionHeader'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

const AboutMe = () => {

    const { about } = data.data
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const certifications = [
        { title: "NPTEL Java", issuer: "NPTEL" },
        { title: "Meta Frontend Developer", issuer: "Meta" },
        { title: "GitHub Foundations", issuer: "GitHub" }
    ]

    const achievements = [
        { label: "Led", value: "8-member team", desc: "in academic projects" },
        { label: "Built", value: "15+ APIs", desc: "production-grade services" },
        { label: "CGPA", value: "7.51", desc: "B.Tech IT, OIST Bhopal" },
        { label: "Academic", value: "95.8% & 95.4%", desc: "12th and 10th scores" }
    ]

    return (
        <section ref={sectionRef} id="about-me" className="bg-black text-white py-8 overflow-hidden">
            <div className="mx-auto px-6 md:px-8 lg:px-16">
                <SectionHeader title={'about-me'} description={''} linkText={'read-more'} link={''} />

                <div className="flex flex-col md:flex-row">
                    {/* Image Section with Animation */}
                    <div className={`p-0 md:p-6 w-full xl:w-34/100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
                            <Image
                                src="https://res.cloudinary.com/dlcnv2mkm/image/upload/v1768297856/profile_photo_igswnl.jpg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%' }}
                                className='relative rounded-lg object-cover w-full lg:w-140 h-full group-hover:scale-105 transition duration-500 ease-in-out'
                                alt="Balram Prajapati - Full-Stack Developer Headshot"
                            />
                        </div>
                    </div>

                    <div className={`p-0 md:p-6 mt-6 md:mt-0 w-full xl:w-66/100 align-middle items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        <div className="space-y-6">

                            {/* Intro Card with Gradient Border Animation */}
                            <div className="relative group p-4 rounded-lg border border-[var(--accent)]/20 hover:border-[var(--accent)]/60 transition-all duration-500 hover:shadow-lg hover:shadow-[var(--accent)]/20 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                                <p className="relative text-sm md:text-base font-mono text-gray-300">
                                    <span className="text-[var(--accent)] font-bold animate-pulse">Hello! </span>
                                    {about.main}
                                </p>
                            </div>

                            {/* Skills and Journey with Slide Animation */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative group p-4 rounded-lg border border-[var(--accent)]/20 hover:border-[var(--accent)]/60 transition-all duration-500 hover:shadow-lg hover:shadow-[var(--accent)]/20 hover:scale-105 animate-fade-in-left" style={{animationDelay: '0.2s'}}>
                                    <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--accent)] to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                                    <h3 className="relative text-xl font-mono text-[var(--accent)] mb-2 group-hover:text-white transition-colors duration-300">
                                        #skills
                                    </h3>
                                    <ul className="relative space-y-2 font-mono">
                                        {about.skills.map((skill, index) => (
                                            <li className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300 hover:translate-x-2" key={index} style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                                                <span className="text-[var(--accent)] mr-2 animate-pulse">▸</span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="relative group p-4 rounded-lg border border-[var(--accent)]/20 hover:border-[var(--accent)]/60 transition-all duration-500 hover:shadow-lg hover:shadow-[var(--accent)]/20 hover:scale-105 animate-fade-in-right" style={{animationDelay: '0.2s'}}>
                                    <div className="absolute -inset-0.5 bg-gradient-to-bl from-purple-600 to-[var(--accent)] rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                                    <h3 className="relative text-xl font-mono text-[var(--accent)] mb-2 group-hover:text-white transition-colors duration-300">
                                        #journey
                                    </h3>
                                    <p className="relative text-gray-300 text-sm font-mono group-hover:text-white transition-colors duration-300">
                                        {about.journey}
                                    </p>
                                </div>
                            </div>

                            {/* Achievements Grid with Hover Effects */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="relative group p-3 rounded-lg border border-[var(--accent)]/20 text-center hover:border-[var(--accent)] transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-[var(--accent)]/30 cursor-pointer" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                                        <div className="absolute -inset-0.5 bg-gradient-to-tr from-[var(--accent)] to-purple-600 rounded-lg opacity-0 group-hover:opacity-40 blur transition duration-500"></div>
                                        <p className="relative text-[var(--accent)] font-bold text-sm group-hover:scale-110 transition-transform duration-300">{achievement.label}</p>
                                        <p className="relative text-gray-100 font-mono text-xs md:text-sm font-bold group-hover:text-white transition-colors duration-300">{achievement.value}</p>
                                        <p className="relative text-gray-400 text-xs group-hover:text-gray-200 transition-colors duration-300">{achievement.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications with Stagger Animation */}
                            <div className="relative group p-4 rounded-lg border border-[var(--accent)]/20 hover:border-[var(--accent)]/60 transition-all duration-500 hover:shadow-lg hover:shadow-[var(--accent)]/20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-[var(--accent)] rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                                <h3 className="relative text-xl font-mono text-[var(--accent)] mb-3 group-hover:text-white transition-colors duration-300">
                                    #certifications
                                </h3>
                                <div className="relative grid grid-cols-3 gap-2">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="p-2 bg-[var(--accent)]/10 rounded border border-[var(--accent)]/20 hover:bg-[var(--accent)]/20 hover:border-[var(--accent)] hover:scale-105 transition-all duration-300 cursor-pointer" style={{animationDelay: `${0.7 + index * 0.1}s`}}>
                                            <p className="text-gray-100 text-xs font-mono font-bold hover:text-white transition-colors duration-300">{cert.title}</p>
                                            <p className="text-gray-400 text-xs hover:text-gray-200 transition-colors duration-300">{cert.issuer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Passion with Glow Effect */}
                            <div className="relative group p-4 rounded-lg border border-[var(--accent)]/20 hover:border-[var(--accent)]/60 transition-all duration-500 hover:shadow-lg hover:shadow-[var(--accent)]/20 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-pink-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                                <h3 className="relative text-xl font-mono text-[var(--accent)] mb-2 group-hover:text-white transition-colors duration-300">
                                    #passion
                                </h3>
                                <p className="relative text-gray-300 text-sm font-mono group-hover:text-white transition-colors duration-300">
                                    {about.passion}
                                </p>
                            </div>

                            {/* Call to Action with Animated Button */}
                            <div className="relative group p-4 rounded-lg border border-[var(--accent)]/20 flex justify-between items-center hover:border-[var(--accent)] transition-all duration-500 hover:shadow-lg hover:shadow-[var(--accent)]/30 animate-fade-in-up" style={{animationDelay: '1s'}}>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                                <p className="relative text-gray-300 text-sm font-mono group-hover:text-white transition-colors duration-300">
                                    {about.connect}
                                </p>
                                <a
                                    href="#contact"
                                    className="relative bg-[var(--accent)] text-white px-4 py-2 rounded-md font-mono text-sm hover:bg-purple-600 hover:scale-110 hover:shadow-lg hover:shadow-[var(--accent)]/50 transition-all duration-300 animate-bounce-slow"
                                >
                                    ↓
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
