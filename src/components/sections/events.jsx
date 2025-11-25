// export default function Events() {
//   const events = [
//     {
//       date: "March 15-18, 2026",
//       title: "Global Arts Management Summit 2026",
//       desc: "Theme: Cultural Renaissance: Leadership in the Digital Age. London, UK."
//     },
//     {
//       date: "November 22-23, 2025",
//       title: "Arts Funding Innovation Conference",
//       desc: "Exploring innovative funding models in Toronto, Canada."
//     },
//     {
//       date: "December 10, 2025",
//       title: "Virtual Symposium: Museum Management",
//       desc: "Excellence in museum leadership, online."
//     }
//   ];

//   return (
//     <section id="events" className="py-24 bg-gray-50">
//       <div className="container">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl lg:text-6xl font-bold mb-6">Active Federation Initiatives <br/> & Upcoming Opportunities</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join our global events and initiatives to connect and collaborate.</p>
//         </div>

//         <div className="flex gap-4 mb-16 flex-wrap">
//           <a href="#" className="px-8 py-4 bg-fiams-gold text-fiams-charcoal rounded-full font-semibold hover:bg-fiams-gold/90 transition">Events</a>
//           <a href="#" className="px-8 py-4 border-2 border-fiams-gold text-fiams-charcoal rounded-full font-semibold hover:bg-fiams-gold transition">Initiatives</a>
//           <a href="#" className="px-8 py-4 border-2 border-fiams-gold text-fiams-charcoal rounded-full font-semibold hover:bg-fiams-gold transition">Conferences</a>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {events.map((event, index) => (
//             <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all overflow-hidden group">
//               <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900"></div>
//               <div className="p-8">
//                 <div className="text-sm text-gray-500 mb-4 opacity-75">{event.date}</div>
//                 <h3 className="text-2xl font-bold mb-4 text-fiams-purple group-hover:text-fiams-purple/80 transition">{event.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{event.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useState } from 'react';

const ActiveFederationEvents = () => {
  const [activeTab, setActiveTab] = useState('Events');

  const tabs = ['Events', 'Initiatives', 'Conferences'];

  const events = [
    {
      date: 'March 15-18, 2026',
      title: 'Global Arts Management Summit 2026',
      description: 'Theme: Cultural Renaissance: Leadership in the Digital Age. London, UK.'
    },
    {
      date: 'November 22-23, 2025',
      title: 'Arts Funding Innovation Conference',
      description: 'Exploring innovative funding models in Toronto, Canada.'
    },
    {
      date: 'December 10, 2025',
      title: 'Virtual Symposium: Museum Management',
      description: 'Excellence in museum leadership, online.'
    }
  ];

  return (
    <section className="bg-gray-200 bg-gradient-to-r from-white via-gray-200 to-white mx-auto py-8 px-5 md:py-12 md:px-5 max-[480px]:py-6 max-[480px]:px-4" id="events">
      <div className="container mx-auto px-[clamp(15px,2vw,20px)]">
        <h2 className="text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-5 leading-[1.2]">
          Active Federation Initiatives <br />& Upcoming Opportunities
        </h2>
        <p className="text-[#555555] text-xl text-gray-900/90 mb-8 leading-relaxed mb-8">
          Join our global events and initiatives to connect and collaborate.
        </p>

        {/* Filter Tabs */}
        <div className="flex gap-4 max-md:gap-3 mb-8 max-md:mb-6 justify-center flex-wrap">
          {tabs.map((tab) => (
            <a
              key={tab}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab);
              }}
              className={`
                py-2 px-5 max-[480px]:py-[6px] max-[480px]:px-4
                border-2 border-fiams-gold rounded-full
                text-sm max-[480px]:text-[clamp(12px,2vw,13px)] font-medium
                transition-all duration-300 ease-in-out
                ${
                  activeTab === tab
                    ? 'bg-transparent text-[black]'
                    : 'bg-fiams-gold text-[black] hover:bg-transparent hover:text-[#555555]'
                }
              `}
            >
              {tab}
            </a>
          ))}
        </div>

        {/* Content Grid */}
        <div className="text-left grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-md:grid-cols-1 gap-6 max-md:gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col gap-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="rounded-[20px] w-full h-[250px] max-md:h-[180px] max-[480px]:h-[160px] bg-[#555555] relative"></div>
              <div className="py-[10px] px-[10px] max-md:py-4 max-md:px-4 max-[480px]:py-3 max-[480px]:px-3">
                <div className="text-sm max-[480px]:text-[clamp(12px,2vw,13px)] text-[#555555] opacity-70 mb-2">
                  {event.date}
                </div>
                <h3 className="text-xl max-[480px]:text-[clamp(16px,2.5vw,18px)] font-semibold text-[#2c2c54] leading-[1.4] m-0 mb-3">
                  {event.title}
                </h3>
                <p className="text-[#555555] text-left text-base">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveFederationEvents;