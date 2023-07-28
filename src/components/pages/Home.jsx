import { useNavigate } from "react-router-dom";
import Topnavbar from "../Sidebar/Sidebar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Topnavbar />
      </div>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
