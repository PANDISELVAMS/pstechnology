import { CONTACT_INFO } from "../data/data";
import ContactForm from "./ContactForm";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="Contact"
      ref={ref}
      className={`reveal${visible ? " visible" : ""}`}
      style={{ padding: "90px 24px", background: "#ffffff04" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="badge" style={{ background: "#FF6B6B20", color: "#FF6B6B", border: "1px solid #FF6B6B40", marginBottom: 16, display: "inline-block" }}>
            Get In Touch
          </span>
          <h2 className="section-title">
            Contact <span style={{ color: "#6C63FF" }}>PS Technology</span>
          </h2>
          <p style={{ color: "#A0A0B0", marginTop: 12, fontSize: 16 }}>We're here to help. Reach out anytime!</p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ marginBottom: 28 }}>
              {CONTACT_INFO.map(({ icon, label, value }) => (
                <div key={label} style={{
                  display: "flex", gap: 16, alignItems: "flex-start",
                  background: "#ffffff06", border: "1px solid #ffffff10",
                  borderRadius: 14, padding: "16px 20px", marginBottom: 12, transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#6C63FF08"; e.currentTarget.style.borderColor = "#6C63FF30"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#ffffff06"; e.currentTarget.style.borderColor = "#ffffff10"; }}
                >
                  <span style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: "#6C63FF20", border: "1px solid #6C63FF40",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, flexShrink: 0,
                  }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: "#606070", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase" }}>{label}</div>
                    <div style={{ color: "#E0E0F0", fontWeight: 600, marginTop: 2 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <button style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "#25D366", color: "#fff", padding: "14px 24px",
              borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: "pointer",
              border: "none", fontFamily: "inherit", transition: "all 0.2s",
              width: "100%", justifyContent: "center", boxShadow: "0 8px 20px #25D36640",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ fontSize: 22 }}>💬</span>
              Chat on WhatsApp
            </button>
          </div>

          <div><ContactForm /></div>
        </div>
      </div>
    </section>
  );
}