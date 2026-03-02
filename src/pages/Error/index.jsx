import { Helmet } from "react-helmet";

import Alert from "../../components/Alert";

const Error = () => <>
    <Helmet>
        <title>Amr | Error</title>
    </Helmet>

    <main className="page">
        <section>
            <div className="content">
                <h1>Error</h1>
                <p>The page you are looking for is not found!</p>
            </div>
        </section>
    </main>

    <Alert data={{ msg: "Page is not found!", state: false }} />
</>;

export default Error;