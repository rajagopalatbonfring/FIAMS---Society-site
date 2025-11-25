// import { useState } from "react";
// import { Menu, X, Search } from "lucide-react";
// import Container from "../common/container";

// const navItems = [
//   { label: "HOME", href: "/" },
//   { label: "ABOUT", href: "#", submenu: ["Mission & Vision", "Leadership Board", "History & Achievements", "Accreditation"] },
//   { label: "PROGRAMS & EVENTS", href: "#", submenu: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"] },
//   { label: "PROFESSIONAL DEVELOPMENT", href: "#development" },
//   { label: "MORE", href: "#", submenu: ["Research & Publications", "Membership", "Contact"] },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   return (
//     <header className="sticky top-0 bg-white shadow-lg z-50">
//       <Container>
//         <div className="flex items-center justify-between py-4">
//           <a href="/" className="text-3xl font-bold text-fiams-gold">FIAMS</a>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//               <div key={item.label} className="relative group">
//                 <a href={item.href} className="text-fiams-charcoal uppercase text-sm font-medium hover:text-white hover:bg-fiams-purple px-4 py-2 transition">
//                   {item.label}
//                   {item.submenu && <span className="ml-1">▼</span>}
//                 </a>
//                 {item.submenu && (
//                   <div className="absolute top-full left-0 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
//                     {item.submenu.map((sub) => (
//                       <a key={sub} href="#" className="block px-6 py-3 text-sm hover:bg-fiams-purple hover:text-white whitespace-nowrap">
//                         {sub}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             <div className="ml-8">
//               <input type="text" placeholder="Search..." className="border border-fiams-charcoal rounded px-4 py-2" />
//             </div>
//           </nav>

//           {/* Mobile Toggle */}
//           <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden">
//             {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="lg:hidden border-t">
//             {navItems.map((item) => (
//               <div key={item.label}>
//                 <a href={item.href} className="block py-4 px-6 border-b uppercase text-sm font-medium">
//                   {item.label}
//                 </a>
//                 {item.submenu && (
//                   <div className="bg-gray-50">
//                     {item.submenu.map((sub) => (
//                       <a key={sub} href="#" className="block py-3 px-10 text-sm">{sub}</a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </Container>
//     </header>
//   );
// }




import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "../common/container";

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "#",
    submenu: [
      "Mission & Vision",
      "Leadership Board",
      "History & Achievements",
      "Accreditation",
    ],
  },
  {
    label: "PROGRAMS",
    href: "#",
    submenu: [
      "Arts Education",
      "Management Studies",
      "Integrated Curricula",
      "Professional Development",
    ],
  },
  {
    label: "RESEARCH & PUBLICATION",
    href: "#",
    submenu: [
      "Research Papers",
      "Case Studies",
      "Art Journals",
      "Student Publications",
    ],
  },
  {
    label: "EVENTS",
    href: "#",
    submenu: [
      "Workshops",
      "Exhibitions",
      "Conferences",
      "Cultural Events",
    ],
  },
  {
    label: "GALLERY",
    href: "#",
    submenu: [
      "Student Portfolio",
      "Faculty Artworks",
      "Exhibition Archives",
      "Success Stories",
    ],
  },
  {
    label: "MEMBERSHIP",
    href: "#",
    submenu: [
      "Join Now",
      "Member Benefits",
      "Member Directory",
      "Renewal",
    ],
  },
  {
    label: "RESOURCES",
    href: "#",
    submenu: [
      "Career Services",
      "Industry Partnerships",
      "Educational Tools",
      "Guidelines & Policies",
    ],
  },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
                onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-fiams-charcoal hover:text-white hover:bg-fiams-purple transition-all duration-300 rounded-md"
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                </a>

                {/* Dropdown */}
                {item.submenu && openDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-6 py-4 text-sm text-gray-700 hover:bg-fiams-purple hover:text-white transition-all duration-200 border-b border-gray-50 last:border-0"
                      >
                        {sub}
                      </a>
                    ))}
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
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-fiams-purple w-64"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} className="text-fiams-purple" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="block px-6 py-4 font-semibold uppercase text-sm text-fiams-charcoal border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                {item.submenu && <span className="float-right">›</span>}
              </a>
              {item.submenu && mobileOpen && (
                <div className="bg-fiams-purple/5">
                  {item.submenu.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="block px-10 py-3 text-sm text-gray-700 hover:bg-fiams-purple hover:text-white transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}