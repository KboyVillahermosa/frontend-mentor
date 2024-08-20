import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Component as Navbar } from "./components/navbar/Navbar";
import { Component as Banner } from "./components/banner/Banner";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Featured from "./featured/Featured";
import Learn from './components/learn//Learn'
import Community from "./components/community/Community";

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
                < Testimonials />
                < Featured />
                <Works />
                < Learn />
                < Community />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
