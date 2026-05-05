export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo-large">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.jpeg" alt="Agentic Arc Logo" />
          </div>
          
          <div className="hero-divider"></div>
          
          <div className="hero-text">
            <h1 className="hero-title">AGENTIC ARC</h1>
            <h2 className="hero-subtitle">DEPT CLUB</h2>
            <p className="hero-tagline">A CURVE OF INTELLIGENT ACTION</p>
            
            <div className="hero-btns">
              <a href="#about" className="btn btn-primary">
                Explore Club
              </a>
              <a href="#register" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
