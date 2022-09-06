import { Fragment } from "react";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Services from "./Components/Services";
import News from "./Components/News";
import Campuses from "./Components/Campuses";
import Employment from "./Components/Employment";
import Accredation from "./Components/Accredation";
import Footer from "./Components/Footer";

function App() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    handleResize();
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Fragment>
      <Navbar windowDimensions={windowDimensions} />
      <Header />
      <Cards />
      <Services />
      <News />
      <Campuses />
      <Employment />
      <Accredation />
      <Footer />
    </Fragment>
  );
}

export default App;
