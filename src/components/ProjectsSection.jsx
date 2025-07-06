import { useEffect, useRef, useState } from "react";
import { ArrowBigRight, ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pneumatic Humanoid Hand",
    description: "The Humanoid Hand Controller v1.0 is a custom-designed embedded control board built to manage a pneumatically actuated robotic hand with precision and responsiveness. At its core is an STM32 microcontroller, responsible for real-time coordination of sensory input and actuator commands. The board integrates five pressure sensors and two capacitive touch sensors to monitor interaction forces and contact feedback across the fingers. Each joint of the robotic hand features daisy-chained SPI communication, allowing high-resolution data collection from hall-effect sensors (for joint angles), pressure sensors, and capacitive touch sensors—all fed back to the controller for closed-loop control. To drive the pneumatic actuators, the system interfaces via I²C with a dedicated solenoid driver daughterboard using a PCA9685 PWM driver. This enables proportional control of solenoid valves, effectively regulating air pressure to each joint for soft and adaptive motion. The board also includes multiple modular connectors for ease of integration with sensors and actuators, along with selectable power options, debug interfaces, and expansion headers. Designed for advanced soft robotics applications, the Humanoid Hand Controller facilitates precise, sensor-rich manipulation with an emphasis on modularity, compact design, and real-time responsiveness.",
    images: ["/projects/hand-control-pcb.png"],
    tags: ["STM32", "Altium", "C"],
    //githubUrl: "#",
  },
  {
    id: 2,
    title: "6DOF Robotic Arm",
    description:
      "A 6-degree-of-freedom robotic arm designed for real-time pick-and-place tasks, controlled using a PS4 joystick. The system is built on an STM32 microcontroller running FreeRTOS, with firmware written in C for multitasking across motor control, input processing, and communication. Servo motors are controlled via a PCA9685 PWM driver over I2C, while an A4988 stepper driver powers the final axis. Joystick signals are filtered for smooth, noise-free motion. Power is managed using a 12V to 5V buck converter for reliable performance. Micro-ROS enables seamless integration with ROS 2, supporting remote control and real-time feedback. All mechanical parts were modeled in SolidWorks, and a custom PCB was designed in Altium to integrate drivers, power regulation, and logic control.",
    images: ["/projects/arm-cad.jpg","/projects/robotic-arm-flow.png","/projects/robot_pcb.png"],
    tags: ["C", "STM32", "ROS2", "Altium", "FreeRTOS"],
    githubUrl: "https://github.com/RRahul2004/6DOF_Robotic_Arm",
  },
  {
    id: 5,
    title: "2-Axis Gantry System",
    description: "This project implements a dual stepper motor control system using the STM32 Nucleo-F401RE board and L6470 stepper motor drivers in a daisy-chained SPI configuration. It adds analog speed control using two potentiometers connected to the ADC channels of the MCU. This setup enables precise, real-time control of both stepper motors’ speeds and directions through user input and SPI communication.",
    images: ["/projects/2-axis-sch.png"],
    tags: ["C", "STM32"],
    githubUrl: "https://github.com/RRahul2004/2_Axis_Gantry_Control",
  },
  {
    id: 6,
    title: "Custom RTOS",
    description: "A custom Real-Time Operating System (RTOS) was developed and deployed on the STM32F401RE Nucleo board to enable precise task scheduling and interrupt management for embedded applications. The RTOS was built from the ground up using low-level ARM Cortex-M4 assembly, allowing fine-grained control over the processor’s core features such as context switching, SysTick timer configuration, and interrupt priority handling. The system supported basic real-time functionalities including cooperative and preemptive multitasking, inter-task communication via semaphores, and task delay/sleep mechanisms. Task control blocks were manually managed in memory, with the stack pointer and program counter manipulated during context switches to enable seamless task transitions. Peripheral initialization, including USART for debugging and SysTick for system timing, was handled directly through register-level programming. This project demonstrates a deep understanding of embedded systems architecture, real-time scheduling theory, and low-level programming on ARM microcontrollers without relying on high-level RTOS libraries.",
    images: ["/projects/custom-rtos-hw.jpg"],
    tags: ["C", "Assembly"],
    githubUrl: "https://github.com/RRahul2004/Custom_RTOS",
  },
  {
    id: 3,
    title: "Brick Scanner",
    description: "This project is a computer vision-based object dimension scanner designed to accurately measure small items, particularly LEGO bricks. It uses a combination of mechanical control and image processing to determine object dimensions in millimeters. The system features two stepper motors—one to rotate a platform holding the object and another to adjust the angle of a camera arm. These motors are controlled by an STM32F401 microcontroller using TMC2209 drivers for precise and quiet motion control. A Raspberry Pi 4 handles the image processing tasks, capturing frames as the object rotates and applying edge-based segmentation using OpenCV to detect outlines. A pre-calibrated curve is used to convert pixel measurements from the segmented images into real-world dimensions. This dual-controller setup enables real-time coordination between mechanical motion and visual analysis.",
    images: ["/projects/Automated-measurement-system.png", "/projects/measurement-sch.png"],
    tags: ["C","KiCad", "Fusion 360", "RPi", "STM32","OpenCV",],
    githubUrl: "https://github.com/RRahul2004/Brick-Scanner",
  },
  {
    id: 4,
    title: "Robotic Chess System",
    description: "This project presents a fully automated Robotic Chess System built using a LEGO EV3 kit and programmed in C, combining robotics, computer vision, and artificial intelligence. The robot plays chess autonomously by physically moving pieces on a custom-made board based on visual input and strategic calculations. The mechanical setup consists of an X-Y gantry system powered by two EV3 motors, enabling precise horizontal and vertical movement across the chessboard. A servo motor with an electromagnet is mounted on the gantry to lift and move chess pieces from underneath the board using magnetic attraction. The entire gantry assembly and chess pieces were 3D printed, ensuring a lightweight and functional design, while the chessboard itself was laser-cut from acrylic for precision and durability. On the software side, the system uses a Logitech USB camera connected to a laptop, running OpenCV to detect and track the position of all chess pieces on the board in real time. Once a move is identified, the board state is passed to the Stockfish chess engine, which calculates the optimal next move for the robot. The resulting move is then communicated to the LEGO EV3 brick via emulated joystick commands, which executes the motion via coordinated control of the gantry motors and servo. This integration of vision-based recognition, mechanical actuation, and AI-driven decision-making creates a seamless and interactive chess-playing experience, demonstrating practical applications of embedded systems, mechatronics, and intelligent automation.",
    images: ["/projects/Chessbot.jpg", "/projects/chess-1.JPG", "/projects/chess-2.JPG"],
    tags: ["LEGO EV3", "C", "Shapr3D"],
    githubUrl: "https://github.com/RRahul2004/Chess-Bot",
  },
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);
  const detailRef = useRef(null);

  useEffect(() => {
    if (activeProject && detailRef.current) {
      detailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setCurrentImageIndex(0);
  }, [activeProject]);

  useEffect(() => {
    const handleScroll = () => {
      if (!activeProject || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const fullyOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;
      if (fullyOutOfView) setActiveProject(null);
    };
    if (activeProject) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject || activeProject.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % activeProject.images.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [activeProject]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-4 relative scroll-mt-20 transition-colors duration-700"
      style={{
        backgroundColor: activeProject
          ? "hsl(var(--card))"
          : "hsl(var(--background))",
      }}
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        {!activeProject ? (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project was carefully
              created with attention to detail and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
                >
                  <div className="relative w-full h-48 bg-white">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover absolute top-0 left-0"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://github.com/RRahul2004"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
              >
                Check My Github <ArrowBigRight />
              </a>
            </div>
          </>
        ) : (
          <div
            ref={detailRef}
            className="min-h-screen flex flex-col justify-start pt-12 md:pt-24"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0 opacity-100 transition-opacity duration-700"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-5xl w-full mx-auto px-4 animate-fade-in-up">
              <button
                onClick={() => setActiveProject(null)}
                className="mb-6 text-foreground hover:text-primary transition-colors flex ml-auto"
                aria-label="Close"
              >
                <X size={28} />
              </button>

              {/* ✅ Responsive only here */}
              <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] xl:h-[75vh] bg-white rounded-xl mb-8 overflow-hidden shadow-lg">
                {activeProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Slide ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      i === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              <h3 className="text-4xl font-bold mb-4 text-white">
                {activeProject.title}
              </h3>
              <p className="text-muted mb-8 text-lg leading-relaxed text-white/90">
                {activeProject.description}
              </p>

              <div className="flex space-x-4">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline text-lg"
                >
                   <Github size={40} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
