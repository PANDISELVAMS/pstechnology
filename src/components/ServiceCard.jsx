import useScrollReveal from "../hooks/useScrollReveal";

export default function ServiceCard({ service, delay }) {
  const { ref, visible } = useScrollReveal(0.2);
  const { icon, title, badge, color, gradient, border, items, cta } = service;

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={ref}
      style={{
        borderRadius: 20,
        padding: "32px 28px",
        background: gradient,
        border: `1px solid ${border}`,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        cursor: "default",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px) scale(1.01)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: `${color}20`, border: `1px solid ${color}40`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26,
        }}>
          {icon}
        </div>
        <span className="badge" style={{ background: `${color}20`, color, border: `1px solid ${color}40` }}>
          {badge}
        </span>
      </div>

      <h3 style={{ fontSize: 19, fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
        {title}
      </h3>

      <ul style={{ listStyle: "none", marginBottom: 28 }}>
        {items.map((item) => (
          <li key={item} style={{
            color: "#C0C0D0", fontSize: 14, padding: "5px 0",
            borderBottom: "1px solid #ffffff08",
            display: "flex", alignItems: "center",
          }}>
            <span style={{ color, marginRight: 8, fontWeight: 700 }}>✓</span>
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={() => scroll("Contact")}
        style={{
          background: `${color}20`, color, border: `1px solid ${color}40`,
          width: "100%", textAlign: "center",
          padding: "12px 24px", borderRadius: 12,
          fontSize: 14, fontWeight: 700, cursor: "pointer",
          fontFamily: "inherit", transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = `${color}35`; }}
        onMouseLeave={e => { e.currentTarget.style.background = `${color}20`; }}
      >
        {cta} →
      </button>
    </div>
  );
}