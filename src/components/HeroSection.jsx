import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const fullText = "Hi I'm Rahul Ramkumar";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingSpeed = 100;

    if (isDeleting) typingSpeed = 50;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(fullText.slice(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // Highlight "Rahul" as purple
  const renderTypedText = () => {
    const rahulStart = fullText.indexOf("Rahul");
    const rahulEnd = rahulStart + "Rahul".length;

    return (
      <>
        {displayText.split("").map((char, i) => {
          const isRahulChar = i >= rahulStart && i < rahulEnd;
          return (
            <span
              key={i}
              className={isRahulChar ? "text-primary" : "text-foreground"}
            >
              {char}
            </span>
          );
        })}
        <span className="animate-pulse text-primary">|</span>
      </>
    );
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {renderTypedText()}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a 3rd Year Mechatronics Engineering Student at the University of Waterloo. I am currently working at AMD as a Hardware Engineering Co-op. 
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <a
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        href="#about"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};
