import "./Skill.scss";
const Skill = ({
  skill,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
}) => {
  return (
    <>
      <section className="skillsContainer">
        <h2>SKILLS</h2>
        <div className="singelSkillWrapper">
          <p>HTML</p>
          <p>SCSS</p>
          <p className="item3">JavaScript</p>
          <p>React</p>
          <p>MERN</p>
          <p className="item6">Tailwind</p>
          <p> Git</p>
          <p>Express</p>
        </div>
      </section>
    </>
  );
};

export default Skill;
