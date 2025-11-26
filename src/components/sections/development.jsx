import React from 'react';
import collageImg from '../../assets/photo-collage.png'
import verifiedLogo from '../../assets/certifiedImg.png'

const ProfessionalDevelopment = () => {
  return (
    <section className="py-[clamp(60px,8vw,80px)] bg-white" id="development">
      <div className="max-w-[1440px] mx-auto px-[clamp(15px,2vw,20px)]">
        {/* Header */}
        <div className="mb-[clamp(40px,6vw,60px)] max-w-full">
          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-2 mb-8 rounded-full inline-block">
            Professional Development
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-5 leading-[1.2]">
            Elevate Your Arts Management Expertise
          </h2>
          <p className="text-xl text-gray-900/90 mb-8 leading-relaxed">
            Advance your career with our tailored professional development programs.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="text-left grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-md:grid-cols-1 gap-[30px] max-md:gap-5 items-start mb-[clamp(40px,6vw,60px)] max-md:mb-[clamp(30px,4vw,40px)]">
          {/* White Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
            <div className="h-[150px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" 
                alt="Leadership conference"
                className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-[clamp(20px,3vw,25px)] max-[480px]:p-[clamp(15px,2.5vw,20px)]">
              {/* <div className="w-12 h-12 mb-5 flex items-center justify-center bg-[rgba(255,107,53,0.1)] rounded-lg text-2xl">
                🎓
              </div> */}
              <h3 className="text-[clamp(20px,3vw,24px)] max-md:text-[clamp(18px,2.8vw,22px)] max-[480px]:text-[clamp(16px,2.5vw,20px)] font-bold mb-[15px] leading-[1.3] text-fiams-gold">
                Executive Leadership <br /> Series
              </h3>
              <p className="text-[clamp(13px,2vw,15px)] max-md:text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] leading-[1.6] mb-[25px] text-[#6c757d]">
                Strategic planning, governance, and financial sustainability for cultural leaders.
              </p>
              <button className="bg-fiams-gold text-white border-none py-3 px-6 max-[480px]:py-[10px] max-[480px]:px-5 rounded font-semibold text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                Explore Series
              </button>
            </div>
          </div>

          {/* Dark Card */}
          <div className="bg-fiams-purple rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
            <div className="h-[150px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop" 
                alt="Digital workshop"
                className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-[clamp(20px,3vw,25px)] max-[480px]:p-[clamp(15px,2.5vw,20px)]">
              {/* <div className="w-12 h-12 mb-5 flex items-center justify-center bg-[rgba(255,107,53,0.2)] rounded-lg text-2xl">
                💻
              </div> */}
              <h3 className="text-[clamp(20px,3vw,24px)] max-md:text-[clamp(18px,2.8vw,22px)] max-[480px]:text-[clamp(16px,2.5vw,20px)] font-bold mb-[15px] leading-[1.3] text-white">
                Digital Innovation <br /> Workshops
              </h3>
              <p className="text-[clamp(13px,2vw,15px)] max-md:text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] leading-[1.6] mb-[25px] text-[#bdc3c7]">
                Technology integration and digital marketing strategies for arts organizations.
              </p>
              <button className="bg-transparent text-white border-2 border-[rgba(255,255,255,0.3)] py-3 px-6 max-[480px]:py-[10px] max-[480px]:px-5 rounded font-semibold text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.5)] hover:translate-x-[2px]">
                Join Workshops
              </button>
            </div>
          </div>

          {/* Orange Card */}
          <div className="bg-fiams-gold rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
            <div className="h-[150px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop" 
                alt="Research and evaluation"
                className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-[clamp(20px,3vw,25px)] max-[480px]:p-[clamp(15px,2.5vw,20px)]">
              {/* <div className="w-12 h-12 mb-5 flex items-center justify-center bg-[rgba(255,255,255,0.2)] rounded-lg text-2xl">
                📊
              </div> */}
              <h3 className="text-[clamp(20px,3vw,24px)] max-md:text-[clamp(18px,2.8vw,22px)] max-[480px]:text-[clamp(16px,2.5vw,20px)] font-bold mb-[15px] leading-[1.3] text-white">
                Research & Evaluation <br />Methods
              </h3>
              <p className="text-[clamp(13px,2vw,15px)] max-md:text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] leading-[1.6] mb-[25px] text-[rgba(255,255,255,0.9)]">
                Data-driven decision-making and impact assessment for arts programs.
              </p>
              <button className="bg-white text-[#ff6b35] border-none py-3 px-6 max-[480px]:py-[10px] max-[480px]:px-5 rounded font-semibold text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,13px)] cursor-pointer transition-all duration-300 hover:bg-[#f8f9fa] hover:translate-x-[2px]">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Certification Wrapper */}
        <div className="relative z-0 flex items-center gap-5 justify-center flex-wrap max-md:flex-col-reverse">
          {/* Certifications Box */}
          <div className="relative z-[3] mt-0 -mr-[130px] max-md:mr-0 max-w-[500px] max-md:max-w-full bg-[rgb(212,212,212)] p-[clamp(15px,2.5vw,20px)] max-[480px]:p-[clamp(12px,2vw,15px)] rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
            <h3 className="text-[clamp(18px,2.8vw,22px)] max-[480px]:text-[clamp(16px,2.5vw,18px)] font-bold text-[#2c3e50] mb-[10px] text-left">
              Certification Programs
            </h3>
            <ul className="list-none max-w-[500px] p-0">
              <li className="py-[clamp(8px,1.5vw,10px)] max-[480px]:py-[clamp(6px,1.2vw,8px)] border-b border-[#eee] text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,12px)] leading-[1.2] text-[#555]">
                <strong className="text-white font-semibold">Certified Arts Administrator (CAA)</strong> - 6-month program
              </li>
              <li className="py-[clamp(8px,1.5vw,10px)] max-[480px]:py-[clamp(6px,1.2vw,8px)] border-b border-[#eee] text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,12px)] leading-[1.2] text-[#555]">
                <strong className="text-white font-semibold">Cultural Policy Analyst Certificate</strong> - 4-month program
              </li>
              <li className="py-[clamp(8px,1.5vw,10px)] max-[480px]:py-[clamp(6px,1.2vw,8px)] text-[clamp(12px,1.8vw,14px)] max-[480px]:text-[clamp(11px,1.6vw,12px)] leading-[1.2] text-[#555]">
                <strong className="text-white font-semibold">Executive Arts Leadership Credential</strong> - 8-month program
              </li>
            </ul>
            <div className="flex items-center justify-center rounded-full w-[100px] h-[100px] max-md:w-[74px] max-md:h-[74px] max-[480px]:w-[60px] max-[480px]:h-[60px] absolute right-0 top-[-50px] max-md:top-[60%] z-[4] bg-white">
              <img className="w-[140px] max-md:w-[100px] max-[480px]:w-[80px]" src={verifiedLogo} alt="" />
            </div>
          </div>

          {/* Events Development */}
          <div className="max-w-[650px] max-md:max-w-full relative z-0">
            <img className="w-full max-w-[550px]" src={collageImg} alt="" />
            <div className="absolute bottom-[-10px] max-md:bottom-[-8px] max-[480px]:bottom-[-6px] left-[-350px] max-md:left-[-200px] max-[480px]:left-[-150px] bg-[#2c2c54] p-[50px] max-md:p-[40px] max-[480px]:p-[30px] rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.1)] min-w-[400px] max-md:min-w-[300px] max-[480px]:min-w-[200px] z-0">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;













// // proffessional styled design

// import React from 'react';

// // Mock images for demo
// const collageImg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop";
// const verifiedLogo = "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=100&h=100&fit=crop";

// const ProfessionalDevelopment = () => {
//   const programs = [
//     {
//       title: "Executive Leadership",
//       description: "Strategic planning and financial sustainability for cultural leaders",
//       duration: "12 weeks",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Digital Innovation",
//       description: "Technology integration and digital marketing for arts organizations",
//       duration: "8 weeks",
//       image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
//     },
//     {
//       title: "Research & Evaluation",
//       description: "Data-driven decision-making and impact assessment",
//       duration: "10 weeks",
//       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
//     }
//   ];

//   const certifications = [
//     { name: "Certified Arts Administrator", code: "CAA", duration: "6 months" },
//     { name: "Cultural Policy Analyst", code: "CPA", duration: "4 months" },
//     { name: "Executive Arts Leadership", code: "EAL", duration: "8 months" }
//   ];

//   return (
//     <section className="py-40 bg-gray-50" id="development">
//       <div className="max-w-8xl mx-auto px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="mb-32">
//           <div className="inline-block mb-3">
//             <span className="text-xs font-medium tracking-wider uppercase text-gray-500">
//               Professional Development
//             </span>
//           </div>
//           <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 max-w-4xl">
//             Advance your career in arts management
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl">
//             Tailored programs designed for working professionals seeking to elevate their expertise.
//           </p>
//         </div>

//         {/* Programs Grid */}
//         <div className="grid lg:grid-cols-3 gap-px bg-gray-300 mb-32">
//           {programs.map((program, index) => (
//             <div
//               key={index}
//               className="group bg-white hover:bg-gray-900 transition-colors duration-300"
//             >
//               <div className="aspect-[4/3] overflow-hidden bg-gray-100">
//                 <img 
//                   src={program.image}
//                   alt={program.title}
//                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
//                 />
//               </div>
//               <div className="p-10">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-2xl font-medium text-gray-900 group-hover:text-white transition-colors">
//                     {program.title}
//                   </h3>
//                   <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
//                     {program.duration}
//                   </span>
//                 </div>
//                 <p className="text-gray-600 group-hover:text-gray-300 transition-colors mb-8">
//                   {program.description}
//                 </p>
//                 <button className="text-sm font-medium text-gray-900 group-hover:text-white transition-colors underline underline-offset-4">
//                   Learn more
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Certification Section */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left: Image */}
//           <div className="relative">
//             <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
//               <img 
//                 src={collageImg}
//                 alt="Professional development"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
//               <div className="text-center">
//                 <div className="text-3xl font-medium text-gray-900">3</div>
//                 <div className="text-xs text-gray-500 uppercase tracking-wide">Programs</div>
//               </div>
//             </div>
//           </div>

