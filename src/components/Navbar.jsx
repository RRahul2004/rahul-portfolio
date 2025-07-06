import {cn} from '@/lib/utils';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems =[
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Experience", href:"#experience"},
    {name: "Contact", href: "#contact"},


]


export const Navbar = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll =() =>{
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    
    return( 
        <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}> 
        
            <div className="w-full px-4 flex items-center justify-between">
        
                <a className=" text-xl  font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Rahul Ramkumar</span> Portfolio 
                    </span>
                </a>

                {/*desktop nav*/}
                <div className="text-lg hidden md:flex items-center space-x-8 ml-auto px-4 ">
                    {navItems.map((item,key)=>(
                        <a key ={key} href={item.href} className="text-foreground/80 hover:text-primary transition-color duration-300">{item.name}</a>
                    ))}
                    <div className="flex items-center space-x-6 px-6">
                        <a href="https://www.linkedin.com/in/rrahul04/" target="_blank" className="p-3 rounded-full bg-primary/10 ">
                            <Linkedin className="h-6 w-6 text-primary   " />
                        </a>
                        <a href="https://github.com/RRahul2004" target="_blank" className="p-3 rounded-full bg-primary/10 ">
                            <Github   className="h-6 w-6 text-primary   " />
                        </a>
                        <a href="mailto:rahulramkumar04@gmail.com" target="_blank" className="p-3 rounded-full bg-primary/10 ">
                            <Mail className="h-6 w-6 text-primary   " />
                        </a>
                    </div>
                </div>
                {/*mobile nav*/}
                
                <button onClick={()=> setIsMenuOpen((prev)=>!prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}> {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}  </button>
                <div className={cn("fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        )}>
                    <div className="flex flex-col  space-y-8 text-xl ">
                        {navItems.map((item,key)=>(
                         <a key ={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)} >{item.name}</a>
                        ))}
                        <div className=" flex space-x-0">
                            <a href="https://www.linkedin.com/in/rrahul04/" target="_blank" className="p-3 rounded-full bg-primary/10 ">
                                <Linkedin className="h-6 w-6 text-primary   " />
                            </a>
                            <a href="https://github.com/RRahul2004" target="_blank" className="p-3 rounded-full bg-primary/10 ">
                                <Github   className="h-6 w-6 text-primary   " />
                            </a>
                            <a href="mailto:rahulramkumar04@gmail.com" target="_blank" className="p-3 rounded-full bg-primary/10 ">
                                <Mail className="h-6 w-6 text-primary   " />
                            </a>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </nav>
    );
}