// import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
// import Container from "../common/container";

// export default function Footer() {
//   const footerLinks = {
//     about: [
//       { label: "Mission & Vision", href: "#" },
//       { label: "Leadership Board", href: "#" },
//       { label: "History & Achievements", href: "#" },
//       { label: "Accreditation", href: "#" },
//     ],
//     programs: [
//       { label: "Arts Education", href: "#" },
//       { label: "Management Studies", href: "#" },
//       { label: "Integrated Curricula", href: "#" },
//       { label: "Professional Development", href: "#" },
//     ],
//     resources: [
//       { label: "Research Papers", href: "#" },
//       { label: "Career Services", href: "#" },
//       { label: "Industry Partnerships", href: "#" },
//       { label: "Educational Tools", href: "#" },
//     ],
//     events: [
//       { label: "Workshops", href: "#" },
//       { label: "Exhibitions", href: "#" },
//       { label: "Conferences", href: "#" },
//       { label: "Cultural Events", href: "#" },
//     ],
//   };

//   return (
//     <footer className="bg-white">
//       <Container>
//         {/* Main Footer Content */}
//         <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          
//           {/* Brand Section - Spans 3 columns */}
//           <div className="lg:col-span-3">
//             <h4 className="text-3xl font-bold text-fiams-purple mb-4">FIAMS</h4>
//             <p className="text-sm text-gray-600 mb-6 leading-relaxed">
//               The Federation for Integrated Arts & Management Studies - Where Creativity Meets Leadership Excellence
//             </p>
            
//             {/* Social Links */}
//             <div className="flex gap-3 mb-6">
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-fiams-purple text-white rounded-lg flex items-center justify-center hover:bg-fiams-gold transition-all duration-300 hover:scale-110 shadow-md"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={18} />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-fiams-purple text-white rounded-lg flex items-center justify-center hover:bg-fiams-gold transition-all duration-300 hover:scale-110 shadow-md"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={18} />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-fiams-purple text-white rounded-lg flex items-center justify-center hover:bg-fiams-gold transition-all duration-300 hover:scale-110 shadow-md"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={18} />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-fiams-purple text-white rounded-lg flex items-center justify-center hover:bg-fiams-gold transition-all duration-300 hover:scale-110 shadow-md"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={18} />
//               </a>
//             </div>

//             {/* Newsletter Signup */}
//             <div className="mt-6">
//               <p className="text-sm font-semibold text-fiams-charcoal mb-3">Stay Updated</p>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-fiams-purple focus:ring-2 focus:ring-fiams-purple/20"
//                 />
//                 <button className="px-4 py-2 bg-fiams-purple text-white rounded-lg hover:bg-fiams-purple/90 transition-colors">
//                   <ArrowRight size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* About Links */}
//           <div className="lg:col-span-2">
//             <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">About</h4>
//             <ul className="space-y-3">
//               {footerLinks.about.map((link) => (
//                 <li key={link.label}>
//                   <a 
//                     href={link.href} 
//                     className="text-sm text-gray-600 hover:text-fiams-purple transition-colors inline-flex items-center group"
//                   >
//                     <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Programs Links */}
//           <div className="lg:col-span-2">
//             <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">Programs</h4>
//             <ul className="space-y-3">
//               {footerLinks.programs.map((link) => (
//                 <li key={link.label}>
//                   <a 
//                     href={link.href} 
//                     className="text-sm text-gray-600 hover:text-fiams-purple transition-colors inline-flex items-center group"
//                   >
//                     <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources Links */}
//           <div className="lg:col-span-2">
//             <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">Resources</h4>
//             <ul className="space-y-3">
//               {footerLinks.resources.map((link) => (
//                 <li key={link.label}>
//                   <a 
//                     href={link.href} 
//                     className="text-sm text-gray-600 hover:text-fiams-purple transition-colors inline-flex items-center group"
//                   >
//                     <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Events & Contact */}
//           <div className="lg:col-span-3">
//             <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">Events</h4>
//             <ul className="space-y-3 mb-6">
//               {footerLinks.events.map((link) => (
//                 <li key={link.label}>
//                   <a 
//                     href={link.href} 
//                     className="text-sm text-gray-600 hover:text-fiams-purple transition-colors inline-flex items-center group"
//                   >
//                     <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Contact Info */}
//             <div className="mt-8 space-y-3">
//               <h4 className="font-bold text-fiams-charcoal mb-4 uppercase tracking-wider text-sm">Contact</h4>
//               <a href="mailto:info@fiams.org" className="flex items-center gap-3 text-sm text-gray-600 hover:text-fiams-purple transition-colors group">
//                 <div className="w-8 h-8 bg-fiams-purple/10 rounded-lg flex items-center justify-center group-hover:bg-fiams-purple/20 transition-colors">
//                   <Mail size={16} className="text-fiams-purple" />
//                 </div>
//                 <span>info@fiams.org</span>
//               </a>
//               <a href="tel:+15551234567" className="flex items-center gap-3 text-sm text-gray-600 hover:text-fiams-purple transition-colors group">
//                 <div className="w-8 h-8 bg-fiams-purple/10 rounded-lg flex items-center justify-center group-hover:bg-fiams-purple/20 transition-colors">
//                   <Phone size={16} className="text-fiams-purple" />
//                 </div>
//                 <span>+1 (555) 123-4567</span>
//               </a>
//               <div className="flex items-start gap-3 text-sm text-gray-600 group">
//                 <div className="w-8 h-8 bg-fiams-purple/10 rounded-lg flex items-center justify-center group-hover:bg-fiams-purple/20 transition-colors">
//                   <MapPin size={16} className="text-fiams-purple" />
//                 </div>
//                 <span>123 Arts Avenue<br />Creative District, CD 12345</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-200 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
//             <p>© 2025 Federation for Integrated Arts & Management Studies. All rights reserved.</p>
//             <div className="flex gap-6">
//               <a href="#" className="hover:text-fiams-purple transition-colors">Privacy Policy</a>
//               <a href="#" className="hover:text-fiams-purple transition-colors">Terms of Service</a>
//               <a href="#" className="hover:text-fiams-purple transition-colors">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// }

















