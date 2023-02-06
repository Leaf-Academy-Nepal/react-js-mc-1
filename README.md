1. JS in JSX
2. Props

# Todo

1. Iteration over components
2. Conditional Rendering
3. State
4. NPM Packages
5. react-router and api calls

---

Appendix:

const About = () => {
return (

<section id="about" className="dark-bg">
<div className="flex">
<div className="flex-full">{showMyName("Sunil")}</div>
<div className="flex-full">{showMyName("Anil")}</div>
<div className="flex-full">{showMyName("Pratik")}</div>
</div>
</section>
);
};

const showMyName = (myName) => {
// const myName = "Sameer";
return <p>Hi, I am {myName}</p>;
};
