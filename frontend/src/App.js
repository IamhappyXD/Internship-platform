import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Companies from "./pages/Companies";
import Internships from "./pages/Internships";
import Layout from "./components/Navbar/Layout";
import NewInternshipPage from "./pages/NewInternshipPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/reviews" element={<Reviews />}></Route>
        <Route exact path="/profile" element={<ProfilePage />}></Route>
        <Route exact path="/companies" element={<Companies />}></Route>
        <Route exact path="/internships" element={<Internships />}></Route>
        <Route
          exact
          path="/new-internship"
          element={<NewInternshipPage />}
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/sign-up" element={<SignUpPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
