import { motion } from "framer-motion";
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
        <div>
          <h1 className="herotitle">Why learn basic music theory?</h1>
          <p className="herotext">
            Do you want to be able to make your own music, build your own chord
            progressions, or even improvise your own melodies? Do you want to
            skip all the jargon and complicated symbols? With Gee Music Theory,
            you'll learn basic music theory the simple way with bite-sized
            lessons, no confusing notation, and no instruments required!
          </p>
        </div>

        <img
          className="heroimg"
          src={require("../../../content/piano.png")}
          alt="Hero Background"
        />
      </div>

      <Footer />
    </motion.div>
  );
};

export default Basics;
