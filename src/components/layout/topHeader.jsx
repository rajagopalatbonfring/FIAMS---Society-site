// import Container from "../common/container";
// import { Phone, Mail, MapPin } from "lucide-react";

// export default function TopHeader() {
//   return (
//     <div className="bg-fiams-charcoal text-white text-xs py-3 border-b border-white/10">
//       <Container>
//         <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          
//           {/* Left: Contact Info */}
//           <div className="flex flex-wrap items-center gap-4 md:gap-6">
//             <a 
//               href="tel:+919876283923" 
//               className="flex items-center gap-1.5 hover:text-fiams-gold transition"
//             >
//               <Phone size={14} className="text-fiams-gold" />
//               <span>+91 98762 83923</span>
//             </a>
//             <a 
//               href="mailto:info@fiams.org" 
//               className="flex items-center gap-1.5 hover:text-fiams-gold transition"
//             >
//               <Mail size={14} className="text-fiams-gold" />
//               <span>info@fiams.org</span>
//             </a>
//             <span className="hidden lg:flex items-center gap-1.5">
//               <MapPin size={14} className="text-fiams-gold" />
//               <span>Coimbatore, Tamil Nadu</span>
//             </span>
//           </div>

//           {/* Right: Quick Links */}
//           <div className="flex items-center gap-4">
//             <a href="#" className="hover:text-fiams-gold transition font-medium">
//               Student Portal
//             </a>
//             <span className="text-white/40">|</span>
//             <a href="#" className="hover:text-fiams-gold transition font-medium">
//               Faculty Login
//             </a>
//             <span className="text-white/40">|</span>
//             <a 
//               href="/contact" 
//               className="bg-fiams-gold text-fiams-charcoal px-4 py-1.5 rounded hover:bg-yellow-400 transition font-medium whitespace-nowrap"
//             >
//               Get in Touch
//             </a>
//           </div>

//         </div>
//       </Container>
//     </div>
//   );
// }











// components/TopHeader.jsx
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../common/container";

export default function TopHeader() {
  return (
    <div className="bg-gray-900 backdrop-blur-2xl border-b border-white/10 text-xs">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-3">

          {/* Left: Contact Info */}
          <div className="flex flex-wrap items-center gap-5 md:gap-8 text-gray-100">
            <a href="tel:+919876283923" className="flex items-center gap-2 hover:text-fiams-gold transition">
              <Phone size={14} className="text-fiams-gold" />
              <span>+91 98762 83923</span>
            </a>
            <a href="mailto:info@fiams.org" className="flex items-center gap-2 hover:text-fiams-gold transition">
              <Mail size={14} className="text-fiams-gold" />
              <span>info@fiams.org</span>
            </a>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin size={14} className="text-fiams-gold" />
              <span>Coimbatore, Tamil Nadu</span>
            </div>
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-4 text-gray-100 font-medium">
            <a href="#" className="hover:text-fiams-gold transition">Student Portal</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-fiams-gold transition">Faculty Login</a>
            <span className="text-white/30">|</span>
            <a 
              href="/contact"
              className="bg-fiams-purple text-white px-5 py-2 rounded-full 
                         font-bold text-xs hover:shadow-lg hover:shadow-white/20 hover:bg-fiams-gold transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}