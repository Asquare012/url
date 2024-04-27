import "../styles/Hero.scss";
import Her_img from "../assets/illustration-working.svg";

const Hero = () => {
  const handleClick = () => {
    window.scrollBy(0, 500);
  };
  return (
    <div className="Hero">
      <div className="Hero-Img">
        <img src={Her_img} alt="hero_img" height="100%" width="100%" />
      </div>
      <div className="Hero-Content">
        <div className="Content-Title">
          <h1>
            More than just <br />
            shorter links
          </h1>
        </div>
        <div className="Content-Subtitle">
          Build your brand’s recognition and get detailed insights on how your
          links are performing
        </div>
        <div className="Content-Button">
          <button onClick={handleClick}>Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
