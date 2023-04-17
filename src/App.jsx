import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import AboutMe from "./components/AboutMe";
import Citas from "./components/Citas";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Gallery />
      <AboutMe/>
      <Citas />
      <Footer />
    </div>
  );
}
