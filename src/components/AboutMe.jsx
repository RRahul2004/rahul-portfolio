import { Bot, Briefcase, Code, Cpu, Github, Linkedin, User } from "lucide-react";


export const AboutMe = () =>{
    return(
         <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl  ">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                     About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-col md:grid-cols-2  gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">University of Waterloo Mechatronics Engineering Student</h3>

                        <p className="text-muted-foreground ">
                            From a young age during highschool I became interested in robotics and other electronic systems via joining clubs and attending summer camps. This stemmed my passion towards hardware and embedded software in robotic applications.
                        </p>

                        <p className="text-muted-foreground">
                            I am eager to create elegant solutions to complex problems and am constantly learning new technolgies and skills to make myself a well-rounded  within the robotics and electronics field.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="public\Rahul_Ramkumar_Resume.pdf"  target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                View Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Bot  className="h-6 w-6 text-primary   " />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Robotics</h4>
                                    <p className="text-muted-foreground">
                                        Creating innovative robotic control systems with modern technolgies to accomplish specific tasks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Code className="h-6 w-6 text-primary   " />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Embedded Software</h4>
                                    <p className="text-muted-foreground">
                                        Developing real time embedded software applications in C with a variety of microcontrollers and interfacing with sensors via various communication protocols. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Cpu className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Hardware</h4>
                                    <p className="text-muted-foreground">
                                        Designing PCBs with various electronic deisgn autmation software, simulating circuits, component selection, and schematic capture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    );
}