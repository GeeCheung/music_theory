import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./components/pages/Account/Account.jsx";
import Basics from "./components/pages/Basic/Basics.jsx";
import Quiz from "./components/pages/Quiz/Quiz.jsx";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Basics />} />
          <Route path="/account" element={<Account />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
