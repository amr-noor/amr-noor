import "./index.css";

const Skills = props => <section className="skills">
    <div className="content">
        <h1>Skills</h1>
        <p>Never stop learning.</p>
    </div>
    <div className="container">
        <div className="chart">{
            props.data?.map((skill, i) => <div key={i} data-progress={skill.progress}>{skill.name}</div>)
        }</div>
    </div>
</section>;

export default Skills;