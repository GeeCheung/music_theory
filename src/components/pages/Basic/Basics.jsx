import Footer from "../../../components/Footer/Footer";
import Topnavbar from "../../../components/Navbars/TopNavbar";
import "./Basics.css";

const Basics = () => {
  return (
    <div>
      <Topnavbar />

      <p
        className="basictextcenter"
        style={{ marginTop: "70px", fontSize: "36px" }}
      >
        <strong>Why learn basic music theory?</strong>
      </p>

      <p className="basictextcenter">
        Do you want to be able to make your own music, build your own chord
        progressions, or even improvise your own melodies? Do you want to skip
        all the jargon and complicated symbols? <br /> With Gee Music Theory,
        you'll learn basic music theory the simple way with bite-sized lessons,
        no confusing notation, and no instruments required!
      </p>

      <h1 className="basictextcenter">Chords</h1>
      <p className="basictextcenter">
        A group of notes that sound good together. <br />
        Here we'll take a look at three of the most common chords: Major, Minor,
        and Diminished. These are all known as Triads, simply a chord with three
        notes.
      </p>

      <div className="basictextcenter">
        <div>
          <img src={require("../../../content/Major_Chords.png")} />
        </div>

        <div className="keyselection-column ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MLkFwlh7Zeo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sG7QDw5CoU8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <h1 className="basictextcenter">
        Scales
        <br />
      </h1>
      <small className="basictextcenter">
        Scales are fundamental building blocks in music, and they play a crucial
        role in piano playing. A scale is a sequence of musical notes arranged
        in ascending or descending order, usually spanning an octave.
        <br />
        Learning scales is essential for pianists as they provide a foundation
        for understanding harmony, developing finger dexterity, and improving
        overall technique.
      </small>

      <div className="basictextcenter">
        <div>
          <img
            width="590"
            height="670"
            src={require("../../../content/piano_major_scales.png")}
          />
        </div>
        <div className="keyselection-column ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wBkvTQWKYEI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ETuU6_86KaI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Basics;
