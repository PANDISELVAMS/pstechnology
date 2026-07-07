export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #ffffff10",
      padding: "32px 24px",
      background: "#080810",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 16,
      }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg,#6C63FF,#8B85FF)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
          }}>
            💻
          </div>
          <span style={{ fontWeight: 800, fontSize: 15 }}>PS TECHNOLOGY</span>
        </div>

        {/* Copyright */}
        <div style={{ color: "#606070", fontSize: 13 }}>
          © 2024 PS Technology. All rights reserved.{" "}
          <a href="#" style={{ color: "#6C63FF", textDecoration: "none" }}>Privacy Policy</a>
        </div>

        {/* Made with love */}
        <div style={{ color: "#606070", fontSize: 13 }}>
          Made with ❤️ in Tamil Nadu
        </div>

      </div>
    </footer>
  );
}