// import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
// import Container from "../common/container";

// export default function Footer() {
//   const links = {
//     about: ["Mission & Vision", "Leadership", "History", "Accreditation"],
//     programs: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"],
//     resources: ["Research Papers", "Career Services", "Partnerships", "Tools & Guides"],
//     events: ["Workshops", "Exhibitions", "Conferences", "Cultural Events"],
//   };

//   return (
//     <footer className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200">
//       <Container>
//         <div className="py-20 lg:py-28">

//           {/* HERO SECTION – Brand + Newsletter (takes visual priority) */}
//           <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 lg:mb-20">
//             <div className="lg:col-span-7 xl:col-span-6 space-y-10">
//               {/* Logo & Tagline */}
//               <div className="text-left">
//                 <h2 className="text-6xl lg:text-8xl font-black text-fiams-purple tracking-tighter leading-none">
//                   FIAMS
//                 </h2>
//                 <p className="mt-4 text-lg lg:text-xl text-gray-700 font-medium max-w-lg leading-relaxed">
//                   Where creativity converges with leadership excellence.
//                 </p>
//               </div>

//               {/* Social Icons – Larger & Floating */}
//               <div className="flex gap-5">
//                 {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="group w-14 h-14 bg-fiams-purple text-white rounded-2xl flex items-center justify-center
//                                hover:bg-fiams-gold hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
//                   >
//                     <Icon size={24} className="group-hover:scale-110 transition-transform" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter – Prominent & Elegant */}
//             <div className="lg:col-span-5 xl:col-span-6">
//               <div className="bg-gradient-to-br from-fiams-purple/5 to-fiams-gold/5 rounded-3xl p-8 lg:p-10 border border-fiams-purple/10">
//                 <h3 className="text-2xl font-bold text-fiams-charcoal mb-3">Stay in the Loop</h3>
//                 <p className="text-gray-600 mb-6">Exclusive insights, events, and research delivered monthly.</p>
                
//                 <form className="flex flex-col sm:flex-row gap-4">
//                   <input
//                     type="email"
//                     placeholder="you@creative.com"
//                     className="flex-1 px-6 py-4 text-base rounded-2xl border border-gray-300 
//                                focus:outline-none focus:border-fiams-purple focus:ring-4 focus:ring-fiams-purple/20 
//                                transition-all duration-300 placeholder-gray-400"
//                   />
//                   <button className="px-8 py-4 bg-fiams-purple text-white font-semibold rounded-2xl 
//                                      hover:bg-fiams-purple/90 hover:shadow-xl active:scale-95 
//                                      transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
//                     Join List <ArrowRight size={20} />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* LINKS GRID – Clean 4-column modern layout */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 border-t border-gray-200 pt-16">
//             {Object.entries(links).map(([category, items]) => (
//               <div key={category}>
//                 <h4 className="text-left font-bold text-fiams-charcoal uppercase tracking-widest text-xs mb-8 opacity-80">
//                   {category}
//                 </h4>
//                 <ul className="space-y-5">
//                   {items.map((item) => (
//                     <li key={item}>
//                       <a
//                         href="#"
//                         className="group text-gray-700 hover:text-fiams-purple text-base font-medium 
//                                    flex items-center gap-3 transition-all duration-300"
//                       >
//                         <span className="w-2 h-2 bg-fiams-purple/40 rounded-full group-hover:bg-fiams-purple group-hover:scale-125 transition-all" />
//                         <span className="group-hover:translate-x-1 transition-transform">{item}</span>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* CONTACT + BOTTOM BAR */}
//           <div className="mt-20 pt-16 border-t border-gray-200">
//             <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-start">
//               {/* Contact Info */}
//               <div className="space-y-6">
//                 <h4 className="text-left font-bold text-fiams-charcoal uppercase tracking-widest text-xs">Contact</h4>
//                 <div className="space-y-5 text-gray-700">
//                   <a href="mailto:info@fiams.org" className="flex items-center gap-4 hover:text-fiams-purple transition-colors">
//                     <Mail size={20} className="text-fiams-purple" />
//                     <span className="font-medium">info@fiams.org</span>
//                   </a>
//                   <a href="tel:+15551234567" className="flex items-center gap-4 hover:text-fiams-purple transition-colors">
//                     <Phone size={20} className="text-fiams-purple" />
//                     <span className="font-medium">+1 (555) 123-4567</span>
//                   </a>
//                   <div className="flex items-start gap-4">
//                     <MapPin size={20} className="text-fiams-purple mt-1" />
//                     <span className="text-left font-medium leading-tight">
//                       123 Arts Avenue<br />
//                       Creative District, CD 12345
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Empty spacer */}
//               <div></div>

