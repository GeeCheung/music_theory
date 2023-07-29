import Topnavbar from "../Sidebar/Sidebar";

const Basics = () => {
  return (
    <div>
      <div>
        <Topnavbar />
      </div>
      <h1 style={{ justifyContent: "center", display: "flex" }}>Basics</h1>
      <div style={{ justifyContent: "center", display: "flex" }}>
        {" "}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZNCDoOsJqQw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Basics;
