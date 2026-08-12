// import { useState } from "react";
// import { X } from "lucide-react";

// export default function MobileMenu({ isOpen, onClose }) {
//   const [openDropdowns, setOpenDropdowns] = useState({});

//   const toggleDropdown = (menu) => {
//     setOpenDropdowns(prev => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   const navItems = [
//     { label: "HOME", href: "/" },
//     { label: "ABOUT", submenu: ["Mission & Vision", "Leadership Board", "History & Achievements", "Accreditation"] },
//     { label: "PROGRAMS & EVENTS", submenu: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"] },
//     { label: "PROFESSIONAL DEVELOPMENT", href: "#development" },
//     { label: "MORE", submenu: ["Research & Publications", "Membership", "Contact"] },
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="lg:hidden fixed inset-0 bg-white z-40">
//       <div className="p-6 border-b">
//         <button onClick={onClose} className="float-right">
//           <X size={28} />
//         </button>
//       </div>
//       <div className="p-6 space-y-1">
//         {navItems.map((item) => (
//           <div key={item.label}>
//             <button
//               onClick={() => item.submenu ? toggleDropdown(item.label) : null}
//               className="w-full text-left py-4 px-4 uppercase text-sm font-medium flex justify-between items-center"
//             >
//               {item.label}
//               {item.submenu && <span>{openDropdowns[item.label] ? '−' : '+'}</span>}
//             </button>
//             {item.submenu && openDropdowns[item.label] && (
//               <div className="bg-gray-50 ml-8 space-y-1">
//                 {item.submenu.map((sub) => (
//                   <a key={sub} href="#" className="block py-2 px-4 text-sm text-gray-600 hover:text-fiams-purple">
//                     {sub}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//         <div className="pt-6">
//           <input type="text" placeholder="Search..." className="w-full px-4 py-3 border rounded-lg" />
//         </div>
//       </div>
//     </div>
//   );
// }











// import { useState } from "react";
// import { X, ChevronRight, Search } from "lucide-react";

// const navItems = [
//   { label: "HOME", href: "/" },
//   {
//     label: "ABOUT",
//     href: "#",
//     submenu: ["Mission & Vision", "Leadership Board", "History & Achievements", "Accreditation"]
//   },
//   {
//     label: "PROGRAMS",
//     href: "#",
//     submenu: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"]
//   },
//   {
//     label: "R & PUB",
//     href: "#",
//     submenu: ["Research Papers", "Case Studies", "Art Journals", "Student Publications"]
//   },
//   {
//     label: "EVENTS",
//     href: "#",
//     submenu: ["Workshops", "Exhibitions", "Conferences", "Cultural Events"]
//   },
//   {
//     label: "GALLERY",
//     href: "#",
//     submenu: ["Student Portfolio", "Faculty Artworks", "Exhibition Archives", "Success Stories"]
//   },
//   {
//     label: "RESOURCES",
//     href: "#",
//     submenu: ["Career Services", "Industry Partnerships", "Educational Tools", "Guidelines & Policies"]
//   },
//   { label: "CONTACT", href: "/contact" },
// ];

// export default function MobileMenu({ isOpen, onClose }) {
//   const [openDropdowns, setOpenDropdowns] = useState({});

//   const toggleDropdown = (label) => {
//     setOpenDropdowns(prev => ({
//       ...prev,
//       [label]: !prev[label]
//     }));
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div 
//         className="lg:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
//         onClick={onClose}
//       />

//       {/* Mobile Menu Panel */}
//       <div className="lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl overflow-y-auto animate-slide-in">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between">
//           <span className="text-2xl font-bold text-fiams-purple">FIAMS</span>
//           <button 
//             onClick={onClose} 
//             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//             aria-label="Close menu"
//           >
//             <X size={24} className="text-gray-600" />
//           </button>
//         </div>

//         {/* Search Bar */}
//         <div className="px-6 py-4 border-b border-gray-200">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-fiams-purple focus:ring-2 focus:ring-fiams-purple/20 transition-all"
//             />
//             <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
//           </div>
//         </div>

