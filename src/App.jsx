import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
      </main>
    </>
  );
};

export default App;
