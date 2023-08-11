import { motion } from "framer-motion";
import Footer from "../../../components/Footer/Footer";
import Topnavbar from "../../../components/Navbars/TopNavbar";
import "./Basics.css";

const Basics = () => {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <Topnavbar />

      <h1 className="title_basics">Why learn basic music theory?</h1>

      <p className="introtext">
        Do you want to be able to make your own music, build your own chord
        progressions, or even improvise your own melodies? Do you want to skip
        all the jargon and complicated symbols? <br /> With Gee Music Theory,
        you'll learn basic music theory the simple way with bite-sized lessons,
        no confusing notation, and no instruments required!
      </p>

      <h1 className="basictextcenter">Chords</h1>
      <p className="chordstext">
        A group of notes that sound good together. <br />
        Here we'll take a look at three of the most common chords: Major, Minor,
        and Diminished. These are all known as Triads, simply a chord with three
        notes.
      </p>

      <iframe
        className="youtubeembedded"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MLkFwlh7Zeo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <h1 className="basictextcenter">Scales</h1>
      <p className="scalestext">
        Scales in piano are sequences of notes played in specific patterns.{" "}
        Common types include: <br /> <br />
        Major Scale: Happy, 7 notes, whole-whole-half-whole-whole-whole-half.{" "}
        <br />
        Natural Minor Scale: Sad, 7 notes,
        whole-half-whole-whole-half-whole-whole. <br />
        Harmonic Minor Scale: Unique, 7 notes,
        whole-half-whole-whole-half-augmented 2nd-half. <br />
        Melodic Minor Scale: Jazz-like, ascending:
        whole-half-whole-whole-whole-half, descending: natural minor pattern.
        <br /> Chromatic Scale: All 12 notes in an octave, each a half step.{" "}
        <br />
        Pentatonic Scale: Versatile, 5 notes, used in folk, rock, blues. <br />
        Blues Scale: Expressive, based on pentatonic with added "blue note."
        <br />
        <br />
        These scales provide the basis for melodies, harmonies, and chords in
        music.
      </p>

      <iframe
        className="youtubeembedded"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/n-Mj1rnOZrM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <Footer />
    </motion.div>
  );
};

export default Basics;
