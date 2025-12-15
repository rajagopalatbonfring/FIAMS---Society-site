// export default function FinalCTA() {
//   return (
//     <div className="relative bg-[image:linear-gradient(to_bottom,#F4A261BF_50%,white_50%)] overflow-hidden">
//       <section id="final-cta" className="relative py-20 bg-fiams-purple rounded-full m-8">
//         <div className="container relative z-10 text-center text-white">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-8">
//               Join the Global Community Advancing Arts Management Excellence
//             </h2>
//             <p className="text-xl mb-12 opacity-95 max-w-2xl mx-auto">
//               Connect with 12,500+ cultural leaders, access cutting-edge research, and advance your impact in the arts and cultural sector.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <button className="btn btn--sm px-3 py-3 bg-white text-fiams-purple hover:bg-white/90 text-lg font-bold shadow-2xl">
//                 Apply for Membership
//               </button>
//               <button className="btn btn--sm px-3 py-3 btn--outline text-lg font-bold border-2 border-white shadow-2xl">
//                 Schedule Information Session
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }











// FinalCTA.jsx
export default function FinalCTA() {
  return (
    <div className="relative overflow-hidden bg-transparent mt-32 my-10 mx-10">
      {/* CONTENT */}
      <section className="relative z-20 py-24 text-center px-8  backdrop-blur-xl">
        <h2 className="text-5xl md:text-7xl font-semibold text-black mb-8 leading-tight">
          Join the Global Community<br />Advancing Arts Management<br />Excellence
        </h2>
        <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto mb-12 opacity-90">
          Connect with 12,500+ cultural leaders, access cutting-edge research, and advance your impact in the arts and cultural sector.
        </p>
 
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-gray-900 text-fiams-gold font-bold text-lg rounded-full hover:bg-gray-500 transition hover:scale-105 shadow-xl">
            Apply for Membership
          </button>
          <button className="px-8 py-4 border-4 border-gray-900 text-black font-bold text-lg rounded-full hover:bg-white hover:text-black transition hover:scale-105">
            Schedule Information Session
          </button>
        </div>
      </section>

    </div>
  );
}