import { useState, useEffect } from "react";
import SingleProperty from './SingleProperty';
import { getProperties } from "../services/propertiesService" 

const rootUrl = "https://localhost:5001/advertises";

function ListProperties() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getProperties()
        .then(resultProperties => {
            setProperties(resultProperties.advertises);
            });
    }, []);

    return (
        <article className="filling">
            {properties.map(el =>
                <SingleProperty key={el.id}
                    id={el.id}
                    category={el.category}
                    price={el.price}
                    city={el.town}
                    location={el.location}
                    title={el.title}
                    image={el.image} />)}
        </article>
    )
}

function deleteSingleProperty(id) {
    // console.log(`Delete: ${id}`)
    // var newTodos = properties.filter(e => e.id != id);

    //setTodos(newTodos);
}

export default ListProperties;
