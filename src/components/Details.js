import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProperties } from "../services/propertiesService" 

function Details({match}) {

    const [property, setProperty] = useState([]);
    console.log("match ");
    console.log(match.url);

    useEffect(() => {
        getProperties( match.url)
        .then(resultProperty => {
            console.log(resultProperty);
            setProperty(resultProperty);
            });
    }, []);
    return (
        <article className="main-property">
            <h2>Имот детайли</h2>
            {/* <article className="main-property-wrap-img">
                <Link to={rootUrl + 'details/' + id}>
                    <img className="main-property-img" src={rootUrl + 'GetImage/' + image} alt="House" />
                </Link>
            </article>
            <article className="main-property-text">
                <p>{category}</p>
                <p>{title}</p>
                <p>{city}</p>
                <p>{location}</p>
                <p>{price}</p>
            </article> */}
        </article>
    )
}

export default Details;