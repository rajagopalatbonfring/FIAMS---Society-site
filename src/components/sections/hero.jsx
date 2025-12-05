// import bgimg from '../../assets/heroImg.jpg';
// export default function Hero() {
//   return (
//     <section 
//       className="relative min-h-screen flex items-center bg-cover bg-center" 
//       style={{ backgroundImage: `url(${bgimg})` }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70  via-black/20  to-black/70"></div>
//       {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-fiams-gold/20 to-fiams-gold/50" /> */}
      
//       <div className="container relative z-10 text-center text-white">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
//             Advancing Excellence at the Intersection of Arts and Management
//           </h1>
//           <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
//             The premier global federation uniting arts professionals, cultural managers, and creative industry leaders in advancing evidence-based practices and strategic innovation
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="btn btn--primary btn--lg">Join Our Community</button>
//             <button className="btn btn--outline btn--lg">Discover Services</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import bgimg from '../../assets/heroImg.jpg';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-black/45"></div>
      
      <div className="container relative z-10">
        <div className="max-w-8xl space-y-16 mx-auto flex flex-col items-center justify-center">
        <div> 
          {/* ORGANIZATION NAME - Subtle, elegant */}
          <p className="text-sm uppercase tracking-widest text-orange-400 font-semibold mb-4">
            FIAMS - Federation of International Arts Management Studies
          </p>

          {/* MAIN HEADLINE */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
            Connect. Collaborate. Advance.
          </h1>
          
          {/* SUBHEADING */}
          <p className="text-lg md:text-xl mb-4 opacity-95 text-white leading-relaxed">
            A global community of arts professionals, cultural managers, and researchers advancing the field through collaborative research, publications, and professional development.
          </p>

        </div>

          {/* QUICK BENEFITS */}
          <div className="mb-10 space-y-2 text-md text-white/90">
            <p className="flex items-center gap-3">
              <span className="text-orange-400 text-xl">→</span>
              <span>Access exclusive publications, research, and collaborative opportunities</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-orange-400 text-xl">→</span>
              <span>Join 500+ members advancing arts & cultural management globally</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-orange-400 text-xl">→</span>
              <span>Participate in forums, events, and professional networks</span>
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 items-start justify-center">
            <button className="btn btn--primary btn--lg border-2 border-fiams-purple px-8 py-4 text-white font-medium hover:shadow-lg hover:border-purple-900/10 transition">
              Join FIAMS →
            </button>
            <button className="btn btn--outline btn--lg px-8 py-4 text-white hover:text-orange-400 transition font-medium ">
              Explore our work
            </button>
          </div>

          {/* STATS */}
          {/* <div className='w-full'>
            <hr className='opacity-50' />

            <div className="w-full mt-12 p-8 pt-12 bg-fiams-purple relative rounded-xl">
              <span className="text-xs uppercase tracking-widest text-white/80 mb-4 absolute -top-4 left-[30%] right-[30%] p-2 bg-fiams-gold rounded-full">FIAMS by the Numbers</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-2xl font-bold text-orange-400">500+</p>
                  <p className="text-sm text-white/80">Active Members</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-400">50+</p>
                  <p className="text-sm text-white/80">Publications</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-400">12+</p>
                  <p className="text-sm text-white/80">Annual Events</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-400">60+</p>
                  <p className="text-sm text-white/80">Research Projects</p>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}
