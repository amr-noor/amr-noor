import { Helmet } from "react-helmet";

import Info from "./components/Info";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certs from "./components/Certs";
import Contact from "./components/Contact";

const Home = props => <>
    <Helmet>
        <title>Amr Mohamed Nour</title>
    </Helmet>

    <main className="page">
        <Info />
        <Skills data={props.data.skills} />
        <Projects data={props.data.projects?.best.slice(0, 3)} />
        <Certs data={props.data.certs?.slice(0, 3)} />
        <Contact />
    </main>
</>;

export default Home;