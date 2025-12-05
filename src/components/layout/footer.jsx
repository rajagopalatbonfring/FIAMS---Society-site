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
import Container from "../common/container";

export default function Footer() {
  const links = {
    about: ["Mission & Vision", "Leadership Board", "History & Achievements", "Accreditation"],
    programs: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"],
    resources: ["Research Papers", "Career Services", "Industry Partnerships", "Educational Tools"],
    events: ["Workshops", "Exhibitions", "Conferences", "Cultural Events"],
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Subtle artistic background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-fiams-purple/40 via-black to-fiams-gold/30" />
      </div>

      <Container>
        <div className="relative py-20 lg:py-24">

          {/* TOP: Logo + Newsletter (tight & powerful) */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
            {/* Massive Logo */}
            <div className="lg:col-span-5">
              <h2 className="text-left text-7xl lg:text-9xl font-black leading-none tracking-tighter 
                             bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                FIAMS
              </h2>
              <p className="text-left mt-4 text-lg text-gray-400 font-light max-w-xs">
                Federation for Integrated Arts & Management Studies
              </p>
              <div className="mt-5 w-24 h-1 bg-gradient-to-r from-fiams-purple to-fiams-gold" />
            </div>
            
            {/* Contact */}
            {/* <div className="space-y-5">
              <h4 className="text-left font-bold uppercase tracking-widest text-xs text-fiams-gold">Contact</h4>
              <div className="space-y-4 text-sm">
                <a href="mailto:info@fiams.org" className="text-left flex items-center gap-3 hover:text-fiams-gold transition">
                  <Mail size={18} /> info@fiams.org
                </a>
                <a href="tel:+15551234567" className="text-left flex items-center gap-3 hover:text-fiams-gold transition">
                  <Phone size={18} /> +1 (555) 123-4567
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5" />
                  <span className="text-left leading-tight">
                    123 Arts Avenue<br />Creative District, CD 12345
                  </span>
                </div>
              </div>
            </div> */}

            {/* Floating Newsletter Card */}
            <div className="lg:col-span-7">
              <div className="relative group max-w-xl ml-auto">
                <div className="absolute -inset-1 bg-fiams-purple rounded-3xl blur-xl opacity-60 
                                group-hover:opacity-90 transition duration-1000" />
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-2">Join the Inner Circle</h3>
                  <p className="text-gray-400 text-sm mb-6">Exclusive insights, events, and opportunities.</p>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl 
                                 focus:outline-none focus:border-fiams-gold placeholder-gray-500 text-sm"
                    />
                    <button className="px-7 py-3.5 bg-fiams-gold 
                                       font-semibold rounded-xl hover:shadow-xl active:scale-98 transition-all duration-300 
                                       flex items-center justify-center gap-2">
                      Subscribe <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* LINKS GRID – 4 tight columns, perfect spacing */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 lg:gap-x-16">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-left font-bold uppercase tracking-widest text-xs text-fiams-gold mb-5 opacity-90">
                  {category}
                </h4>
                <ul className="space-y-3.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="group flex items-center gap-3 text-gray-400 hover:text-white text-sm font-medium 
                                   transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="text-left w-5 h-px bg-fiams-gold/40 group-hover:bg-fiams-gold transition-colors" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* BOTTOM: Contact + Social + Copyright */}
          <div className="mt-16 pt-12 border-t border-white/10 grid lg:grid-cols-2 gap-10">


            {/* Social */}
            <div className="flex items-center justify-start gap-5">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center
                             border border-white/20 hover:border-fiams-gold hover:bg-fiams-gold/10 
                             hover:scale-110 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-right text-xs text-gray-500 font-medium">
              © 2025 FIAMS<br />
              All rights reserved
              <div className="mt-3 flex flex-wrap justify-end gap-4 text-xs">
                <a href="#" className="hover:text-fiams-gold transition">Privacy</a>
                <a href="#" className="hover:text-fiams-gold transition">Terms</a>
                <a href="#" className="hover:text-fiams-gold transition">Cookies</a>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* Subtle floating accents */}
      <div className="absolute top-32 -left-20 w-80 h-80 bg-fiams-purple/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-fiams-gold/10 rounded-full blur-3xl -z-10" />
    </footer>
  );
}