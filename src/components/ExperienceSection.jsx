import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Hardware Engineer",
    company: "AMD",
    logo: "/experience/amd-logo.jpg",
    duration: "July 2025 – Present",
    location: "Markham, ON",
    description:
      "",
  },
  {
    role: " AI Hardware Engineer",
    company: "Untether AI",
    logo: "/experience/untether_ai_logo.jpg",
    duration: "May 2025 – July 2025",
    location: "Toronto, ON",
    description:
      "Electrical circuit deisgn and hardware for low-power, AI inference accelerators hardware based on RISC-V architecture for edge deployment",
  },
  {
    role: "Robotics Undergraduate Research Assistant ",
    company: "University of Waterloo",
    logo: "/experience/University_of_Waterloo_seal.svg.png",
    duration: "May 2025 – Present",
    location: "Waterloo, ON",
    description:
      "Researching soft robotics, humanoid hand, using pneumatic control systems.",
  },
  {
    role: "Electronics Hardware Engineer",
    company: "KA Imaging Inc.",
    logo: "/experience/ka_imaging_inc__logo.jpg",
    duration: "Sep 2024 – Dec 2024",
    location: "Waterloo, ON",
    description:
      "Electrical design and embedded software for x-ray imaging systems.",
  },
  {
    role: "Firmware and Software Team Member",
    company: "University of Waterloo Robotics Deisgn Team",
    logo: "/experience/UWRT Round Photo.png",
    duration: "Sep 2024 – Dec 2024",
    location: "Waterloo, ON",
    description:
      "Firmware and embedded software for autonomous rovers.",
  },
  {
    role: "Software Developer",
    company: "RBC",
    logo: "/experience/RBC-Logo.png",
    duration: "Jan 2024 – Apr 2024",
    location: "Toronto, ON",
    description:
      "Backend API development and DevOps for open banking.",
  },
  {
    role: "Software Engineering Intern",
    company: "LTI",
    logo: "/experience/LTI_Logo.jpg",
    duration: "May 2023 – August 2023",
    location: "Remote",
    description:
      "Backend API and internal tools development.",
  },
  {
    role: "Embedded Flight Software Team Member ",
    company: "Waterloo Aerial Robotics Group",
    logo: "/experience/waterloo_aerial_robotics_group_logo.jpg",
    duration: "Jan 2023 – Present",
    location: "Waterloo, ON",
    description:
      "Firmware and embedded software for autonomous drones",
  },
  
];

const ExperienceCard = ({ exp, isLeft }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`mb-14 flex flex-col md:flex-row items-center justify-between relative group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Glowing Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-20 transition-transform duration-300 shadow-[0_0_10px_rgba(255,255,255,0.8)] group-hover:scale-150"></div>

      {/* Left or Right Side Card */}
      <div
        className={`w-full md:w-[45%] ${
          isLeft ? "md:pr-8 md:order-none" : "md:order-2 md:pl-8"
        }`}
      >
        <div className="bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-2">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-10 h-10 rounded-full object-cover border"
            />
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {exp.role}
              </h3>
              <p className="text-primary font-medium">{exp.company}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            {exp.duration} • {exp.location}
          </p>
          <p className="text-foreground/80 hidden sm:block">{exp.description}</p>
        </div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-[45%]"></div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Relevant <span className="text-primary">Experience</span>
        </h2>

        <div className="relative before:absolute before:content-[''] before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-[2px] before:bg-foreground before:opacity-50">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} isLeft={idx % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};
