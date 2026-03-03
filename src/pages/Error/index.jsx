import { Link } from "react-router";
import { Helmet } from "react-helmet";

import Alert from "../../components/Alert";

import "./index.css";

const Error = () => <>
    <Helmet>
        <title>Amr | Error</title>
    </Helmet>

    <main className="page error">
        <section>
            <div className="content">
                <h1>Error</h1>
                <p>The page you are looking for is not found!</p>
            </div>
            <Link to="/" className="btn">Home Page</Link>
        </section>
    </main>

    <Alert data={{ msg: "Page is not found!", state: false }} />
</>;

export default Error;