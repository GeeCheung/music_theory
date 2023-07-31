import Topnavbar from "../Sidebar/Sidebar";

const Intermediate = () => {
  return (
    <div>
      <div>
        <Topnavbar />
      </div>

      <h1
        style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}
      >
        Intermediate
      </h1>

      <header className="App-header">
        <h1>Welcome to Your Website</h1>
        <p>Start building your awesome website here!</p>
      </header>
      <main>
        {/* Add your content here */}
        <section>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            justo eu purus fringilla gravida.
          </p>
        </section>
        <section>
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            justo eu purus fringilla gravida.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            justo eu purus fringilla gravida.
          </p>
        </section>
      </main>
      <footer className="App-footer">
        <p>
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Intermediate;
