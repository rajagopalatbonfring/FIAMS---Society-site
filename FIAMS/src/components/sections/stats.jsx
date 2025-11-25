import { useEffect, useState } from "react";
import Container from "../common/container";

export default function Stats() {
  const stats = [
    { end: 12500, label: "Members Worldwide", suffix: "+" },
    { end: 38, label: "Countries Represented" },
    { end: 285, label: "Institutional Partnerships" },
    { end: 40, label: "Years of Leadership" },
  ];

  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timers = stats.map((stat, i) => {
      const increment = stat.end / 100;
      const timer = setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[i] < stat.end) {
            newCounts[i] = Math.min(newCounts[i] + increment, stat.end);
          }
          return newCounts;
        });
      }, 30);
      return timer;
    });
    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="py-10 bg-fiams-purple/70 text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-2xl lg:text-4xl font-black mb-4 text-fiams-gold">
                {Math.floor(counts[i])}{stat.suffix || ""}
              </div>
              <div className="text-lg font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}