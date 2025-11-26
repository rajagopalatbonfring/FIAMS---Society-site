
import { CheckCircle, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import abtimg from '../../assets/aboutImg.jpg'
import currentPub from '../../assets/publication.jpg'
import recentResearch from '../../assets/research.jpg'

export default function AboutSection() {
  return (
    <section id="about-detailed" className="py-32 bg-gradient-to-r from-gray-50 via-white to-gray-50  text-left">
      <div className="container mx-auto">
        {/* Main Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full inline-block">
                About FIAMS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
              Engineering Excellence
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-fiams-purple to-fiams-purple">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-black via-fiams-gold to-fiams-gold'>in Arts</span> Management
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                At FIAMS, we believe that the intersection of creativity and strategic management creates unparalleled value. Our integrated approach combines artistic vision with business acumen, fostering leaders who can navigate the complex landscape of contemporary cultural industries.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Through rigorous research, professional development programs, and global networking opportunities, we empower arts professionals to drive meaningful change in their organizations and communities.
              </p>
            </div>
            <button className="group bg-fiams-purple hover:bg-fiams-purple text-white font-semibold px-10 py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
              Know about us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image with Overlay */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={abtimg} 
                alt="Team collaboration" 
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Feature Card */}

                <div className="block mt-4 sm:absolute sm:mt-0 bottom-32 -right-12 flex items-center bg-white rounded-full p-3 shadow-2xl max-w-sm border border-gray-100 group hover:shadow-3xl transition-shadow flex items-start gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="w-8 h-8 bg-fiams-gold text-white rounded-full flex items-center justify-center font-bold">✓</span>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">Evidence-based practices</span>
                    <p className="text-sm text-gray-500 mt-1">Grounded in research</p>
                  </div>
                </div>

                <div className="block mt-4 sm:absolute sm:mt-0 bottom-8 -right-10 flex items-center bg-white rounded-full p-3 shadow-2xl max-w-sm border border-gray-100 group hover:shadow-3xl transition-shadow flex items-start gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="w-8 h-8 bg-fiams-gold text-white rounded-full flex items-center justify-center font-bold">✓</span>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">Strategic innovation frameworks</span>
                    <p className="text-sm text-gray-500 mt-1">Forward-thinking solutions</p>
                  </div>
                </div>

                <div className="block mt-4 sm:absolute sm:mt-0 top-64 -right-16 flex items-center bg-white rounded-full p-3 shadow-2xl max-w-sm border border-gray-100 group hover:shadow-3xl transition-shadow flex items-start gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="w-8 h-8 bg-fiams-gold text-white rounded-full flex items-center justify-center font-bold">✓</span>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">Global best practices</span>
                    <p className="text-sm text-gray-500 mt-1">International standards</p>
                  </div>
                </div>

          </div>
        </div>

        
      </div>
    </section>
  );
}











// // proffessional styled design

// import React from 'react';

// // Mock images
// const abtimg = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=900&fit=crop";

// export default function AboutSection() {
//   const principles = [
//     { title: "Evidence-based practices", description: "Grounded in research" },
//     { title: "Strategic frameworks", description: "Forward-thinking solutions" },
//     { title: "Global standards", description: "International best practices" }
//   ];

//   return (
//     <section id="about-detailed" className="py-40 bg-white">
//       <div className="max-w-8xl mx-auto px-6 lg:px-8">
        
//         <div className="grid lg:grid-cols-2 gap-20 items-start">
          
//           {/* Left Content */}
//           <div>
//             <div className="inline-block mb-3">
//               <span className="text-xs font-medium tracking-wider uppercase text-gray-500">
//                 About FIAMS
//               </span>
//             </div>
            
//             <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-8 leading-[1.1]">
//               Excellence in arts management education
//             </h2>
            
//             <div className="space-y-6 mb-12">
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 At FIAMS, we believe that the intersection of creativity and strategic management creates unparalleled value. Our integrated approach combines artistic vision with business acumen, fostering leaders who can navigate the complex landscape of contemporary cultural industries.
//               </p>
//               <p className="text-gray-500 leading-relaxed">
//                 Through rigorous research, professional development programs, and global networking opportunities, we empower arts professionals to drive meaningful change in their organizations and communities.
//               </p>
//             </div>

//             {/* Principles List */}
//             <div className="space-y-1 border-l border-gray-200 mb-12">
//               {principles.map((principle, index) => (
//                 <div
//                   key={index}
//                   className="pl-8 py-4 border-l-2 border-transparent hover:border-gray-900 transition-all duration-200"
//                 >
//                   <div className="font-medium text-gray-900 mb-1">
//                     {principle.title}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {principle.description}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button className="bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors text-sm font-medium">
//               Learn more about us
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="relative lg:sticky lg:top-8">
//             <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
//               <img 
//                 src={abtimg}
//                 alt="FIAMS team collaboration"
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             {/* Stats Overlay */}
//             <div className="absolute bottom-8 left-8 right-8 bg-white p-8 shadow-lg">
//               <div className="grid grid-cols-2 gap-8">
//                 <div>
//                   <div className="text-3xl font-medium text-gray-900 mb-1">25+</div>
//                   <div className="text-sm text-gray-600">Years of impact</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-medium text-gray-900 mb-1">60+</div>
//                   <div className="text-sm text-gray-600">Countries reached</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Section - Research & Publications */}
//         <div className="mt-32 pt-16 border-t border-gray-200">
//           <div className="grid md:grid-cols-3 gap-12">
            
//             <div>
//               <h3 className="text-xl font-medium text-gray-900 mb-4">
//                 Our Approach
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 We integrate academic rigor with practical application, ensuring our programs remain relevant and impactful in rapidly evolving cultural sectors.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-medium text-gray-900 mb-4">
//                 Research Focus
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Our faculty and partners conduct cutting-edge research in cultural policy, audience development, and organizational sustainability.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-medium text-gray-900 mb-4">
//                 Global Network
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Connect with arts leaders worldwide through our extensive network of professionals, institutions, and industry partners.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }