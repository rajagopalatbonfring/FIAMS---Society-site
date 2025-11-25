import { useState } from "react";
import { X } from "lucide-react";

export default function MobileMenu({ isOpen, onClose }) {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (menu) => {
    setOpenDropdowns(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", submenu: ["Mission & Vision", "Leadership Board", "History & Achievements", "Accreditation"] },
    { label: "PROGRAMS & EVENTS", submenu: ["Arts Education", "Management Studies", "Integrated Curricula", "Professional Development"] },
    { label: "PROFESSIONAL DEVELOPMENT", href: "#development" },
    { label: "MORE", submenu: ["Research & Publications", "Membership", "Contact"] },
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 bg-white z-40">
      <div className="p-6 border-b">
        <button onClick={onClose} className="float-right">
          <X size={28} />
        </button>
      </div>
      <div className="p-6 space-y-1">
        {navItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => item.submenu ? toggleDropdown(item.label) : null}
              className="w-full text-left py-4 px-4 uppercase text-sm font-medium flex justify-between items-center"
            >
              {item.label}
              {item.submenu && <span>{openDropdowns[item.label] ? '−' : '+'}</span>}
            </button>
            {item.submenu && openDropdowns[item.label] && (
              <div className="bg-gray-50 ml-8 space-y-1">
                {item.submenu.map((sub) => (
                  <a key={sub} href="#" className="block py-2 px-4 text-sm text-gray-600 hover:text-fiams-purple">
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="pt-6">
          <input type="text" placeholder="Search..." className="w-full px-4 py-3 border rounded-lg" />
        </div>
      </div>
    </div>
  );
}