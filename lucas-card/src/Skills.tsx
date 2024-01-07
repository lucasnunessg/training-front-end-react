function Skills() {
  const skillsList = ['JS', 'Typescript', 'React', 'Metodologias Ágeis', 'JEST', 'CSS'];

  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <ul className="skills-list">
        {skillsList.map((skill) => (
          <li key={skill} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;