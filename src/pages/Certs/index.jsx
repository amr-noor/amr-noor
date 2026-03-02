import { Helmet } from "react-helmet";

import Boxs from "../../components/Boxs";

const Certs = props => <>
    <Helmet>
        <title>Amr | Certifications</title>
    </Helmet>

    <main className="page">
        <section>
            <div className="content">
                <h1>Certs</h1>
                <p>As you do more, you get awards more.</p>
            </div>
            <Boxs data={props.data} />
        </section>
    </main>
</>;

export default Certs;