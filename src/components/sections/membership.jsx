// export default function Membership() {
//   const plans = [
//     { title: "Professional Member", price: "$245/year", desc: "Full access to research, events, and networking for individuals." },
//     { title: "Institutional Member", price: "$1,200/year", desc: "Up to 5 accounts, custom consultations for organizations." },
//     { title: "Student/Early Career", price: "$95/year", desc: "Mentorship and career resources for new professionals." },
//   ];

//   const benefits = [
//     "Full access to research publications and digital library",
//     "Priority registration and member pricing for programs",
//     "Global network of 12,500+ arts professionals",
//     "Career advancement through job boards and mentorship",
//     "Exclusive industry intelligence and trend reports"
//   ];

//   const awards = [
//     "Excellence in Arts Leadership Award",
//     "Innovation in Cultural Management",
//     "Emerging Professional Recognition",
//     "Research Excellence Awards"
//   ];

//   return (
//     <section id="membership" className="py-24 bg-fiams-lavender/10">
//       <div className="container">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl lg:text-6xl font-bold mb-6">Professional Membership in <br/>Arts Management Excellence</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">Unlock exclusive benefits to advance your career and impact.</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mb-24">
//           {plans.map((plan, index) => (
//             <div key={index} className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all text-center group border-2 border-transparent hover:border-fiams-purple">
//               <h3 className="text-3xl font-bold mb-6 text-fiams-purple">{plan.title}</h3>
//               <p className="text-2xl font-bold text-gray-600 mb-8">{plan.price}</p>
//               <p className="text-gray-600 mb-12 leading-relaxed">{plan.desc}</p>
//               <button className="w-full btn btn--primary py-5 text-lg">Join Now</button>
//             </div>
//           ))}
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           <div>
//             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Member recognition" className="w-full h-96 object-cover rounded-3xl shadow-2xl" />
//           </div>
//           <div className="bg-white p-12 rounded-3xl shadow-xl">
//             <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Benefits</h3>
//             <ul className="space-y-3">
//               {benefits.map((benefit, index) => (
//                 <li key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-fiams-purple/5 rounded-xl hover:from-fiams-purple/10 transition-all hover:translate-x-2">
//                   <span className="w-6 h-6 bg-fiams-purple text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">✓</span>
//                   <span className="text-gray-700">{benefit}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="text-center">
//           <h3 className="text-3xl font-bold mb-12">Member Recognition Opportunities</h3>
//           <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {awards.map((award, index) => (
//               <div key={index} className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border hover:border-fiams-purple">
//                 <div className="w-16 h-16 bg-fiams-gold rounded-2xl mb-6 mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"></div>
//                 <p className="font-semibold text-gray-800 leading-tight">{award}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import { Award, Shield, CheckCircle, Globe, BookOpen, Users, Star, Trophy } from "lucide-react";
import Container from "../common/container";

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
    <section id="accreditation" className="text-left py-24 bg-gradient-to-br from-fiams-purple/5 via-white to-fiams-gold/5">
      <Container>
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-fiams-gold bg-fiams-gold/30 px-4 py-2 rounded-full inline-block">Trust & Excellence</span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Accreditation &<br />Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  className="group relative bg-gradient-to-br from-transparent via-white to-fiams-gold/10 rounded-2xl p-8 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Icon container with gradient background */}
                  <div className="relative mb-6">
                    <div className="inline-flex p-4 rounded-full bg-fiams-purple shadow-lg shadow-fiams-purple/30 group-hover:shadow-fiams-purple/50 transition-shadow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {accreditation.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-1 rounded-full bg-fiams-gold"></div>
                      <p className="text-sm font-semibold text-fiams-gold uppercase tracking-wide">
                        {accreditation.organization}
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
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