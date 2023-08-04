import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./components/pages/Account.jsx";
import Basics from "./components/pages/Basics.jsx";
import ContactForm from "./components/pages/Contactme.jsx";
import Forgotpassword from "./components/pages/ForgotPassword.jsx";
import Intermediate from "./components/pages/Intermediate.jsx";
import Post from "./components/pages/Post.jsx";
import ProtectedRoute from "./components/pages/ProtectedRoute.js";
import Quiz from "./components/pages/Quiz/Quiz.jsx";
import Signin from "./components/pages/Signin.jsx";
import Signup from "./components/pages/Signup.jsx";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
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
          <Route
            path="/intermediate"
            element={
              <ProtectedRoute>
                <Intermediate />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
