import { useState, useEffect, useRef } from "react";
import { STATS } from "../data/data";

function parseValue(val) {
  const suffix = val.replace(/[0-9]/g, "");
  const target = parseInt(val.replace(/\D/g, ""), 10);
  return { target, suffix };
}

function useCountUp(target, duration = 1800, started) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) {
      setCount(0);
      return;
    }
    let startTime = null;
    let animId;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [started, target, duration]);

  return count;
}

function StatCard({ stat, started, delay }) {
  const { target, suffix } = parseValue(stat.value);
  const count = useCountUp(target, 1800, started);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        borderRadius: 16, padding: 24, textAlign: "center",
        background: hovered ? "#6C63FF15" : "#ffffff08",
        border: `1px solid ${hovered ? "#6C63FF40" : "#ffffff10"}`,
        transition: "all 0.3s",
        transform: started ? "translateY(0)" : "translateY(20px)",
        opacity: started ? 1 : 0,
        transitionDelay: `${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        fontSize: 34, fontWeight: 900, color: "#6C63FF",
        letterSpacing: "-1px", fontVariantNumeric: "tabular-nums",
        transition: "transform 0.2s",
        transform: hovered ? "scale(1.08)" : "scale(1)",
      }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ color: "#A0A0B0", fontSize: 13, fontWeight: 600, marginTop: 6 }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(false);
          setTimeout(() => setStarted(true), 50);
        } else {
          setStarted(false);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "#ffffff05",
        borderTop: "1px solid #ffffff10",
        borderBottom: "1px solid #ffffff10",
        padding: "40px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="stats-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}
        >
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} started={started} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}