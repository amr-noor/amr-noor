import { Link } from "react-router";

const Projects = props => <section className="projects">
    <div className="content">
        <h1>Projects</h1>
        <p>Discover my latest work and creative solutions that bring ideas to life.</p>
    </div>
    <div className="boxs">
        {
            props.data?.map((project, i) => <div key={i} className="box">
                <div className="image">
                    <img src={project.imgs[0]} alt="image" />
                </div>
                <div className="details">
                    <a href={project.links[0]} target="_blank" rel="noopener">
                        <h2>{project.name}</h2>
                    </a>
                    <Link className="btn" to={"/projects/" + project.id}>Details</Link>
                </div>
            </div>)
        }
        <div>
            <Link className="btn" to="/projects">More...</Link>
        </div>
    </div>
</section>;

export default Projects;