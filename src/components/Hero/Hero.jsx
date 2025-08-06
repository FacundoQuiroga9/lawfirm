import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-text-container">
          <h1 className="hero-title">Your Legal Shield in Texas</h1>
          <p className="hero-tagline">Tailored legal solutions for your unique case.</p>
          <a href="tel:+14697820166" className="hero-btn">CALL ME</a>
        </div>
        <div className="hero-img-container">
          <img src="/images/mark2.png" alt="Lawyer" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
