import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.jpeg" alt="Logo" className="footer-logo" />
        <h3 className="footer-title">AGENTIC ARC</h3>
        <p className="footer-tagline">A CURVE OF INTELLIGENT ACTION</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/agentic-arc-club-aab967401?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-copy">
          © 2026 Agentic Arc Club — Sai Vidya Institute of Technology,
          Bengaluru.
        </p>
      </div>
    </footer>
  );
}
