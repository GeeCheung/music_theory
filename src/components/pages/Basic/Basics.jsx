import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Topnavbar from "../../../components/Navbars/TopNavbar";
import "./Basics.css";

const Basics = () => {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <Topnavbar />

      <div className="herosection">
        <div className="herogroup">
          <h1 className="herotitle">Why learn basic music theory?</h1>
          <p className="herotext">
            Do you want to be able to make your own music, build your own chord
            progressions, or even improvise your own melodies? Do you want to
            skip all the jargon and complicated symbols? With Gee Music Theory,
            you'll learn basic music theory the simple way with bite-sized
            lessons, no confusing notation, and no instruments required!
          </p>
          <Link to="/account">
            <button type="submit" className="btn btn_basics_submit">
              Take a tour
            </button>
          </Link>
        </div>
        <img
          className="heroimg"
          src={require("../../../content/piano.png")}
          alt="Hero Background"
        />
      </div>

      <div className="herosection">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ margin: "3%" }}
          className="item"
        >
          <iframe
            className="youtubevid"
            src="https://www.youtube.com/embed/MLkFwlh7Zeo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="herogroup item framer"
        >
          <h1 className="herotitle">What You'll Learn</h1>
          <p className="herotext">
            In our basic music theory course, you'll discover the fundamental
            concepts that form the backbone of all music. From understanding
            scales and keys to creating memorable melodies, our lessons will
            guide you through each step of the musical journey. Whether you're a
            complete beginner or someone looking to refresh their knowledge, our
            course is designed to help you build a solid foundation in music
            theory.
          </p>
        </motion.div>
      </div>

      <div className="colswidth">
        <div className="cols">
          <img
            className="learnpiano"
            src={require("../../../content/learn-piano.jpg")}
            alt="Hero Background"
          />

          <p className="colstext">
            <h1>Music Theory Made Easy</h1>
            In the foundational music theory course we offer, you will explore
            the essential principles that underlie all music. Starting from
            grasping scales and keys to crafting memorable melodies, our
            instructional modules will lead you through every phase of this
            musical expedition. Regardless of whether you are an absolute novice
            or an individual aiming to renew their understanding, our course is
            meticulously crafted to assist you in constructing a strong bedrock
            in music theory.
            <Link to="/account">
              <button type="submit" className="btn btn_learn_submit">
                learn ♪
              </button>
            </Link>
          </p>
        </div>
      </div>

      <div className="herosection">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="herogroup"
        >
          <h1 className="herotitle">What You'll Learn</h1>
          <p className="herotext">
            In our basic music theory course, you'll discover the fundamental
            concepts that form the backbone of all music. From understanding
            scales and keys to creating memorable melodies, our lessons will
            guide you through each step of the musical journey. Whether you're a
            complete beginner or someone looking to refresh their knowledge, our
            course is designed to help you build a solid foundation in music
            theory.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ margin: "3%" }}
        >
          {" "}
          <iframe
            className="youtubevid"
            src="https://www.youtube.com/embed/n-Mj1rnOZrM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Basics;
