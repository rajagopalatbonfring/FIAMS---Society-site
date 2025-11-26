import map from '../../assets/mapsectionimg.png'
import museum from '../../assets/museumdirector.jpg'
import policy from '../../assets/policyResearchers.jpg'
import artsFunding from '../../assets/artsFunding.jpg'
import artManager from '../../assets/performingArts.jpg'
export default function Networks() {
  const networks = [
    { title: "Museum Directors Council", desc: "450+ members focusing on strategic leadership for museums.", image: `${museum}` },
    { title: "Performing Arts Managers", desc: "680+ members leading theater, dance, and music venues.", image:  `${artManager}` },
    { title: "Cultural Policy Researchers", desc: "320+ members advancing academic and policy analysis.", image:  `${policy}` },
    { title: "Arts Funding Specialists", desc: "280+ members specializing in development and fundraising.", image:  `${artsFunding}` },
  ];

  return (
    <section id="networks" className="py-24">
      <div className="container">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 mb-8 rounded-full inline-block">
            Professional Network
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">Connect Within Your <br/>Arts Management Specialty</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join our professional networks to collaborate with peers worldwide.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-32">
          {networks.map((network, index) => (
            <div key={index} className="group relative rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={network.image} alt={network.title} className="w-full h-64 rounded-2xl object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute shadow-xl -bottom-12 left-6 right-6 bg-white px-6 py-3 rounded-full">
                <h3 className="text-lg font-bold text-fiams-purple mb-2">{network.title}</h3>
                <p className="text-gray-900/90 text-sm">{network.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-12 items-center w-full">
          <img 
            src={map} 
            alt="World map" 
            className="rounded-2xl w-full" 
          />
          <div className="max-w-[500px]">
            <h3 className="text-3xl text-left font-bold ml-8 mb-6">Regional Chapters</h3>
            <div className="relative p-8 rounded-xl">
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 rounded-l-full border-l-4 border-[#2c2c54] bg-gradient-to-r from-[#2c2c54]/5">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>North America:</strong> 8 active chapters
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-l-full border-l-4 border-[#2c2c54] bg-gradient-to-r from-[#2c2c54]/5">
                  <span className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>Europe:</strong> 12 chapters in major cultural centers
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-l-full border-l-4 border-[#2c2c54] bg-gradient-to-r from-[#2c2c54]/5">
                  <span className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>Asia-Pacific:</strong> 5 emerging chapters
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-l-full border-l-4 border-[#2c2c54] bg-gradient-to-r from-[#2c2c54]/5">
                  <span className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>Latin America:</strong> 3 growing chapters
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}













// // proffessional styled design


// import React from 'react';

// // Mock images for demo
// const map = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=800&fit=crop";
// const museum = "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400&h=500&fit=crop";
// const policy = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=500&fit=crop";
// const artsFunding = "https://images.unsplash.com/photo-1554224311-beee4c27c98d?w=400&h=500&fit=crop";
// const artManager = "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=500&fit=crop";

// export default function Networks() {
//   const networks = [
//     { 
//       title: "Museum Directors", 
//       count: "450+",
//       focus: "Strategic leadership",
//       image: museum
//     },
//     { 
//       title: "Performing Arts Managers", 
//       count: "680+",
//       focus: "Theater, dance, music",
//       image: artManager
//     },
//     { 
//       title: "Cultural Policy", 
//       count: "320+",
//       focus: "Research & analysis",
//       image: policy
//     },
//     { 
//       title: "Arts Funding", 
//       count: "280+",
//       focus: "Development strategy",
//       image: artsFunding
//     },
//   ];

//   const chapters = [
//     { region: "North America", count: "8", code: "NA" },
//     { region: "Europe", count: "12", code: "EU" },
//     { region: "Asia-Pacific", count: "5", code: "AP" },
//     { region: "Latin America", count: "3", code: "LA" }
//   ];

//   return (
//     <section id="networks" className="py-40 bg-white">
//       <div className="max-w-8xl mx-auto px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="mb-32">
//           <div className="inline-block mb-3">
//             <span className="text-xs font-medium tracking-wider uppercase text-gray-500">
//               Professional Networks
//             </span>
//           </div>
//           <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 max-w-4xl">
//             Connect with your specialty network
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl">
//             Join focused communities of arts management professionals worldwide.
//           </p>
//         </div>

//         {/* Networks Grid */}
//         <div className="grid lg:grid-cols-4 gap-px bg-gray-200 mb-40">
//           {networks.map((network, index) => (
//             <div
//               key={index}
//               className="group relative bg-white overflow-hidden"
//             >
//               <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
//                 <img 
//                   src={network.image}
//                   alt={network.title}
//                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//                 />
//               </div>
//               <div className="p-8 bg-white group-hover:bg-gray-50 transition-colors">
//                 <div className="mb-4">
//                   <div className="text-sm text-gray-400 mb-1">{network.count} members</div>
//                   <h3 className="text-xl font-medium text-gray-900">
//                     {network.title}
//                   </h3>
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   {network.focus}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Regional Chapters */}
//         <div className="grid lg:grid-cols-2 gap-20 items-start">
          
//           {/* Map */}
//           <div className="relative">
//             <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
//               <img 
//                 src={map}
//                 alt="Global network map"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute top-8 left-8 bg-white px-4 py-2 text-sm font-medium text-gray-900">
//               28 chapters worldwide
//             </div>
//           </div>

//           {/* Chapter List */}
//           <div>
//             <h3 className="text-3xl font-medium text-gray-900 mb-12">
//               Regional Chapters
//             </h3>
            
//             <div className="space-y-1 border-l border-gray-200">
//               {chapters.map((chapter, index) => (
//                 <div
//                   key={index}
//                   className="group pl-8 py-6 hover:pl-12 transition-all duration-200 border-l-2 border-transparent hover:border-gray-900"
//                 >
//                   <div className="flex items-baseline justify-between mb-1">
//                     <h4 className="text-xl font-medium text-gray-900">
//                       {chapter.region}
//                     </h4>
//                     <span className="text-sm font-mono text-gray-400">
//                       {chapter.code}
//                     </span>
//                   </div>
//                   <div className="text-gray-600">
//                     {chapter.count} active chapters
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-12 pt-8 pl-8 border-l border-gray-200">
//               <p className="text-sm text-gray-500 mb-4">
//                 New chapters launching in Africa and Middle East in 2025
//               </p>
//               <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4">
//                 Find your local chapter
//               </button>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Stats */}
//         <div className="mt-32 pt-16 border-t border-gray-200">
//           <div className="grid md:grid-cols-3 gap-12">
//             <div>
//               <div className="text-4xl font-medium text-gray-900 mb-2">1,730+</div>
//               <div className="text-sm text-gray-600">Active network members</div>
//             </div>
//             <div>
//               <div className="text-4xl font-medium text-gray-900 mb-2">45</div>
//               <div className="text-sm text-gray-600">Countries represented</div>
//             </div>
//             <div>
//               <div className="text-4xl font-medium text-gray-900 mb-2">120+</div>
//               <div className="text-sm text-gray-600">Annual networking events</div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }