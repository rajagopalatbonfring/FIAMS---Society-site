import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import Container from "../common/container";

export default function Footer() {
  const footerLinks = {
    about: [
      { label: "Mission & Vision", href: "#" },
      { label: "Leadership Board", href: "#" },
      { label: "History & Achievements", href: "#" },
      { label: "Accreditation", href: "#" },
    ],
    programs: [
      { label: "Arts Education", href: "#" },
      { label: "Management Studies", href: "#" },
      { label: "Integrated Curricula", href: "#" },
      { label: "Professional Development", href: "#" },
    ],
    resources: [
      { label: "Research Papers", href: "#" },
      { label: "Career Services", href: "#" },
      { label: "Industry Partnerships", href: "#" },
      { label: "Educational Tools", href: "#" },
    ],
    events: [
      { label: "Workshops", href: "#" },
      { label: "Exhibitions", href: "#" },
      { label: "Conferences", href: "#" },
      { label: "Cultural Events", href: "#" },
    ],
  };

  return (
    <footer className="bg-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          
          {/* Brand Section - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-3xl font-bold text-fiams-purple mb-4">FIAMS</h4>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              The Federation for Integrated Arts & Management Studies - Where Creativity Meets Leadership Excellence
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-fiams-purple text-white rounded-lg flex items-center justify-center hover:bg-fiams-gold transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-fiams-purple text-white rounded-lg flex items-center justify-center hover:bg-fiams-gold transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-fiams-purple text-white rounded-lg flex items-center justify-center hover:bg-fiams-gold transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-fiams-purple text-white rounded-lg flex items-center justify-center hover:bg-fiams-gold transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-fiams-charcoal mb-3">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-fiams-purple focus:ring-2 focus:ring-fiams-purple/20"
                />
                <button className="px-4 py-2 bg-fiams-purple text-white rounded-lg hover:bg-fiams-purple/90 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-fiams-purple transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-fiams-purple transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-fiams-purple transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events & Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">Events</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.events.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-fiams-purple transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">Contact</h4>
              <a href="mailto:info@fiams.org" className="flex items-center gap-3 text-sm text-gray-600 hover:text-fiams-purple transition-colors group">
                <div className="w-8 h-8 bg-fiams-purple/10 rounded-lg flex items-center justify-center group-hover:bg-fiams-purple/20 transition-colors">
                  <Mail size={16} className="text-fiams-purple" />
                </div>
                <span>info@fiams.org</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 text-sm text-gray-600 hover:text-fiams-purple transition-colors group">
                <div className="w-8 h-8 bg-fiams-purple/10 rounded-lg flex items-center justify-center group-hover:bg-fiams-purple/20 transition-colors">
                  <Phone size={16} className="text-fiams-purple" />
                </div>
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-600 group">
                <div className="w-8 h-8 bg-fiams-purple/10 rounded-lg flex items-center justify-center group-hover:bg-fiams-purple/20 transition-colors">
                  <MapPin size={16} className="text-fiams-purple" />
                </div>
                <span>123 Arts Avenue<br />Creative District, CD 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2025 Federation for Integrated Arts & Management Studies. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-fiams-purple transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-fiams-purple transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-fiams-purple transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}