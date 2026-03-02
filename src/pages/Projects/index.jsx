import { Helmet } from "react-helmet";

import Boxs from "../../components/Boxs";

const Projects = props => <>
    <Helmet>
        <title>Amr | Projects</title>
    </Helmet>

    <main className="page">
        <section>
            <div className="content">
                <h1>Best Projects</h1>
                <p>I have better.</p>
            </div>
            <Boxs data={props.data?.best} />
        </section>
        <hr />
        <section>
            <div className="content">
                <h1>Mini Projects</h1>
                <p>These are the best.</p>
            </div>
            <Boxs data={props.data?.minis} />
        </section>
    </main>
</>;

export default Projects;