//           {/* Right: Certifications */}
//           <div>
//             <h3 className="text-3xl font-medium text-gray-900 mb-2">
//               Professional Certifications
//             </h3>
//             <p className="text-gray-600 mb-12">
//               Industry-recognized credentials that validate your expertise
//             </p>
            
//             <div className="space-y-1 bg-white border border-gray-200">
//               {certifications.map((cert, index) => (
//                 <div
//                   key={index}
//                   className="group p-8 hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0"
//                 >
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <span className="text-xs font-mono font-medium text-gray-400 bg-gray-100 px-2 py-1">
//                           {cert.code}
//                         </span>
//                         <span className="text-xs text-gray-500">
//                           {cert.duration}
//                         </span>
//                       </div>
//                       <h4 className="text-xl font-medium text-gray-900">
//                         {cert.name}
//                       </h4>
//                     </div>
//                     <div className="text-gray-400 group-hover:text-gray-900 transition-colors">
//                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-12 pt-8 border-t border-gray-200">
//               <p className="text-sm text-gray-500 mb-4">
//                 All certifications include practical projects, mentorship, and career support
//               </p>
//               <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4">
//                 View full curriculum
//               </button>
//             </div>
//           </div>

//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-32 pt-16 border-t border-gray-200">
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
//             <div>
//               <h3 className="text-2xl font-medium text-gray-900 mb-2">
//                 Ready to advance your career?
//               </h3>
//               <p className="text-gray-600">
//                 Speak with our admissions team about the right program for you
//               </p>
//             </div>
//             <button className="bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors text-sm font-medium whitespace-nowrap">
//               Schedule consultation
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProfessionalDevelopment;