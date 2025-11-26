// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Container from "../common/container";

// const navItems = [
//   { label: "HOME", href: "/" },
//   {
//     label: "ABOUT",
//     href: "#",
//     submenu: [
//       "Mission & Vision",
//       "Leadership Board",
//       "History & Achievements",
//       "Accreditation",
//     ],
//   },
//   {
//     label: "PROGRAMS",
//     href: "#",
//     submenu: [
//       "Arts Education",
//       "Management Studies",
//       "Integrated Curricula",
//       "Professional Development",
//     ],
//   },
//   {
//     label: "R & PUB",
//     href: "#",
//     submenu: [
//       "Research Papers",
//       "Case Studies",
//       "Art Journals",
//       "Student Publications",
//     ],
//   },
//   {
//     label: "EVENTS",
//     href: "#",
//     submenu: [
//       "Workshops",
//       "Exhibitions",
//       "Conferences",
//       "Cultural Events",
//     ],
//   },
//   {
//     label: "GALLERY",
//     href: "#",
//     submenu: [
//       "Student Portfolio",
//       "Faculty Artworks",
//       "Exhibition Archives",
//       "Success Stories",
//     ],
//   },
//   // {
//   //   label: "MEMBERSHIP",
//   //   href: "#",
//   //   submenu: [
//   //     "Join Now",
//   //     "Member Benefits",
//   //     "Member Directory",
//   //     "Renewal",
//   //   ],
//   // },
//   {
//     label: "RESOURCES",
//     href: "#",
//     submenu: [
//       "Career Services",
//       "Industry Partnerships",
//       "Educational Tools",
//       "Guidelines & Policies",
//     ],
//   },
//   { label: "CONTACT", href: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   return (
//     <header className="sticky top-0 bg-white shadow-md z-50 border-b border-gray-100">
//       <Container>
//         <div className="flex items-center justify-between py-5">

//           {/* Logo */}
//           <a href="/" className="text-4xl font-bold text-fiams-purple tracking-tight">
//             FIAMS
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative group"
//                 onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <a
//                   href={item.href}
//                   className="flex items-center gap-1 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-fiams-charcoal hover:text-white hover:bg-fiams-purple transition-all duration-300 rounded-md"
//                 >
//                   {item.label}
//                   {item.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
//                 </a>

//                 {/* Dropdown */}
//                 {item.submenu && openDropdown === item.label && (
//                   <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
//                     {item.submenu.map((sub) => (
//                       <a
//                         key={sub}
//                         href="#"
//                         className="block px-6 py-4 text-sm text-gray-700 hover:bg-fiams-purple hover:text-white transition-all duration-200 border-b border-gray-50 last:border-0"
//                       >
//                         {sub}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}

//             {/* Search Bar */}
//             <div className="ml-8">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-fiams-purple w-64"
//                 />
//                 <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//             </div>
//           </nav>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="lg:hidden p-2"
//           >
//             {mobileOpen ? <X size={28} /> : <Menu size={28} className="text-fiams-purple" />}
//           </button>
//         </div>
//       </Container>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-200">
//           <div className="px-4 py-3">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
//             />
//           </div>
//           {navItems.map((item) => (
//             <div key={item.label}>
//               <a
//                 href={item.href}
//                 className="block px-6 py-4 font-semibold uppercase text-sm text-fiams-charcoal border-b border-gray-100"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {item.label}
//                 {item.submenu && <span className="float-right">›</span>}
//               </a>
//               {item.submenu && mobileOpen && (
//                 <div className="bg-fiams-purple/5">
//                   {item.submenu.map((sub) => (
//                     <a
//                       key={sub}
//                       href="#"
//                       className="block px-10 py-3 text-sm text-gray-700 hover:bg-fiams-purple hover:text-white transition"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {sub}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }





import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import Container from "../common/container";
import MobileMenu from "./mobileMenu";

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "#",
    megaMenu: {
      categories: [
        {
          title: "Who We Are",
          items: ["Mission & Vision", "Leadership Board", "History & Achievements"]
        },
        {
          title: "Credentials",
          items: ["Accreditation", "Partnerships", "Recognition"]
        }
      ]
    }
  },
  {
    label: "PROGRAMS",
    href: "#",
    megaMenu: {
      categories: [
        {
          title: "Academic Programs",
          items: ["Arts Education", "Management Studies", "Integrated Curricula"]
        },
        {
          title: "Training & Development",
          items: ["Professional Development", "Workshops", "Certificate Programs"]
        }
      ]
    }
  },
  {
    label: "R & PUB",
    href: "#",
    megaMenu: {
      categories: [
        {
          title: "Research",
          items: ["Research Papers", "Case Studies", "Publications"]
        },
        {
          title: "Student Work",
          items: ["Art Journals", "Student Publications", "Theses"]
        }
      ]
    }
  },
  {
    label: "EVENTS",
    href: "#",
    megaMenu: {
      categories: [
        {
          title: "Upcoming",
          items: ["Workshops", "Exhibitions", "Conferences"]
        },
        {
          title: "Highlights",
          items: ["Cultural Events", "Guest Lectures", "Past Events"]
        }
      ]
    }
  },
  {
    label: "GALLERY",
    href: "#",
    megaMenu: {
      categories: [
        {
          title: "Showcases",
          items: ["Student Portfolio", "Faculty Artworks", "Exhibition Archives"]
        },
        {
          title: "Inspiration",
          items: ["Success Stories", "Alumni Work", "Featured Artists"]
        }
      ]
    }
  },
  {
    label: "RESOURCES",
    href: "#",
    megaMenu: {
      categories: [
        {
          title: "Career Support",
          items: ["Career Services", "Industry Partnerships", "Job Board"]
        },
        {
          title: "Academic Tools",
          items: ["Educational Tools", "Guidelines & Policies", "Library Access"]
        }
      ]
    }
  },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <a href="/" className="text-4xl font-bold text-fiams-purple tracking-tight">
            FIAMS
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.megaMenu && setOpenMegaMenu(item.label)}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-fiams-charcoal hover:text-white hover:bg-fiams-purple transition-all duration-300 rounded-md"
                >
                  {item.label}
                  {item.megaMenu && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        openMegaMenu === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </a>

                {/* Mega Menu */}
                {item.megaMenu && openMegaMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-2 gap-6 p-8">
                      {item.megaMenu.categories.map((category) => (
                        <div key={category.title}>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-fiams-purple mb-4 pb-2 border-b-2 border-fiams-purple/20">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((menuItem) => (
                              <li key={menuItem}>
                                <a
                                  href="#"
                                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-fiams-purple hover:text-white rounded-md transition-all duration-200"
                                >
                                  {menuItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Search Bar */}
            <div className="ml-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-fiams-purple focus:ring-2 focus:ring-fiams-purple/20 w-64 transition-all"
                />
                <svg 
                  className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={28} className="text-fiams-purple" />
          </button>
        </div>
      </Container>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}