//               {/* Copyright + Legal */}
//               <div className="text-right lg:text-left space-y-4">
//                 <p className="text-sm text-gray-600 font-medium">
//                   © 2025 Federation for Integrated Arts & Management Studies<br />
//                   All rights reserved.
//                 </p>
//                 <div className="flex flex-wrap gap-6 justify-end lg:justify-start text-sm font-medium">
//                   <a href="#" className="text-gray-600 hover:text-fiams-purple transition-colors">Privacy</a>
//                   <a href="#" className="text-gray-600 hover:text-fiams-purple transition-colors">Terms</a>
//                   <a href="#" className="text-gray-600 hover:text-fiams-purple transition-colors">Cookies</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// }










import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";

const Container = ({ children }) => (
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

const links = {
  about: ["Mission & Vision", "Leadership Board", "History & Achievements", "Accreditation"],
  programs: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"],
  research : ["Research Papers", "Case Studies", "Art Journals", "Student Publications"],
  resources: ["Research Papers", "Career Services", "Industry Partnerships", "Educational Tools"],
  events: ["Workshops", "Exhibitions", "Conferences", "Cultural Events"],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden rounded-t-2xl">
      {/* Newsletter Section */}
      <div className="bg-[#0a0a0a] border-b border-white/5">
        <Container>
          <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between">
            
            <div className="text-left">
                <h2 className="text-5xl lg:text-6xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                  FIAMS
                </h2>

                <p className="mt-4 text-gray-400 text-lg">Federation for Integrated Arts & Management Studies</p>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-8">
                  {[
                    { Icon: Facebook, href: "#" },
                    { Icon: Linkedin, href: "#" },
                    { Icon: Twitter, href: "#" },
                    { Icon: Instagram, href: "#" }
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 
                              flex items-center justify-center transition-all duration-200
                              border border-white/10 group hover:border-white/30"
                    >
                      <Icon size={16} className="text-fiams-gold group-hover:text-purple-500" />
                    </a>
                  ))}
                </div>
            </div>

            <div className="flex flex-col mt-10 md:mt-0 gap-6 items-center p-6 md:p-10 rounded-xl">

              <div className="self-start">
                <h2 className="text-left text-3xl md:text-5xl font-bold mb-2 ">
                  Stay Connected
                </h2>
                <p className="text-gray-400 text-sm md:text-base text-left">
                  Join 12,500+ leaders shaping the future of arts management.
                </p>
              </div>
              
              <div className=" w-full md:w-auto lg:w-[700px]">
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-600 border border-white/10 rounded-lg 
                            focus:outline-none focus:border-fiams-purple text-sm text-white
                            placeholder-gray-500 transition-colors"
                  />
                  <button 
                    onClick={handleSubscribe}
                    className="px-6 py-3 bg-fiams-gold hover:bg-[#FF7043] text-white font-semibold 
                            rounded-lg transition-all duration-200 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container>
        <div className="py-12 md:py-20">
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12 py-8 text-left">
            {Object.entries(links).map(([cat, items]) => (
              <div key={cat}>
                <h4 className="text-md font-semibold text-white mb-4 capitalize">
                  {cat}
                </h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className="text-sm text-gray-400 hover:text-fiams-gold transition-colors duration-200 block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
                <a 
                  href="mailto:info@fiams.org" 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>info@fiams.org</span>
                </a>
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </a>
              </div>

              <p className="text-sm text-gray-500">
                © 2025 Federation for Integrated Arts & Management Studies · All rights reserved
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9b59b6]/30 to-transparent" />
    </footer>
  );
}