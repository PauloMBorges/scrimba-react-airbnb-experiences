import photoGrid from "../assets/photo-grid.png";

function Hero() {
  return (
    <div className="hero">
      <img className="hero--image" src={photoGrid} alt="photo grid" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--subtitle">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
