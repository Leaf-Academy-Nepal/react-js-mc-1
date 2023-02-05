const Hero = () => {
  return (
    <div className="header flex light-bg">
      <div>
        <button>Front-End Developer</button>
        <h1 className="white">Talk is cheap.</h1>
        <h1 className="white">Show me the code!</h1>
        <p className="gray">
          I design and code beautiful simple things, and I love what I do.
        </p>
        <a className="green" href="mailto:contact@blaiti.com">
          Let's chat!
        </a>
      </div>
      <img src="/human.webp" alt="sameer" />
    </div>
  );
};

export default Hero;
