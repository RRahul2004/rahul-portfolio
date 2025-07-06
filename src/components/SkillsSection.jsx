import { useState } from "react";
import {cn} from "@/lib/utils"
const skills =[
    {name: "C", level: 95, category:"software", },
    {name: "C++", level: 90, category:"software", },
    {name: "Python", level: 85, category:"software", },
    {name: "FreeRTOS", level: 91, category:"software", },
    {name: "ROS/ROS2", level: 83, category:"software", },
    {name: "Git", level: 96, category:"software", },
    {name: "GDB", level: 96, category:"software", },
    {name: "MATLAB", level: 92, category:"software", },
    {name: "VHDL", level: 80, category:"software", },
    {name: "STM32", level: 95, category:"technologies", },
    {name: "Rasberry Pi", level: 93, category:"technologies", },
    {name: "Arduino", level: 97, category:"technologies", },
    {name: "OpenCV", level: 85, category:"technologies", },
    {name: "FPGA", level: 80, category:"technologies", },
    {name: "Linux", level: 90, category:"technologies", },
    {name: "Pandas", level: 90, category:"technologies", },
    {name: "NumPy", level: 95, category:"technologies", },
    {name: "Matplotlib", level: 90, category:"technologies", },
    {name: "Docker", level: 85, category:"technologies", },
    {name: "YoloV8", level: 85, category:"technologies", },
    {name: "Cadence Allegro PCB Designer", level: 90, category:"hardware", },
    {name: "Altium", level: 96, category:"hardware", },
    {name: "KiCad", level: 94, category:"hardware", },
    {name: "Oscilloscope", level: 98, category:"hardware", },
    {name: "Soldering", level: 95, category:"hardware", },
    {name: "DMM", level: 95, category:"hardware", },
    {name: "Logic Analyzer", level: 95, category:"hardware", },
    {name: "UART", level: 97, category:"protocols", },
    {name: "SPI", level: 97, category:"protocols", },
    {name: "I2C", level: 97, category:"protocols", },
    {name: "CAN", level: 90, category:"protocols", },
    {name: "MavLink", level: 87, category:"protocols", },
    {name: "USB", level:90, category:"protocols", },
    {name: "LPDDR", level: 80, category:"protocols", },
    {name: "PCIE", level: 80, category:"protocols", },
    {name: "SolidWorks", level: 80, category:"mechanical", },
    {name: "Fusion 360", level: 85, category:"mechanical", },
    {name: "Shapr3D", level: 78, category:"mechanical", },
    {name: "GD&T", level: 80, category:"mechanical", },
]

const categories=["all", "software", "technologies", "hardware", "protocols", "mechanical"]


export const SkillsSection = ()=>{
    const [activeCategory, setActiveCategory] =useState("all")
    const filteredSkills = skills.filter((skill)=> activeCategory ==="all" || skill.category=== activeCategory);
    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) =>(
                        <button key={key} onClick={()=> setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory===category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skills,key)=>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skills.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skills.level + "%"}} />   
                    
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skills.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}