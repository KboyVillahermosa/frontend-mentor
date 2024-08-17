import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Component as Navbar } from "./components/navbar/Navbar";
import { Component as Banner } from "./components/banner/Banner";
import Works from "./components/works/Works";

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
                <Works />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
