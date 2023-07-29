import Topnavbar from "../Sidebar/Sidebar";

const Basics = () => {
  return (
    <div>
      <div>
        <Topnavbar />
      </div>
      <div>
        <p
          className="textcenter"
          style={{ marginTop: "70px", fontSize: "36px" }}
        >
          <strong>Why learn basic music theory?</strong>
        </p>
        <p className="textcenter">
          Do you want to be able to make your own music, build your own chord
          progressions, or even improvise your own melodies? Do you want to skip
          all the jargon and complicated symbols?
        </p>
        <p className="textcenter" style={{ fontSize: "16px" }}>
          With Gee Music Theory, you'll learn basic music theory the simple way
          with bite-sized lessons, no confusing notation, and no instruments
          required!
        </p>
        <h1 style={{ fontSize: "36px" }} className="textcenter">
          Chords
          <br />
        </h1>
        <small
          className="textcenter"
          style={{
            fontSize: "16px",
            textAlign: "center",
            margin: "16px",
          }}
        >
          A group of notes that sound good together. <br />
          Here we'll take a look at three of the most common chords: Major,
          Minor, and Diminished. These are all known as Triads, simply a chord
          with three notes.
        </small>
        <div className="textcenter">
          <div>
            <img
              src={require("../../content/Major_Chords.png")}
              style={{ marginRight: "20px" }}
            />
          </div>
          <div
            style={{ flexDirection: "column", display: "flex", margin: "20px" }}
          >
            <iframe
              style={{ marginBottom: "15px" }}
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
      </div>
    </div>
  );
};

export default Basics;
