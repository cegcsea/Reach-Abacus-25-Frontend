import { LoaderData } from "../context/loaderContext";
import "../styles/about.css";
import Loader from "./Loader/Loader";
import TypewritingButton from "./TypewritingButton";
import { motion } from "framer-motion";
import React,{ useEffect,useState } from "react";

// Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideFromLeft = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};


const slideFromRight = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const Home = ({ scrollToContact }) => {
 
  const [imageSrc, setImageSrc] = useState(
    require("../assets/Reach/Reach'25 logo white(short).png")
  );
  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth <= 800) {
        setImageSrc(require("../assets/Reach/reach new.png")); // Set a different image for small screens
      } else {
        setImageSrc(require("../assets/Reach/Reach'25 logo white(short).png"));
      }
    }; updateImageSrc(); // Set initial value
    window.addEventListener("resize", updateImageSrc); // Listen for resize events

    return () => window.removeEventListener("resize", updateImageSrc); // Cleanup
  }, []);
  const { isLoading } = LoaderData();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <motion.div
      className="scroll-mt-20"
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <motion.div className="initial !mb-10" id="home">
        <motion.div
          className="div1"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="para">
            <h1 className="heading text-center">
              Reach'25 "Ideas Converge and Possibilities Unfold"
            </h1>
            <p className="pres text-center text-white">
              Navigating the Future, One Innovation at a Time
            </p>

            <div className="button-container text-center">
              <motion.button
                className="mt-10 mb-6 px-6 py-4 bg-gradient-to-br from-red-300 via-red-500 to-red-800 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow focus:outline-none focus:shadow-[0_0_15px_rgba(255,223,47,0.8)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ pointerEvents: "auto" }}
                onClick={scrollToContact}
              >
                Contact Us!!
              </motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div className="new">
          <motion.div
            className="div2 !my-24"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
          >
            <img
              className="logo"
              src={require("../assets/Reach/abacus'25_logo_white.png")}
              alt="Abacus Logo"
            />
            <div className="home_bgcircle1__MiYGt !mb-[90px] md:!my-68  lg:!my-68"></div>
          </motion.div>
          <TypewritingButton />
        </motion.div>
      </motion.div>
      <motion.div className="about-section">
        <motion.h2
          className="h2 scroll-mt-36 lg:!mt-16 lg:mx-20 !mx-auto text-2xl lg:text-5xl font-bold text-[#fcfcfc] text-center mb-8 overflow-hidden [text-shadow:6px_2px_4px_#c03e3e]"
          id="about"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Reach-2025
        </motion.h2>
        <img src={require("../assets/Reach/Reach'25_logo_white.png")}></img>
        <motion.div
          className="about bg-transparent overflow-hidden flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex  flex-row whole">
            <motion.div className="first" variants={slideFromLeft}>
              <img
                src={imageSrc}
                alt="Reach logo"
                className="ablogo reachlogo "
              />
            </motion.div>
            <motion.div
              className="second py-10 flex flex-col "
              variants={slideFromRight}
            >
              <p className="text-white text-justify">
                Every year, as a component of ABACUS, we organize outreach
                initiatives in renowned colleges across Tamil Nadu, aiming to
                enhance student engagement and amplify awareness for our
                symposium. Our specialized workshops under the REACH umbrella
                introduce students to emerging technologies, ensuring they
                remain at the forefront of innovation and industry relevance.
                REACH goes beyond academics by offering tailored events that
                prepare students for competitive landscapes, equipping them with
                essential skills and confidence for future placements and
                interviews.
              </p>
              {/* <motion.button
              className=".but !my-8 !mx-auto xl:!mx-0 lg:w-[23%]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Read More
            </motion.button> */}
            </motion.div>
          </motion.div>
          <motion.div className="flex  flex-row whole">
            <motion.div className="first" variants={slideFromLeft}>
              <img
                src={require("../assets/Reach/abacus'25_logo_white.png")}
                alt="Abacus Logo"
                className="ablogo "
              />
            </motion.div>
            <motion.div
              className="second py-10 flex flex-col "
              variants={slideFromRight}
            >
              <p className="text-white text-justify">
                The conglomeration of the brightest minds enhancing the
                participant’s knowledge and creative potentials. The 3-day
                annual symposium showcases 15+ events and flagship contests of
                crystal gazing technology. Abacus's coverage and deliberations
                of earlier symposia have been a grand success with insatiable
                thirst for technological development rejuvenating the technology
                with innovation. This year, Abacus is back offline on a grander
                scale with an innovative edge to all the events.
              </p>
              {/* <motion.button
              className=".but !my-8 !mx-auto xl:!mx-0 lg:w-[23%]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Read More
            </motion.button> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
