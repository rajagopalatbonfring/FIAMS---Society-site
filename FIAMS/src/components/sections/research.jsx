import { CheckCircle, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import researchBg from "../../assets/newbg.jpg";

import currentPub from '../../assets/publication.jpg'
import recentResearch from '../../assets/research.jpg'

export default function Research() {
  const researchAreas = [
    { title: "Cultural Economics & Policy Analysis", desc: "Investigating the economic impact and policy frameworks for cultural institutions." },
    { title: "Audience Development & Engagement", desc: "Strategies to enhance audience participation and loyalty in arts organizations." },
    { title: "Digital Transformation", desc: "Innovative approaches to integrate technology in arts programming." },
    { title: "Sustainable Funding Models", desc: "Developing resilient financial strategies for cultural institutions." },
  ];

  return (
    <section id="research" className="py-24 relative" 
      style={{backgroundImage: `url(${researchBg})`, backgroundSize: 'cover'}}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container relative z-10">
        <div className="text-left flex flex-col lg:flex-row gap-16 items-start mb-20">
          <div className="lg:w-1/2">
            <div className="inline-block">
              <span className="text-sm font-semibold text-fiams-gold bg-fiams-gold/30 px-4 py-2 rounded-full inline-block">
                Research & Publications
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-8 mb-8 leading-tight">
              Advancing Knowledge in <br/>Arts and Cultural Management
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Explore our cutting-edge research and publications shaping the future of the arts industry.
            </p>
            <div className="bg-fiams-purple/20 p-8 rounded-xl border-l-4 border-fiams-gold mb-8">
              <p className="font-semibold text-white">
                <strong>Our Impact:</strong> FIAMS research cited in 15+ national cultural policies • 
                Co-developer of International Arts Management Framework • 45+ university partnerships
              </p>
            </div>
            
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4 justify-center">
            {researchAreas.map((area) => (
              <div key={area.title} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <h3 className="text-2xl font-semibold mb-3 text-fiams-purple group-hover:text-fiams-purple/80">{area.title}</h3>
                <p className="text-md text-gray-700 leading-relaxed">{area.desc}</p>
              </div>
            ))}
           
          </div>
        </div>
       
        
        
        {/* Publications and Research Section */}
        <div className="grid lg:grid-cols-2 gap-8 text-start">
          {/* Current Publications Card */}
          <div className="group relative rounded-3xl overflow-hidden shadow-xl h-full md:h-[450px] shadow-white/20 hover:shadow-white/40 hover:shadow-2xl transition-all duration-300">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
               style={{ backgroundImage: `url(${currentPub})`, backgroundSize:'cover'}}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-purple-300/80" />
            
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

          {/* Recent Research Highlights Card */}
          <div className="group relative rounded-3xl overflow-hidden shadow-xl h-full md:h-[450px] shadow-white/20 hover:shadow-white/40 hover:shadow-2xl transition-all duration-300">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${recentResearch})`, backgroundSize:'cover'}}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-orange-300/80" />
            
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
        </div>

         <button className="btn btn--primary bg-fiams-gold/80 btn--lg mt-20 hover:bg-fiams-gold">Explore More</button>
      </div>
    </section>
  );
}