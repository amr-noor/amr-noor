import { Link } from "react-router";

import "./index.css";

const Boxs = props => <div className="boxs">{
    props.data?.map((item, i) => <div key={i} className="box">
        <div className="image">
            <img src={item.imgs[0]} alt="image" loading="lazy" />
        </div>
        <div className="details">
            <a href={item.links[0]} target="_blank" rel="noopener">
                <h2>{item.name}</h2>
            </a>
            <Link className="btn" to={location.pathname + "/" + item.id}>Details</Link>
        </div>
    </div>)
}</div>;

export default Boxs;