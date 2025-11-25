import bgimg from '../../assets/heroImg.jpg';
export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70  via-black/20  to-black/70"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-fiams-gold/20 to-fiams-gold/50" /> */}
      
      <div className="container relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Advancing Excellence at the Intersection of Arts and Management
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
            The premier global federation uniting arts professionals, cultural managers, and creative industry leaders in advancing evidence-based practices and strategic innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn btn--primary btn--lg">Join Our Community</button>
            <button className="btn btn--outline btn--lg">Discover Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}