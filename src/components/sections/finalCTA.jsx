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
    <div className="relative overflow-hidden bg-black mx-8 my-20 rounded-3xl">
      {/* GLITCH BACKGROUND – WILL-FIRE GUARANTEED */}
      <div className="absolute inset-0">
        {/* Base dark purple gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />

        {/* GLITCH LAYER 1 – Horizontal neon stripes */}
        <div
          className="absolute inset-0 mix-blend-screen opacity-80"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 30px,
              #00ffff 30px,
              #00ffff 35px,
              #ff00ff 35px,
              #ff00ff 65px,
              transparent 65px
            )`,
            backgroundSize: '300% 100%',
            animation: 'glitchSlide1 4s linear infinite',
          }}
        />

        {/* GLITCH LAYER 2 – Diagonal madness */}
        <div
          className="absolute inset-0 mix-blend-screen opacity-60"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 20px,
              #ffff00 20px,
              #ffff00 25px,
              #00ffff 40px,
              #00ffff 45px
            )`,
            backgroundSize: '400% 400%',
            animation: 'glitchSlide2 6s linear infinite',
          }}
        />

        {/* GLITCH LAYER 3 – Fast color sweep */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-70"
          style={{
            background: 'linear-gradient(90deg, transparent 30%, #ff00ff 45%, #00ffff 55%, transparent 70%)',
            backgroundSize: '500% 100%',
            animation: 'glitchSweep 2.5s ease-in-out infinite',
          }}
        />

        {/* Scanlines */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'linear-gradient(transparent 50%, rgba(0,255,255,0.1) 50%)',
            backgroundSize: '100% 4px',
            animation: 'scanlines 6s linear infinite',
          }}
        />

        {/* CRT static noise */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-soft-light"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23noise)' opacity='0.7'/%3E%3C/svg%3E")`,
            animation: 'noiseFlicker 0.2s steps(10) infinite',
          }}
        />
      </div>

      {/* Blur overlay + dark tint */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/40 pointer-events-none z-10" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-black via-transparent to-black" />

      {/* CONTENT */}
      <section className="relative z-20 py-24 text-center px-8">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          Join the Global Community<br />Advancing Arts Management<br />Excellence
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 opacity-90">
          Connect with 12,500+ cultural leaders, access cutting-edge research, and advance your impact in the arts and cultural sector.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-white text-purple-700 font-bold text-lg rounded-full hover:bg-gray-100 transition hover:scale-105 shadow-xl">
            Apply for Membership
          </button>
          <button className="px-8 py-4 border-4 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition hover:scale-105">
            Schedule Information Session
          </button>
        </div>
      </section>

      {/* FORCED GLOBAL KEYFRAMES – works 100% everywhere */}
      <style>{`
        @keyframes glitchSlide1 {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes glitchSlide2 {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        @keyframes glitchSweep {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scanlines {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes noiseFlicker {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(4px, 4px); }
        }
      `}</style>
    </div>
  );
}