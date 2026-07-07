import useScrollReveal from "../hooks/useScrollReveal";

export default function Hero() {
  const { ref, visible } = useScrollReveal(0.1);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="Home"
      ref={ref}
      className={`reveal${visible ? " visible" : ""}`}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 60px",
      }}
    >
      {/* Background Blobs */}
      <div className="floating-dot" style={{ width: 300, height: 300, background: "#6C63FF15", top: "10%", right: "5%", animationDelay: "0s" }} />
      <div className="floating-dot" style={{ width: 180, height: 180, background: "#00C89610", top: "60%", right: "20%", animationDelay: "2s" }} />
      <div className="floating-dot" style={{ width: 120, height: 120, background: "#FF6B6B10", top: "30%", left: "2%", animationDelay: "4s" }} />
      <div className="glow-ring" style={{ width: 400, height: 400, top: "5%", right: "0%", animationDelay: "0s" }} />
      <div className="glow-ring" style={{ width: 250, height: 250, top: "55%", right: "18%", animationDelay: "2s" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 700 }}>
          <div style={{ marginBottom: 20 }}>
            <span className="badge" style={{ background: "#6C63FF20", color: "#6C63FF", border: "1px solid #6C63FF40" }}>
              🚀 Since 2022 · Trusted by 5000+ Customers
            </span>
          </div>

          <h1 className="hero-title" style={{ marginBottom: 24 }}>
            Your One-Stop<br />Laptop Destination
          </h1>

          <p style={{ fontSize: 18, color: "#A0A0B0", lineHeight: 1.7, marginBottom: 36, maxWidth: 540 }}>
            At <strong style={{ color: "#fff" }}>PS Technology</strong>, we bring you the best laptops —
            new & refurbished — along with expert repairs and premium accessories. All under one roof.
          </p>

          <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="cta-btn cta-primary" onClick={() => scroll("Services")}>Explore Services →</button>
            <button className="cta-btn cta-outline" onClick={() => scroll("Contact")}>Contact Us</button>
          </div>

          <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
            {[["💻", "Laptops"], ["🔧", "Repairs"], ["🎒", "Accessories"]].map(([icon, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <span style={{ color: "#A0A0B0", fontSize: 14, fontWeight: 600 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}