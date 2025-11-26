

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
    <section className="bg-white mx-auto py-8 px-5 md:py-12 md:px-5 max-[480px]:py-6 max-[480px]:px-4" id="events">
      <div className="container mx-auto px-[clamp(15px,2vw,20px)]">
        <span className="text-sm font-semibold text-fiams-gold bg-fiams-gold/30 px-4 py-2 mb-6 rounded-full inline-blocktext-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full inline-block">
          Events
        </span>
        <h2 className="text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-5 leading-[1.2]">
          Upcoming Opportunities
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
                    ? 'bg-white text-[black]'
                    : 'bg-fiams-gold text-[black] hover:bg-white hover:text-[#555555]'
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




















// // proffessional styled design

// import React, { useState } from 'react';

// const ActiveFederationEvents = () => {
//   const [activeTab, setActiveTab] = useState('Events');

//   const tabs = ['Events', 'Initiatives', 'Conferences'];

//   const events = [
//     {
//       date: 'Mar 15-18',
//       year: '2026',
//       title: 'Global Arts Management Summit',
//       location: 'London, UK',
//       theme: 'Cultural Renaissance: Leadership in the Digital Age',
//       image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'
//     },
//     {
//       date: 'Nov 22-23',
//       year: '2025',
//       title: 'Arts Funding Innovation Conference',
//       location: 'Toronto, Canada',
//       theme: 'Exploring innovative funding models',
//       image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop'
//     },
//     {
//       date: 'Dec 10',
//       year: '2025',
//       title: 'Virtual Symposium: Museum Management',
//       location: 'Online',
//       theme: 'Excellence in museum leadership',
//       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
//     }
//   ];

//   return (
//     <section className="py-40 bg-gray-50" id="events">
//       <div className="max-w-8xl mx-auto px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="mb-20">
//           <div className="inline-block mb-3">
//             <span className="text-xs font-medium tracking-wider uppercase text-gray-500">
//               Events & Initiatives
//             </span>
//           </div>
//           <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 max-w-4xl">
//             Connect at our global gatherings
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl">
//             Join arts leaders from around the world at our signature events.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="mb-16 border-b border-gray-200">
//           <div className="flex gap-12">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`
//                   pb-4 text-sm font-medium tracking-wide transition-colors relative
//                   ${activeTab === tab 
//                     ? 'text-gray-900' 
//                     : 'text-gray-400 hover:text-gray-600'
//                   }
//                 `}
//               >
//                 {tab}
//                 {activeTab === tab && (
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Events Grid */}
//         <div className="grid lg:grid-cols-3 gap-px bg-gray-200">
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className="group bg-white hover:bg-gray-50 transition-colors"
//             >
//               <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
//                 <img 
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//                 />
//               </div>
//               <div className="p-10">
//                 <div className="flex items-baseline gap-3 mb-6">
//                   <div className="text-2xl font-medium text-gray-900">
//                     {event.date}
//                   </div>
//                   <div className="text-sm text-gray-400">
//                     {event.year}
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight">
//                   {event.title}
//                 </h3>
                
//                 <div className="text-sm text-gray-500 mb-4">
//                   {event.location}
//                 </div>
                
//                 <p className="text-gray-600 text-sm leading-relaxed mb-8">
//                   {event.theme}
//                 </p>

//                 <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4">
//                   Register now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Info */}
//         <div className="mt-20 pt-16 border-t border-gray-200">
//           <div className="grid md:grid-cols-2 gap-16">
//             <div>
//               <h3 className="text-2xl font-medium text-gray-900 mb-4">
//                 Past events archive
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Access recordings, presentations, and resources from previous gatherings.
//               </p>
//               <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4">
//                 Browse archive
//               </button>
//             </div>
//             <div>
//               <h3 className="text-2xl font-medium text-gray-900 mb-4">
//                 Host an event
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Interested in bringing a federation event to your city? Learn about hosting opportunities.
//               </p>
//               <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4">
//                 Contact us
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ActiveFederationEvents;