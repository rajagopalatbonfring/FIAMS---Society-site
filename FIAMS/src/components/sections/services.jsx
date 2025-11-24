export default function Services() {
  const services = [
    { title: "Professional Development", desc: "Continuing education and certification programs for arts and management professionals" },
    { title: "Research Publications", desc: "Peer-reviewed journals and academic resources advancing field knowledge" },
    { title: "Global Networking", desc: "Connect with 12,500+ professionals across 38 countries worldwide" },
    { title: "Industry Leadership", desc: "Shape the future of arts and cultural management through policy and innovation" },
  ];

  return (
    <section id="services" className="py-24 relative mt-0">
      <div className="container flex flex-col gap-10">
        <div className="flex flex item-center justify-between h-full">
          <h1 className="text-5xl lg:text-6xl font-bold">Service</h1>
          <div className="flex flex-col align-left justify-start">
            <p>ekbferibgerg gwbrgiwef wegbwe weibgwief webgwebge</p>
            <button className="bg-red-200 rounded p-2">View all</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {services.map((service, index) => (
            <div key={service.title} className="text-left bg-white p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all group rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-fiams-purple">{service.title}</h3>
              <p className="text-gray-600 mb-2 leading-relaxed">{service.desc}</p>
              <div className="text-3xl group-hover:translate-x-2 transition-transform">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}