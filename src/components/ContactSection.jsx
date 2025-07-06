import { Home, Mail, MapPin, Phone, Send } from "lucide-react";
import{cn} from "@/lib/utils"


export const ContactSection =()=>{

    
    return( 
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
      Get In <span className="text-primary"> Touch</span>
    </h2>

    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Feel free to reach out. I'm always open to discussing new opportunities.
    </p>

    <div className="flex items-center justify-center">
      <div className="space-y-8 text-center">
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

        <div className="space-y-6">
          <div className="flex items-start  justify-center">
            <div className="p-3 rounded-full bg-primary/10 text-left">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-medium">Email</h4>
              <a href="mailto:rahulramkumar04@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                rahulramkumar04@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 text-left">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-medium">Phone</h4>
              <a href="tel:+16477037828" className="text-muted-foreground hover:text-primary transition-colors">
                +1 (647)-703-7828
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 text-left">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">Toronto, ON, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}