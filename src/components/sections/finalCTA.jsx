export default function FinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-b-3xl m-8">
      <section id="final-cta" className="relative py-12 bg-fiams-purple/90 rounded-full">
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Join the Global Community Advancing Arts Management Excellence
            </h2>
            <p className="text-xl mb-12 opacity-95 max-w-2xl mx-auto">
              Connect with 12,500+ cultural leaders, access cutting-edge research, and advance your impact in the arts and cultural sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn btn--md px-6 py-4 bg-white text-fiams-purple hover:bg-white/90 text-lg font-bold shadow-2xl">
                Apply for Membership
              </button>
              <button className="btn btn--md px-6 py-4 btn--outline text-lg font-bold border-2 border-white shadow-2xl">
                Schedule Information Session
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}