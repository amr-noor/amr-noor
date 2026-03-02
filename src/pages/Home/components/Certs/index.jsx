import { Link } from "react-router";

const Certs = props => <section className="certs">
    <div className="content">
        <h1>Certs</h1>
        <p>As you do more, you get awards more.</p>
    </div>
    <div className="boxs">
        {
            props.data?.map((cert, i) => <div key={i} className="box">
                <div className="image">
                    <img src={cert.imgs[0]} alt="image" />
                </div>
                <div className="details">
                    <a href={cert.links[0]} target="_blank" rel="noopener">
                        <h2>{cert.name}</h2>
                    </a>
                    <Link className="btn" to={"/certs/" + cert.id}>Details</Link>
                </div>
            </div>)
        }
        <div>
            <Link className="btn" to="/certs">More...</Link>
        </div>
    </div>
</section>;

export default Certs;