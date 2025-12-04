// export default function Services() {
//   const services = [
//     { title: "Professional Development", desc: "Continuing education and certification programs for arts and management professionals" },
//     { title: "Research Publications", desc: "Peer-reviewed journals and academic resources advancing field knowledge" },
//     { title: "Global Networking", desc: "Connect with 12,500+ professionals across 38 countries worldwide" },
//     { title: "Industry Leadership", desc: "Shape the future of arts and cultural management through policy and innovation" },
//   ];

//   return (
//     <section id="services" className="py-32 bg-gray-50">
//       <div className="container mx-auto px-6">
//         {/* Header Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 text-left">
//           <div className="flex-1">
//             <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full inline-block mb-4">
//               Our Service
//             </span>
//             <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
//               Get Started With Us
//             </h1>
//           </div>
          
//           <div className="flex-1 max-w-lg flex flex-col items-start text-right">
//             <p className="text-lg text-gray-600 leading-relaxed mb-6">
//               Discover comprehensive services designed to empower arts and cultural management professionals worldwide through education, networking, and research excellence.
//             </p>

//           </div>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//           {/* Service Cards */}
//           {services.map((service, index) => (
//             <div 
//               key={service.title} 
//               className={`text-left p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all group rounded-2xl bg-white `}
//             >
//               <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
//               <p className="text-lg text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
//               <div className="text-2xl text-purple-600 group-hover:translate-x-2 transition-transform">→</div>
//             </div>
//           ))}
//         </div>

//         <button className="bg-fiams-gold hover:bg-fiams-gold text-gray-800 mt-10 px-6 py-2 rounded-lg transition-all font-medium">
//           View all
//         </button>

//         {/* Call to Action Banner */}
//         {/* <div className="mt-8 bg-gradient-to-br from-purple-500 to-purple-300 rounded-2xl p-10 shadow-xl">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex -space-x-4">
//               <div className="w-16 h-16 rounded-full border-4 border-white bg-purple-700 flex items-center justify-center text-white font-bold text-xl">
//                 A
//               </div>
//               <div className="w-16 h-16 rounded-full border-4 border-white bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
//                 C
//               </div>
//               <div className="w-16 h-16 rounded-full border-4 border-white bg-purple-800 flex items-center justify-center text-white font-bold text-xl">
//                 M
//               </div>
//             </div>
            
//             <div className="text-center md:text-left flex-1">
//               <h3 className="text-2xl font-bold text-white mb-2">Get Started With Us</h3>
//               <p className="text-purple-100 text-sm">
//                 Become part of a global network advancing arts and cultural management excellence
//               </p>
//             </div>
            
//             <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
//               Join Now →
//             </button>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }








export default function Services() {
  const services = [
    {
      title: "Professional Development",
      desc: "Continuing education and certification programs for arts and management professionals",
    },
    {
      title: "Research Publications",
      desc: "Peer-reviewed journals and academic resources advancing field knowledge",
    },
    {
      title: "Global Networking",
      desc: "Connect with 12,500+ professionals across 38 countries worldwide",
    },
    {
      title: "Industry Leadership",
      desc: "Shape the future of arts and cultural management through policy and innovation",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full inline-block mb-4">
            Our Services
          </span>
          <h1 className="text-4xl lg:text-6xl  font-bold text-gray-900 leading-tight mb-6">
            Empowering arts & cultural management
            <br />
            professionals worldwide
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive education, research, networking, and leadership opportunities to advance the field globally.
          </p>
        </div>

        {/* Services Grid - Refined professional cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 - Professional Development */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-purple-600/50">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-fiams-purple to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              
              <h3 className="text-[clamp(20px,3vw,24px)] max-md:text-[clamp(18px,2.8vw,22px)] max-[480px]:text-[clamp(16px,2.5vw,20px)] font-bold mb-[15px] leading-[1.3] font-bold text-gray-900 mb-3">
                Professional <br /> Development
              </h3>
              
              <p className="text-[clamp(13px,2vw,15px)] max-md:text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] text-gray-600 leading-relaxed mb-6 flex-1">
                {services[0].desc}
              </p>
              
              <div className="flex items-center text-purple-600 font-medium text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] group-hover:gap-2 transition-all duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 - Research Publications */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-purple-600/50">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-fiams-purple to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <h3 className="text-[clamp(20px,3vw,24px)] max-md:text-[clamp(18px,2.8vw,22px)] max-[480px]:text-[clamp(16px,2.5vw,20px)] font-bold text-gray-900 mb-3">
                Research <br /> Publications
              </h3>
              
              <p className="text-[clamp(13px,2vw,15px)] max-md:text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] text-gray-600 leading-relaxed mb-6 flex-1">
                {services[1].desc}
              </p>
              
              <div className="flex items-center text-purple-600 font-medium text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] group-hover:gap-2 transition-all duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 - Global Networking */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-purple-600/50">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-fiams-purple to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              
              <h3 className="text-[clamp(20px,3vw,24px)] max-md:text-[clamp(18px,2.8vw,22px)] max-[480px]:text-[clamp(16px,2.5vw,20px)] font-bold text-gray-900 mb-3">
                Global <br /> Networking
              </h3>
              
              <p className="text-[clamp(13px,2vw,15px)] max-md:text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] text-gray-600 leading-relaxed mb-6 flex-1">
                {services[2].desc}
              </p>
              
              <div className="flex items-center text-purple-600 font-medium text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] group-hover:gap-2 transition-all duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4 - Industry Leadership */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-yellow-500/50">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-fiams-gold to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              
              <h3 className="text-[clamp(20px,3vw,24px)] max-md:text-[clamp(18px,2.8vw,22px)] max-[480px]:text-[clamp(16px,2.5vw,20px)] font-bold text-gray-900 mb-3">
                Industry <br /> Leadership
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                {services[3].desc}
              </p>
              
              <div className="flex items-center text-yellow-600 font-medium text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] group-hover:gap-2 transition-all duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-14">
          <button className="group bg-fiams-purple hover:bg-fiams-purple text-white font-semibold px-10 py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl">
            Explore All Services →
          </button>
        </div>
      </div>
    </section>
  );
}