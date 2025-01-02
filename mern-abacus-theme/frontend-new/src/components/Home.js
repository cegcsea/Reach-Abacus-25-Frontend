import "../styles/about.css";
import TypewritingButton from "./TypewritingButton";
const Home = () => {
  return (
    <div className="scroll-mt-20">
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
          <div className="div2 !my-24">
            <img
              className="logo"
              src={require("../assets/images/logo copy.png")}
              alt="Abacus Logo"
            />
            <div className="home_bgcircle1__MiYGt sm:!my-30 md:!my-72 xl:!my-14"></div>
          </div>
          <TypewritingButton />
        </div>
      </div>
      <>
        <h2 className="h2 scroll-mt-36 mt-8 lg:mx-20 !mx-10" id="about">
          Abacus-2025
        </h2>
        <div className="about bg-transparent overflow-hidden ">
          <div className="first">
            <img
              src={require("../assets/images/logo.jpeg")}
              alt="Abacus Logo"
              className="h-[35%] w-[60%] mx-auto lg:mx-20 lg:h-[85%] lg:w-[65%]"
            />
          </div>
          <div className="second py-10 ">
            <p className="text-white text-justify ">
              The conglomeration of the brightest minds enhancing the
              participant’s knowledge and creative potentials. The 3-day annual
              symposium showcases 15+ events and flagship contests of crystal
              gazing technology. Abacus's coverage and deliberations of earlier
              symposia have been a grand success with insatiable thirst for
              technological development rejuvenating the technology with
              innovation. This year, Abacus is back offline on a grander scale
              with an innovative edge to all the events.
            </p>
            <button className=".but !my-8 !mx-24 ">Read More</button>
            {/* <button className="my-5 px-6 py-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow focus:outline-none focus:shadow-[0_0_15px_rgba(255,223,47,0.8)]">
          Read More{" "}
        </button> */}
          </div>
        </div>
      </>
    </div>
  );
};
export default Home;
