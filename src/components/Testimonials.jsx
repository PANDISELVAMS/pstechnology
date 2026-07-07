import { TESTIMONIALS } from "../data/data";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Testimonials() {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " visible" : ""}`}
      style={{ padding: "60px 24px", background: "#ffffff04" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, textAlign: "center", marginBottom: 32 }}>
          What Our Customers Say ⭐
        </h3>

        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal${visible ? ` visible reveal-delay-${i + 1}` : ""}`}
              style={{
                borderRadius: 16, padding: 24,
                background: "#ffffff06", border: "1px solid #ffffff10",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#6C63FF40";
                e.currentTarget.style.background = "#6C63FF08";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#ffffff10";
                e.currentTarget.style.background = "#ffffff06";
              }}
            >
              <div style={{ color: "#FFD700", marginBottom: 10 }}>{"★".repeat(t.rating)}</div>
              <p style={{ color: "#C0C0D0", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>"{t.text}"</p>
              <div style={{ fontWeight: 700, color: "#6C63FF", fontSize: 14 }}>— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}