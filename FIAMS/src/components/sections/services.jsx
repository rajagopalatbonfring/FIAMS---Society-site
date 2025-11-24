// export default function Services() {
//   const services = [
//     { title: "Professional Development", desc: "Continuing education and certification programs for arts and management professionals" },
//     { title: "Research Publications", desc: "Peer-reviewed journals and academic resources advancing field knowledge" },
//     { title: "Global Networking", desc: "Connect with 12,500+ professionals across 38 countries worldwide" },
//     { title: "Industry Leadership", desc: "Shape the future of arts and cultural management through policy and innovation" },
//   ];

//   return (
//     <section id="services" className="py-24 relative mt-0">
//       <div className="container flex flex-col gap-10">
//         <div className="flex flex item-center justify-between h-full">
//           <div className="inline-block">
//             <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-4 py-2 rounded-full">
//               Our Service
//             </span>
//           </div>
//           <h1 className="text-5xl lg:text-6xl font-bold">Service</h1>
//           <div className="flex flex-col align-left justify-start">
//             <p>ekbferibgerg gwbrgiwef wegbwe weibgwief webgwebge</p>
//             <button className="bg-red-200 rounded p-2">View all</button>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
//           {services.map((service, index) => (
//             <div key={service.title} className="text-left bg-white p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all group rounded-xl">
//               <h3 className="text-2xl font-bold mb-4 text-fiams-purple">{service.title}</h3>
//               <p className="text-gray-600 mb-2 leading-relaxed">{service.desc}</p>
//               <div className="text-3xl group-hover:translate-x-2 transition-transform">→</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








export default function Services() {
  const services = [
    { title: "Professional Development", desc: "Continuing education and certification programs for arts and management professionals" },
    { title: "Research Publications", desc: "Peer-reviewed journals and academic resources advancing field knowledge" },
    { title: "Global Networking", desc: "Connect with 12,500+ professionals across 38 countries worldwide" },
    { title: "Industry Leadership", desc: "Shape the future of arts and cultural management through policy and innovation" },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 text-left">
          <div className="flex-1">
            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full inline-block mb-4">
              Our Service
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get Started With Us
            </h1>
          </div>
          
          <div className="flex-1 max-w-lg flex flex-col items-start text-right">
            <p className="text-gray-600 leading-relaxed mb-6">
              Discover comprehensive services designed to empower arts and cultural management professionals worldwide through education, networking, and research excellence.
            </p>

          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Service Cards */}
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`text-left p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all group rounded-2xl ${
                index % 2 === 0 ? 'bg-purple-100' : 'bg-white'
              }`}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
              <div className="text-2xl text-purple-600 group-hover:translate-x-2 transition-transform">→</div>
            </div>
          ))}
        </div>

        <button className="bg-fiams-gold hover:bg-fiams-gold text-gray-800 mt-10 px-6 py-2 rounded-lg transition-all font-medium">
          View all
        </button>

        {/* Call to Action Banner */}
        {/* <div className="mt-8 bg-gradient-to-br from-purple-500 to-purple-300 rounded-2xl p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex -space-x-4">
              <div className="w-16 h-16 rounded-full border-4 border-white bg-purple-700 flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-white bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-white bg-purple-800 flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Get Started With Us</h3>
              <p className="text-purple-100 text-sm">
                Become part of a global network advancing arts and cultural management excellence
              </p>
            </div>
            
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Join Now →
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}