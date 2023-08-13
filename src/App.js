import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./components/pages/Account/Account.jsx";
import Basics from "./components/pages/Basic/Basics.jsx";
import ContactForm from "./components/pages/Contactme/Contactme.jsx";
import Forgotpassword from "./components/pages/Login-setup/Forgetpassword/ForgotPassword.jsx";
import Signin from "./components/pages/Login-setup/Signin/Signin.jsx";
import Signup from "./components/pages/Login-setup/Signup/Signup.jsx";
import Post from "./components/pages/Post/Post.jsx";
import ProtectedRoute from "./components/pages/ProtectedRoute.js";
import Quiz from "./components/pages/Quiz/Quiz.jsx";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact-me" element={<ContactForm />} />
          <Route
            path="/post"
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/basics"
            element={
              <ProtectedRoute>
                <Basics />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
