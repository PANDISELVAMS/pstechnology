import { useState, useEffect } from "react";
import { SERVICES } from "../data/data";
import ServiceCard from "./ServiceCard";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Services() {
  const [visibleCards, setVisibleCards] = useState([]);
  const { ref, visible } = useScrollReveal();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisibleCards([0, 1, 2]), 200);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <section
      id="Services"
      ref={ref}
      className={`reveal${visible ? " visible" : ""}`}
      style={{ padding: "90px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="badge" style={{ background: "#6C63FF20", color: "#6C63FF", border: "1px solid #6C63FF40", marginBottom: 16, display: "inline-block" }}>
            What We Offer
          </span>
          <h2 className="section-title">
            Our <span style={{ color: "#6C63FF" }}>Services</span>
          </h2>
          <p style={{ color: "#A0A0B0", marginTop: 12, fontSize: 16, maxWidth: 480, margin: "12px auto 0" }}>
            Everything your laptop needs — from buying to fixing to accessorizing.
          </p>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} visible={visibleCards.includes(i)} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}