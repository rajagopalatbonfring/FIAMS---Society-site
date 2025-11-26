


import { Award, Shield, CheckCircle, Globe, BookOpen, Users, Star, Trophy } from "lucide-react";
import Container from "../common/container";
import BgAccerditation from '../../assets/bg-accreditation.jpg'

export default function AccreditationRecognition() {
  const accreditations = [
    {
      icon: Shield,
      title: "International Arts Education Accreditation",
      organization: "Global Arts Education Council (GAEC)",
      description: "Recognized for excellence in integrated arts and management curriculum design"
    },
    {
      icon: Award,
      title: "Management Education Quality Certification",
      organization: "International Management Certification Board",
      description: "Certified for innovative approaches to leadership and organizational management"
    },
    {
      icon: CheckCircle,
      title: "Cultural Studies Program Approval",
      organization: "National Association for Cultural Education",
      description: "Approved for comprehensive cultural management and policy programs"
    },
    {
      icon: Globe,
      title: "Global Education Standards Compliance",
      organization: "World Education Standards Organization",
      description: "Meeting international standards for arts and management education excellence"
    }
  ];



  return (
    <section 
      id="accreditation" 
      className="text-left py-20 bg-gradient-to-br from-fiams-purple/5 via-white to-fiams-gold/5 relative"
      style={{backgroundImage: `url(${BgAccerditation})`, backgroundSize: 'cover'}}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur"></div>
      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-fiams-gold bg-fiams-gold/30 px-4 py-2 mb-8 rounded-full inline-block">Trust & Excellence</span>
          <h2 className="text-white text-5xl lg:text-6xl font-bold mb-6">
            Accreditation &<br />Recognition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to educational excellence is validated by leading international organizations and industry bodies
          </p>
        </div>

        <div className="mb-24">
          {/* Accreditations Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {accreditations.map((accreditation, index) => {
              const Icon = accreditation.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/80 rounded-2xl p-8 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Icon container with gradient background */}
                  <div className="relative mb-6">
                    <div className="inline-flex p-4 rounded-full bg-fiams-purple/70 shadow-lg shadow-fiams-purple/30 group-hover:shadow-fiams-purple/50 transition-shadow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {accreditation.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <p className="text-sm font-semibold text-white uppercase tracking-wide">
                        {accreditation.organization}
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {accreditation.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
}










// // proffessional styled design


// import { Award, Shield, CheckCircle, Globe } from "lucide-react";
// import Container from "../common/container";

// export default function AccreditationRecognition() {
//   const accreditations = [
//     {
//       icon: Shield,
//       title: "International Arts Education Accreditation",
//       organization: "Global Arts Education Council",
//       year: "2023"
//     },
//     {
//       icon: Award,
//       title: "Management Education Quality Certification",
//       organization: "International Management Certification Board",
//       year: "2022"
//     },
//     {
//       icon: CheckCircle,
//       title: "Cultural Studies Program Approval",
//       organization: "National Association for Cultural Education",
//       year: "2023"
//     },
//     {
//       icon: Globe,
//       title: "Global Education Standards Compliance",
//       organization: "World Education Standards Organization",
//       year: "2024"
//     }
//   ];

//   return (
//     <section id="accreditation" className="py-32 bg-white">
//       <Container>
//         <div className="mb-24">
//           <div className="inline-block mb-4">
//             <span className="text-xs font-medium tracking-wider uppercase text-gray-500">
//               Accreditation
//             </span>
//           </div>
//           <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 max-w-3xl">
//             Recognized by leading education bodies worldwide
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl">
//             Our programs meet rigorous international standards, ensuring your education is valued globally.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-px bg-gray-200">
//           {accreditations.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-white p-12 lg:p-16 hover:bg-gray-50 transition-colors duration-200"
//               >
//                 <div className="flex items-start justify-between mb-8">
//                   <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
//                     <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
//                   </div>
//                   <span className="text-sm font-medium text-gray-400">
//                     {item.year}
//                   </span>
//                 </div>
                
//                 <h3 className="text-2xl font-medium text-gray-900 mb-3 tracking-tight">
//                   {item.title}
//                 </h3>
                
//                 <p className="text-base text-gray-500 font-light">
//                   {item.organization}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-20 pt-16 border-t border-gray-200">
//           <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
//             <div>
//               <div className="text-4xl font-medium text-gray-900 mb-2">98%</div>
//               <div className="text-sm text-gray-600">Graduate employment rate within 6 months</div>
//             </div>
//             <div>
//               <div className="text-4xl font-medium text-gray-900 mb-2">50+</div>
//               <div className="text-sm text-gray-600">International partnerships and collaborations</div>
//             </div>
//             <div>
//               <div className="text-4xl font-medium text-gray-900 mb-2">15</div>
//               <div className="text-sm text-gray-600">Years of academic excellence</div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }