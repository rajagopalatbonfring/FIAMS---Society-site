import React from 'react';
import collageImg from '../../assets/photo-collage.png'
import verifiedLogo from '../../assets/certifiedImg.png'

const ProfessionalDevelopment = () => {
  return (
    <section className="py-[clamp(60px,8vw,80px)] bg-white" id="development">
      <div className="max-w-[1440px] mx-auto px-[clamp(15px,2vw,20px)]">
        {/* Header */}
        <div className="mb-[clamp(40px,6vw,60px)] max-w-full">
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
              <div className="w-12 h-12 mb-5 flex items-center justify-center bg-[rgba(255,107,53,0.1)] rounded-lg text-2xl">
                🎓
              </div>
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
              <div className="w-12 h-12 mb-5 flex items-center justify-center bg-[rgba(255,107,53,0.2)] rounded-lg text-2xl">
                💻
              </div>
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
              <div className="w-12 h-12 mb-5 flex items-center justify-center bg-[rgba(255,255,255,0.2)] rounded-lg text-2xl">
                📊
              </div>
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