//         {/* Navigation Items */}
//         <div className="py-2">
//           {navItems.map((item) => (
//             <div key={item.label} className="border-b border-gray-100">
//               {item.submenu ? (
//                 <>
//                   <button
//                     onClick={() => toggleDropdown(item.label)}
//                     className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
//                   >
//                     <span className="font-semibold uppercase text-sm tracking-wide text-fiams-charcoal">
//                       {item.label}
//                     </span>
//                     <ChevronRight 
//                       size={20} 
//                       className={`text-gray-400 transition-transform duration-300 ${
//                         openDropdowns[item.label] ? 'rotate-90' : ''
//                       }`}
//                     />
//                   </button>
                  
//                   {/* Submenu */}
//                   {openDropdowns[item.label] && (
//                     <div className="bg-gradient-to-br from-fiams-purple/5 to-transparent">
//                       {item.submenu.map((sub) => (
//                         <a
//                           key={sub}
//                           href="#"
//                           onClick={onClose}
//                           className="block pl-12 pr-6 py-3 text-sm text-gray-700 hover:text-fiams-purple hover:bg-white/50 transition-colors"
//                         >
//                           {sub}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <a
//                   href={item.href}
//                   onClick={onClose}
//                   className="block px-6 py-4 font-semibold uppercase text-sm tracking-wide text-fiams-charcoal hover:bg-gray-50 transition-colors"
//                 >
//                   {item.label}
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Footer CTA */}
//         <div className="p-6 mt-4">
//           <button className="w-full bg-fiams-purple text-white py-3 rounded-lg font-semibold hover:bg-fiams-purple/90 transition-colors shadow-lg">
//             Apply Now
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slide-in {
//           from { transform: translateX(100%); }
//           to { transform: translateX(0); }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.2s ease-out;
//         }
//         .animate-slide-in {
//           animation: slide-in 0.3s ease-out;
//         }
//       `}</style>
//     </>
//   );
// }











// // components/MobileMenu.jsx
// import { useState } from "react";
// import { X, ChevronRight } from "lucide-react";

// const navItems = [
//   { label: "HOME", href: "/" },
//   { label: "ABOUT", submenu: ["Mission & Vision", "Leadership Board", "History & Achievements", "Accreditation"] },
//   { label: "PROGRAMS", submenu: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"] },
//   { label: "R & PUB", submenu: ["Research Papers", "Case Studies", "Art Journals", "Student Publications"] },
//   { label: "EVENTS", submenu: ["Workshops", "Exhibitions", "Conferences", "Cultural Events"] },
//   { label: "GALLERY", submenu: ["Student Portfolio", "Faculty Artworks", "Exhibition Archives", "Success Stories"] },
//   { label: "RESOURCES", submenu: ["Career Services", "Industry Partnerships", "Educational Tools", "Guidelines & Policies"] },
//   { label: "CONTACT", href: "/contact" },
// ];

// export default function MobileMenu({ isOpen, onClose }) {
//   const [open, setOpen] = useState({});

//   if (!isOpen) return null;

//   return (
//     <>
//       <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" onClick={onClose} />
      
//       <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-black/95 backdrop-blur-3xl border-l border-white/10 z-50 overflow-y-auto">
//         <div className="sticky top-0 bg-black/90 backdrop-blur-3xl border-b border-white/10 px-6 py-6 flex justify-between items-center">
//           <h2 className="text-3xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             FIAMS
//           </h2>
//           <button onClick={onClose} className="p-3 bg-white/10 rounded-xl">
//             <X size={24} className="text-white" />
//           </button>
//         </div>

//         <nav className="px-6 py-6 space-y-1">
//           {navItems.map((item) => (
//             <div key={item.label} className="border-b border-white/5">
//               {item.submenu ? (
//                 <button
//                   onClick={() => setOpen(prev => ({ ...prev, [item.label]: !prev[item.label] }))}
//                   className="w-full flex items-center justify-between py-5 text-left"
//                 >
//                   <span className="text-lg font-bold uppercase tracking-wider text-white">
//                     {item.label}
//                   </span>
//                   <ChevronRight size={24} className={`text-fiams-gold transition-transform duration-300 
//                     ${open[item.label] ? 'rotate-90' : ''}`} />
//                 </button>
//               ) : (
//                 <a href={item.href} onClick={onClose} className="block py-5 text-lg font-bold uppercase tracking-wider text-white">
//                   {item.label}
//                 </a>
//               )}

//               {item.submenu && open[item.label] && (
//                 <div className="pb-4 pl-4 space-y-3">
//                   {item.submenu.map((sub) => (
//                     <a key={sub} href="#" onClick={onClose} className="block py-3 text-gray-300 hover:text-white hover:pl-2 transition-all">
//                       {sub}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         <div className="p-6 mt-8">
//           <a href="/apply" className="block w-full text-center py-5 bg-gradient-to-r from-fiams-purple to-fiams-gold 
//                                       text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-fiams-gold/40 transition-all">
//             Apply Now
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }
















// layout/mobileMenu.jsx
import { useState } from "react";
import { X, ChevronDown, Search } from "lucide-react";

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    submenu: ["Mission & Vision", "Leadership Board", "History & Achievements", "Accreditation"],
  },
  {
    label: "PROGRAMS",
    submenu: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"],
  },
  {
    label: "JOURNALS & PUBLICATIONS",
    href: "https://gpim.in",
  },
  {
    label: "EVENTS",
    submenu: ["Workshops", "Exhibitions", "Conferences", "Cultural Events"],
  },
  {
    label: "RESOURCES",
    submenu: ["Career Services", "Industry Partnerships", "Educational Tools", "Guidelines & Policies"],
  },
  { label: "CONTACT", href: "/contact" },
];

const sectionTitles = {
  ABOUT: "Discover FIAMS",
  PROGRAMS: "Academic Excellence",
  "JOURNALS & PUBLICATIONS": "Research & Publications",
  EVENTS: "Events & Experiences",
  RESOURCES: "Student Resources",
};

export default function MobileMenu({ isOpen, onClose }) {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (label) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  const handleLinkClick = () => {
    onClose(); // Ensure close on every navigation
  };
  
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] transition-opacity duration-400 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar menu – improved spacing & height feel */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-md bg-gradient-to-b from-gray-900 to-black border-r border-white/10 z-[9999] 
                     transform transition-transform duration-400 ease-in-out overflow-y-auto
                     ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col min-h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/15">
            <h2 className="text-4xl font-black tracking-tight bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              FIAMS
            </h2>
            <button
              onClick={onClose}
              className="p-3 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={32} className="text-white" />
            </button>
          </div>

          {/* Navigation – more breathing room */}
          <nav className="flex-1 px-5 py-8">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label} className="rounded-xl overflow-hidden">
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.label === "CONTACT") {
                          e.preventDefault();
                          scrollToBottom();
                          onClose();
                        } else {
                          handleLinkClick();
                        }
                      }}
                      className="flex items-center justify-between px-6 py-5 text-lg font-semibold uppercase tracking-wide 
                                 text-gray-100 hover:text-white hover:bg-white/8 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleAccordion(item.label)}
                        className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold uppercase tracking-wide 
                                   text-gray-100 hover:text-white hover:bg-white/8 transition-colors duration-200"
                      >
                        {item.label}
                        <ChevronDown
                          size={22}
                          className={`text-gray-400 transition-transform duration-300 ${
                            openAccordion === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Submenu – smoother open, no arbitrary max-h limit */}
                      <div
                        className={`grid transition-all duration-400 ease-in-out ${
                          openAccordion === item.label
                            ? "grid-rows-[1fr] opacity-100 pt-3 pb-5"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden px-6 bg-black/40 rounded-b-xl">
                          <p className="text-fiams-gold text-sm uppercase font-bold tracking-wider mb-5">
                            {sectionTitles[item.label] || item.label}
                          </p>

                          <ul className="space-y-4">
                            {item.submenu?.map((subItem, idx) => (
                              <li key={idx}>
                                <a
                                  href="#" // ← replace with real path later
                                  onClick={handleLinkClick}
                                  className="block text-gray-200 hover:text-white hover:translate-x-3 pl-3 border-l-2 border-transparent 
                                             hover:border-fiams-gold transition-all duration-200 text-base py-1.5"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer / Search button – optional but kept */}
          <div className="p-6 border-t border-white/15 mt-auto">
            <button
              className="w-full flex items-center justify-center gap-3 py-5 bg-gradient-to-r from-fiams-purple to-fiams-gold 
                         rounded-xl text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg"
            >
              <Search size={22} />
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}