'use client'
import { useEffect, useState } from 'react'
import data from '@/data/data.json'
import Typewriter from './UI/Typewriter'
import DynamicButton from './UI/DynamicButton'
import VideoBG from './UI/VideoBG'

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { fullName, titleArray, resumeLink, socialLinks } = data.data;

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section id="home" className="hero-section overflow-hidden relative flex items-center justify-center h-svh md:min-h-screen text-center text-white">

            <div className="absolute inset-0 z-0 ml-4 md:ml-6 mb-12 mr-4 md:mr-6">
                <VideoBG />
            </div>

            {/* Animated floating elements */}
            <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
                <div className="floating-circle absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
                <div className="floating-circle absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float-medium"></div>
                <div className="floating-circle absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-float-fast"></div>
            </div>

            <div className={`relative z-10 px-4 md:px-8 lg:px-16 mb-8 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>

                <h1 className='hidden'>{fullName} - Full Stack Web Developer</h1>

                <div className="flex flex-col">
                    <h2 className={`text-xl md:text-2xl lg:text-5xl font-bold mb-6 font-mono order-1 transition-all duration-700 delay-100 ${
                        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>
                        Hello 👋 My Name is
                    </h2>
                    <h2 className={`text-5xl md:text-6xl lg:text-8xl font-bold mb-6 font-mono uppercase order-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-slow transition-all duration-700 delay-200 ${
                        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}>
                        {fullName}
                    </h2>
                </div>

                <div className={`transition-all duration-700 delay-300 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                    <Typewriter titleArray={titleArray} />
                </div>

                <div className={`flex justify-center gap-4 transition-all duration-700 delay-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                    <div className="animate-bounce-subtle">
                        <DynamicButton bgcolor={'white'} textcolor={'black'} text={'Resume'} link={resumeLink} />
                    </div>
                    <div className="animate-bounce-subtle" style={{animationDelay: '0.2s'}}>
                        <DynamicButton bgcolor={'black'} textcolor={'white'} text={'Github'} link={socialLinks.github} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
