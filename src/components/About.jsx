import { ABOUT_FEATURES } from "../data/data";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="About"
      ref={ref}
      className={`reveal${visible ? " visible" : ""}`}
      style={{ padding: "90px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          <div>
            <span className="badge" style={{ background: "#00C89620", color: "#00C896", border: "1px solid #00C89640", marginBottom: 20, display: "inline-block" }}>
              About Us
            </span>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Powering Your <span style={{ color: "#6C63FF" }}>Digital Life</span><br />Since 2022
            </h2>
            <p style={{ color: "#A0A0B0", lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
              PS Technology was founded with a simple mission — to make quality laptops and reliable service
              accessible to everyone. Whether you're a student, professional, or gamer, we've got the right solution for you.
            </p>
            <p style={{ color: "#A0A0B0", lineHeight: 1.8, marginBottom: 32, fontSize: 15 }}>
              From sourcing top-grade refurbished laptops to providing same-day repairs, our team of certified
              technicians and sales experts are always ready to help.
            </p>

            <div className="about-features" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {ABOUT_FEATURES.map(([icon, text]) => (
                <div key={text} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "#ffffff06", border: "1px solid #ffffff10",
                  padding: "12px 16px", borderRadius: 12, transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#6C63FF10"; e.currentTarget.style.borderColor = "#6C63FF30"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#ffffff06"; e.currentTarget.style.borderColor = "#ffffff10"; }}
                >
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#D0D0E0" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              background: "linear-gradient(135deg, #6C63FF15, #00C89610)",
              border: "1px solid #6C63FF30", borderRadius: 24, padding: 40, textAlign: "center",
            }}>
              <div style={{ fontSize: 80, marginBottom: 16 }}>💻</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 4 }}>PS TECHNOLOGY</div>
              <div style={{ color: "#6C63FF", fontWeight: 700, letterSpacing: "2px", fontSize: 12, marginBottom: 24 }}>LAPTOP SOLUTIONS</div>
              <div style={{ background: "#ffffff08", borderRadius: 14, padding: "16px 20px", marginBottom: 12 }}>
                <div style={{ color: "#A0A0B0", fontSize: 12 }}>Established</div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 22 }}>2022</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1, background: "#6C63FF20", borderRadius: 12, padding: 12 }}>
                  <div style={{ color: "#6C63FF", fontWeight: 800, fontSize: 20 }}>5K+</div>
                  <div style={{ color: "#A0A0B0", fontSize: 11 }}>Customers</div>
                </div>
                <div style={{ flex: 1, background: "#00C89620", borderRadius: 12, padding: 12 }}>
                  <div style={{ color: "#00C896", fontWeight: 800, fontSize: 20 }}>2K+</div>
                  <div style={{ color: "#A0A0B0", fontSize: 11 }}>Laptops Sold</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}