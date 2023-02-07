import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;
