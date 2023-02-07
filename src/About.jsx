import AboutCard from "./components/AboutCard";

const response = {
  clients: [
    "/artisty.png",
    "/directy.png",
    "/khedma-lik.png",
    "/telefy.png",
    "/wallety.png",
  ],
};

const About = () => {
  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            description="I create design products with unique ideas."
            count={5}
            title="UX/UI Design"
            icon="/icons/design.svg"
          />
          <AboutCard
            description="I develop Front-End with coding super smooth."
            count={2}
            title="Frontend Developer"
            icon="/icons/code.svg"
          />
          <AboutCard
            description="I develop cross-platform mobile applications."
            count={12}
            title="App Developer"
            icon="/icons/phone.svg"
          />
        </div>
        <div className="flex-full about-text">
          <h5 className="gray">Introduce</h5>
          <h1 className="white">Hello, I&#39;m Skander Blaiti</h1>
          <h3 className="white">
            Design is not just what it looks like. Design is how it works!
          </h3>
          <p className="gray">
            I have proceeded my dream to be a developer as it has been my
            lifelong ambition. I am a talented Front-End developer with a UI/UX
            design background. During my 4 years of work as a freelancer, I had
            the opportunity to enhance my expertise by collaborating with
            different companies and by creating useful content for both business
            and customer use.
            <br />
            <br />I am naturally persevered, self-confident, quietly curios,
            innovative and constantly challenging my skills.
          </p>
        </div>
      </div>
      <div className="flex partners justify-space">
        {response.clients.map((client) => (
          <img height={45} width={180} src={"/clients" + client} alt={client} />
        ))}
      </div>
    </section>
  );
};

export default About;
