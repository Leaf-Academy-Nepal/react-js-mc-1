const AboutCard = (props) => {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="green">{props.title}</h3>
        <img src={props.icon} width={28} height={28} alt={props.title} />
      </div>
      <p className="white">{props.description}</p>
      <span className="gray">{props.count} projects</span>
    </div>
  );
};

export default AboutCard;
