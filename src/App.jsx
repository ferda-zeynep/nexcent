import Clients from "./components/Clients";
import Demo from "./components/Demo";
import Design from "./components/Design";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marketing from "./components/Marketing";
import Member from "./components/Member";
import Navbar from "./components/Navbar";
import Pixelgrades from "./components/Pixelgrades";
import System from "./components/System";
import Tim from "./components/Tim";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <System />
      <Pixelgrades />
      <Member />
      <Design />
      <Tim />
      <Marketing />
      <Demo />
      <Footer />
    </>
  );
};

export default App;
