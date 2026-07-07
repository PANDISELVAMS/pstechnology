import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/data";

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "#0A0A0Fee" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid #ffffff10" : "none",
      transition: "all 0.3s", padding: "0 24px",
    }}>
      <style>{`
        .nav-link {
          background: none; border: none; color: #A0A0B0; font-size: 15px;
          cursor: pointer; padding: 8px 16px; border-radius: 8px;
          transition: all 0.2s; font-family: inherit; letter-spacing: 0.3px;
        }
        .nav-link:hover, .nav-link.active { color: #fff; background: #6C63FF20; }
        .nav-link.active { color: #6C63FF; }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; padding: 8px;
        }
        .mobile-menu {
          display: none;
        }
        @media(max-width: 768px) {
          .hamburger { display: block !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu.open {
            display: flex; flex-direction: column;
            position: absolute; top: 70px; left: 0; right: 0;
            background: #12121Aee; backdrop-filter: blur(20px);
            padding: 16px; gap: 4px;
            border-bottom: 1px solid #ffffff10;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg,#6C63FF,#8B85FF)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, boxShadow: "0 4px 16px #6C63FF50"
          }}>💻</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.3px" }}>PS TECHNOLOGY</div>
            <div style={{ fontSize: 10, color: "#6C63FF", letterSpacing: "1.5px", fontWeight: 600 }}>LAPTOP SOLUTIONS</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: 4 }}>
          {NAV_LINKS.map(link => (
            <button key={link} className={`nav-link${active === link ? " active" : ""}`} onClick={() => scroll(link)}>
              {link}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{ width: 22, height: 2, background: "#fff", marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <div style={{ width: 22, height: 2, background: "#fff", marginBottom: 5, opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: 22, height: 2, background: "#fff", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map(link => (
          <button key={link} className={`nav-link${active === link ? " active" : ""}`} onClick={() => scroll(link)}>
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
