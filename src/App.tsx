import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Component as Navbar } from "./components/navbar/Navbar";
import { Component as Banner } from "./components/banner/Banner";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Featured from "./featured/Featured";
import Learn from "./components/learn//Learn";
import Community from "./components/community/Community";
import Faq from "./components/faq/Faq";
import Join from "./components/join/Join";
import Hiring from "./components/hiring/Hiring";
import { Component as Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Banner />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Testimonials />
                <Featured />
                <Works />
                <Learn />
                <Community />
                <Faq />
                <Join />
                <Hiring />
                < Footer/>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
