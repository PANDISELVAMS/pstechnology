import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  if (sent) {
    return (
      <div style={{
        background: "#00C89620", border: "1px solid #00C89640",
        color: "#00C896", padding: 24, borderRadius: 12,
        textAlign: "center", fontWeight: 600, fontSize: 16,
      }}>
        ✅ Message sent! We'll get back to you within 24 hours.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Name + Phone Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={{ fontSize: 12, color: "#606070", fontWeight: 700, display: "block", marginBottom: 6, letterSpacing: "0.5px" }}>
            YOUR NAME
          </label>
          <input
            className="input-field"
            placeholder="Arjun Kumar"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label style={{ fontSize: 12, color: "#606070", fontWeight: 700, display: "block", marginBottom: 6, letterSpacing: "0.5px" }}>
            PHONE
          </label>
          <input
            className="input-field"
            placeholder="+91 XXXXX XXXXX"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>

      {/* Email */}
      <div style={{ marginBottom: 14 }}>
        <label style={{ fontSize: 12, color: "#606070", fontWeight: 700, display: "block", marginBottom: 6, letterSpacing: "0.5px" }}>
          EMAIL
        </label>
        <input
          className="input-field"
          type="email"
          placeholder="you@email.com"
          required
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: 20 }}>
        <label style={{ fontSize: 12, color: "#606070", fontWeight: 700, display: "block", marginBottom: 6, letterSpacing: "0.5px" }}>
          MESSAGE
        </label>
        <textarea
          className="input-field"
          rows={5}
          placeholder="Tell us what you need — buying, repair, or accessories..."
          required
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          style={{ resize: "vertical" }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        style={{
          width: "100%", padding: 16, borderRadius: 12,
          background: "linear-gradient(135deg, #6C63FF, #8B85FF)",
          color: "#fff", fontSize: 16, fontWeight: 700,
          cursor: "pointer", border: "none", fontFamily: "inherit",
          transition: "all 0.25s", boxShadow: "0 8px 30px #6C63FF40",
          letterSpacing: "0.3px",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px #6C63FF60"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px #6C63FF40"; }}
      >
        Send Message →
      </button>
    </form>
  );
}
