import { useEffect, useState } from "react";
import Container from "../common/container";

export default function Stats() {
  return (
    <section className="">

          {/* STATS */}
          <div className='w-full'>
            <hr className='opacity-50' />

            <div className="w-full p-8 pt-12 bg-fiams-purple relative">
              <span className="text-xs uppercase tracking-widest text-white/80 font-bold mb-4 absolute -top-4 left-[30%] right-[30%] p-2 bg-fiams-gold rounded-full">FIAMS by the Numbers</span>
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
          </div>
    </section>
  );
}