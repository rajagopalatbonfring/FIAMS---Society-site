// import abtimg from '../../assets/aboutImg.jpg'
// import currentPub from '../../assets/publication.jpg'
// export default function AboutSection() {
//   return (
//     <section id="about-detailed" className="py-24 text-left">
//       <div className="container">
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
//           <div>
//             <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
//               Engineering Excellence <br className="hidden md:block"/>in Arts Management
//             </h2>
//             <p className="text-xl text-gray-700 mb-6 leading-relaxed">
//               At FIAMS, we believe that the intersection of creativity and strategic management creates unparalleled value. 
//               Our integrated approach combines artistic vision with business acumen, fostering leaders who can navigate the complex landscape of contemporary cultural industries.
//             </p>
//             <p className="text-xl text-gray-700 mb-12 leading-relaxed">
//               Through rigorous research, professional development programs, and global networking opportunities, 
//               we empower arts professionals to drive meaningful change in their organizations and communities.
//             </p>
//             <button className="btn btn--primary text-lg px-10 py-4">Know about us</button>
//           </div>
//           <div className="relative group">
//             <div className="bg-gray-400 h-96 rounded-2xl">
//               <img src={abtimg} alt="" />
//             </div>
//             <div className="absolute -bottom-20 -right-20 bg-white p-4 rounded-2xl shadow-2xl w-80">
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <span className="w-6 h-6 bg-fiams-gold text-white rounded-full flex items-center justify-center font-bold">✓</span>
//                   <span className="font-medium">Evidence-based practices</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-6 h-6 bg-fiams-gold text-white rounded-full flex items-center justify-center font-bold">✓</span>
//                   <span className="font-medium">Strategic innovation frameworks</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="w-6 h-6 bg-fiams-gold text-white rounded-full flex items-center justify-center font-bold">✓</span>
//                   <span className="font-medium">Global best practices</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="flex gap-6 bg-gradient-to-br from-fiams-purple to-fiams-purple/90 text-white rounded-2xl shadow-2xl">
//             <div 
//               className='flex items-center justify-center rounded-l-xl'
//               style={{ backgroundImage: `url(${currentPub})`, backgroundSize:'cover'}}
//             >
//               <h3 className="text-2xl text-center font-bold mb-6">Current Publications</h3>
//             </div>
//             <div
//               className='flex items-center justify-center'
//             >
//               <ul className="space-y-3 text-lg">
//                 <li>Journal of Arts Management Research - Quarterly, Peer-Reviewed</li>
//                 <li>Cultural Policy & Practice Review - Bi-annual</li>
//                 <li>Arts Leadership White Paper Series - Monthly</li>
//                 <li>Global Arts Management Trends Report - Annual</li>
//               </ul>
//             </div>
//           </div>
//           <div className="bg-gray-100 py-6 rounded-2xl shadow-xl flex gap-6">
//             <div
//               className='flex items-center justify-center rounded-l-xl'
//               style={{ backgroundImage: `url(${currentPub})`, backgroundSize:'cover'}}
//             >
//               <h3 className="text-2xl font-bold mb-6 text-white p-0">Recent Research Highlights</h3>
//             </div>
//             <div className='flex items-center justify-center'>
//               <ul className="space-y-3 text-gray-700">
//                 <li><em>Post-Pandemic Audience Engagement: A Multi-National Study</em> (September 2025)</li>
//                 <li><em>Digital Revenue Streams in Performing Arts Organizations</em> (August 2025)</li>
//                 <li><em>Cultural Policy Impact Assessment Framework</em> (July 2025)</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import { CheckCircle, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import abtimg from '../../assets/aboutImg.jpg'
import currentPub from '../../assets/publication.jpg'
import recentResearch from '../../assets/research.jpg'

