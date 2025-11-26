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











import { useState } from "react";
import { X, ChevronRight, Search } from "lucide-react";

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "#",
    submenu: ["Mission & Vision", "Leadership Board", "History & Achievements", "Accreditation"]
  },
  {
    label: "PROGRAMS",
    href: "#",
    submenu: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"]
  },
  {
    label: "R & PUB",
    href: "#",
    submenu: ["Research Papers", "Case Studies", "Art Journals", "Student Publications"]
  },
  {
    label: "EVENTS",
    href: "#",
    submenu: ["Workshops", "Exhibitions", "Conferences", "Cultural Events"]
  },
  {
    label: "GALLERY",
    href: "#",
    submenu: ["Student Portfolio", "Faculty Artworks", "Exhibition Archives", "Success Stories"]
  },
  {
    label: "RESOURCES",
    href: "#",
    submenu: ["Career Services", "Industry Partnerships", "Educational Tools", "Guidelines & Policies"]
  },
  { label: "CONTACT", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (label) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="lg:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Mobile Menu Panel */}
      <div className="lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl overflow-y-auto animate-slide-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-fiams-purple">FIAMS</span>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-fiams-purple focus:ring-2 focus:ring-fiams-purple/20 transition-all"
            />
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="py-2">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold uppercase text-sm tracking-wide text-fiams-charcoal">
                      {item.label}
                    </span>
                    <ChevronRight 
                      size={20} 
                      className={`text-gray-400 transition-transform duration-300 ${
                        openDropdowns[item.label] ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Submenu */}
                  {openDropdowns[item.label] && (
                    <div className="bg-gradient-to-br from-fiams-purple/5 to-transparent">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          onClick={onClose}
                          className="block pl-12 pr-6 py-3 text-sm text-gray-700 hover:text-fiams-purple hover:bg-white/50 transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block px-6 py-4 font-semibold uppercase text-sm tracking-wide text-fiams-charcoal hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="p-6 mt-4">
          <button className="w-full bg-fiams-purple text-white py-3 rounded-lg font-semibold hover:bg-fiams-purple/90 transition-colors shadow-lg">
            Apply Now
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}