import "../styles/about.css";
import TypewritingButton from "./TypewritingButton";
const Home = () => {
  return (
    <>
       <div className="initial" id="home">
          <div className="div1">
            <div className="para">
              <h1 className="heading ">
                ABACUS'24 "Ideas Converge and Possibilities Unfold"
              </h1>
              <p className="pres">
                Navigating the Future, One Innovation at a Time
              </p>

              <div class="button-container">
                <button class="glow-button">Contact Us!!</button>
              </div>
            </div>
          </div>
          <div className="new">
            <div className="div2">
              <img
                className="logo"
                src={require("../assets/images/logo copy.png")}
                alt="Abacus Logo"
              />
              <div className="home_bgcircle1__MiYGt"></div>
            </div>
            <TypewritingButton />

          </div>
        </div>
        <>
        <h2 className="h2 scroll-mt-36 mt-8" id="about">Abacus-2025</h2>
        <div className="about">
          <div className="first">
            <img
              src={require("../assets/images/logo.jpeg")}
              alt="Abacus Logo"
              />
          </div>
          <div className="second">
            <p className="vt323-regular">
              The conglomeration of the brightest minds enhancing the
              participant’s knowledge and creative potentials. The 3-day annual
              symposium showcases 15+ events and flagship contests of crystal
              gazing technology. Abacus's coverage and deliberations of earlier
              symposia have been a grand success with insatiable thirst for
              technological development rejuvenating the technology with
              innovation. This year, Abacus is back offline on a grander scale
              with an innovative edge to all the events.
            </p>
            <button className=".but">Read More</button>
          </div>
        </div>
        </>
        
    
    
      </>
  );
};
export default Home;
