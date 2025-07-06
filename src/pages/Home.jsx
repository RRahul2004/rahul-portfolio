import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";

export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">

        {/*  Theme Toggle */}
        <ThemeToggle />

        {/*  Background Effects */}
        <StarBackground />
        {/*  NavBar */}
        <Navbar />
        {/*  Content */}
        <main>
            <HeroSection />   
            <AboutMe /> 
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
        </main>
        {/* Footer */}
    </div>;
};