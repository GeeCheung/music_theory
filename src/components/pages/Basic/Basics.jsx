import Footer from "../../../components/Footer/Footer";
import Topnavbar from "../../../components/Navbars/TopNavbar";
import "./Basics.css";

const Basics = () => {
  return (
    <div>
      <Topnavbar />

      <p>
        <strong>Why learn basic music theory?</strong>
      </p>

      <>
        Do you want to be able to make your own music, build your own chord
        progressions, or even improvise your own melodies? Do you want to skip
        all the jargon and complicated symbols? <br /> With Gee Music Theory,
        you'll learn basic music theory the simple way with bite-sized lessons,
        no confusing notation, and no instruments required!
      </>

      <h1>Chords</h1>
      <p>
        A group of notes that sound good together. <br />
        Here we'll take a look at three of the most common chords: Major, Minor,
        and Diminished. These are all known as Triads, simply a chord with three
        notes.
      </p>

      <Footer />
    </div>
  );
};

export default Basics;
