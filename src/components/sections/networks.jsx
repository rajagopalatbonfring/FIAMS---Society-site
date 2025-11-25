import map from '../../assets/mapsectionimg.png'
import museum from '../../assets/museumdirector.jpg'
import policy from '../../assets/policyResearchers.jpg'
import artsFunding from '../../assets/artsFunding.jpg'
import artManager from '../../assets/performingArts.jpg'
export default function Networks() {
  const networks = [
    { title: "Museum Directors Council", desc: "450+ members focusing on strategic leadership for museums.", image: `${museum}` },
    { title: "Performing Arts Managers", desc: "680+ members leading theater, dance, and music venues.", image:  `${artManager}` },
    { title: "Cultural Policy Researchers", desc: "320+ members advancing academic and policy analysis.", image:  `${policy}` },
    { title: "Arts Funding Specialists", desc: "280+ members specializing in development and fundraising.", image:  `${artsFunding}` },
  ];

  return (
    <section id="networks" className="py-24">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">Connect Within Your <br/>Arts Management Specialty</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join our professional networks to collaborate with peers worldwide.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-32">
          {networks.map((network, index) => (
            <div key={index} className="group relative rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={network.image} alt={network.title} className="w-full h-64 rounded-2xl object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute shadow-xl -bottom-12 left-6 right-6 bg-white px-6 py-3 rounded-full">
                <h3 className="text-lg font-bold text-fiams-purple mb-2">{network.title}</h3>
                <p className="text-gray-900/90 text-sm">{network.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-12 items-center w-full">
          <img 
            src={map} 
            alt="World map" 
            className="rounded-2xl w-full" 
          />
          <div className="max-w-[500px]">
            <h3 className="text-3xl text-left font-bold ml-8 mb-6">Regional Chapters</h3>
            <div className="relative p-8 rounded-xl">
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 rounded-l-full border-l-4 border-[#2c2c54] bg-gradient-to-r from-[#2c2c54]/5">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>North America:</strong> 8 active chapters
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-l-full border-l-4 border-[#2c2c54] bg-gradient-to-r from-[#2c2c54]/5">
                  <span className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>Europe:</strong> 12 chapters in major cultural centers
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-l-full border-l-4 border-[#2c2c54] bg-gradient-to-r from-[#2c2c54]/5">
                  <span className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>Asia-Pacific:</strong> 5 emerging chapters
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-l-full border-l-4 border-[#2c2c54] bg-gradient-to-r from-[#2c2c54]/5">
                  <span className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <div>
                    <strong>Latin America:</strong> 3 growing chapters
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}