export default function AboutSection() {
  return (
    <section id="about-detailed" className="py-24 bg-gradient-to-b from-white to-gray-50 text-left">
      <div className="container mx-auto">
        {/* Main Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-4 py-2 rounded-full">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={abtimg} 
                alt="Team collaboration" 
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Feature Card */}
            <div className="block mt-4 sm:absolute sm:mt-0 -top-16 -right-3 bg-white rounded-2xl p-4 shadow-2xl max-w-sm border border-gray-100 hover:shadow-3xl transition-shadow">
              <div className="space-y-5">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="w-6 h-6 bg-fiams-gold text-white rounded-full flex items-center justify-center font-bold">✓</span>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">Evidence-based practices</span>
                    <p className="text-sm text-gray-500 mt-1">Grounded in research</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="w-6 h-6 bg-fiams-gold text-white rounded-full flex items-center justify-center font-bold">✓</span>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">Strategic innovation frameworks</span>
                    <p className="text-sm text-gray-500 mt-1">Forward-thinking solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="w-6 h-6 bg-fiams-gold text-white rounded-full flex items-center justify-center font-bold">✓</span>
                  </div>
                  <div>
                    <span className="text-base font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">Global best practices</span>
                    <p className="text-sm text-gray-500 mt-1">International standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications and Research Section */}
        {/* <div className="grid lg:grid-cols-2 gap-8">
          <div className="group relative rounded-3xl overflow-hidden shadow-xl h-full md:h-[450px] hover:shadow-2xl transition-all duration-300">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
               style={{ backgroundImage: `url(${currentPub})`, backgroundSize:'cover'}}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-purple-900/80" />
            
            <div className="relative h-full flex flex-col p-10 text-white">
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <h3 className="text-4xl font-bold">Current</h3>
                  <h3 className="text-4xl font-bold">Publications</h3>
                </div>
              </div>
              
              <ul className="space-y-5 flex-grow">
                <li className="flex items-start gap-4 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange-500 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-100 leading-relaxed group-hover/item:text-white transition-colors">
                    Journal of Arts Management Research - Quarterly, Peer-Reviewed
                  </span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange-500 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-100 leading-relaxed group-hover/item:text-white transition-colors">
                    Cultural Policy & Practice Review - Bi-annual
                  </span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange-500 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-100 leading-relaxed group-hover/item:text-white transition-colors">
                    Arts Leadership White Paper Series - Monthly
                  </span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange-500 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-100 leading-relaxed group-hover/item:text-white transition-colors">
                    Global Arts Management Trends Report - Annual
                  </span>
                </li>
              </ul>

              <button className="mt-6 text-white font-semibold flex items-center gap-2 group/btn">
                <span className="group-hover/btn:underline">View all publications</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-xl h-full md:h-[450px] hover:shadow-2xl transition-all duration-300">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${recentResearch})`, backgroundSize:'cover'}}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-fiams-gold/80" />
            
            <div className="relative h-full flex flex-col p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="text-4xl font-bold">Recent</h3>
                  <h3 className="text-4xl font-bold">Research Highlights</h3>
                </div>
              </div>
              
              <ul className="space-y-4 flex-grow">
                <li className="group/item bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1 text-orange-400 group-hover/item:translate-x-1 transition-transform" />
                    <div>
                      <p className="text-white font-medium italic leading-relaxed">Post-Pandemic Audience Engagement: A Multi-National Study</p>
                      <p className="text-sm text-orange-300 mt-1 font-semibold">September 2025</p>
                    </div>
                  </div>
                </li>
                <li className="group/item bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1 text-orange-400 group-hover/item:translate-x-1 transition-transform" />
                    <div>
                      <p className="text-white font-medium italic leading-relaxed">Digital Revenue Streams in Performing Arts Organizations</p>
                      <p className="text-sm text-orange-300 mt-1 font-semibold">August 2025</p>
                    </div>
                  </div>
                </li>
              </ul>

              <button className="mt-6 text-white font-semibold flex items-center gap-2 group/btn">
                <span className="group-hover/btn:underline">Explore all research</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}