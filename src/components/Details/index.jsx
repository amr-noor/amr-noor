import { useParams } from "react-router";

import "./index.css";

const Details = props => {
    const { id } = useParams();
    const item = props.data?.find(item => item.id == id);

    return <main className="page details">
        <section>
            <div className="content">
                <h1>{item?.name}</h1>
            </div>
            <div className="image">
                <img src={item?.imgs[item?.imgs.length - 1]} alt="image" loading="lazy" />
            </div>
            <div className="container">
                <ul className="links">{
                    item?.links.map((link, i) => <li key={i}>
                        <a href={link} target="_blank" rel="noopener">{link}</a>
                    </li>)
                }</ul>
                <ul className="techs">{
                    item?.techs.map((tech, i) => <li key={i}>{tech}</li>)
                }</ul>
                <p>{item?.disc}</p>
            </div>
        </section>
    </main>;
}

export default Details;