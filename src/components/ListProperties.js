import { useState, useEffect } from "react";
import SingleProperty from './SingleProperty';

const rootUrl = "https://localhost:5001/advertises";

function ListProperties() {

    let [propertiesTest, setPropertiesTest] = useState([
        {
            id: 1, property: {
                type: 'Продава',
                price: '105000',
                city: 'София',
                location: 'Витоша'
            }
        },
        {
            id: 2, property: {
                type: 'Продава',
                price: '45000',
                city: 'Кюстендил',
                location: 'Широк център'
            }
        },
        {
            id: 3, property: {
                type: 'Под наем',
                price: '650',
                city: 'Софиа',
                location: 'Витоша'
            }
        }]);

    const [properties, setProperties] = useState([]);

    useEffect(() => {

        fetch(rootUrl)
            .then(res => res.json())
            .then(resultProperties => {
            console.log(`up --${resultProperties.advertises}`);
            setProperties(resultProperties.advertises);
            })
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
    console.log(`Delete: ${id}`)
    // var newTodos = properties.filter(e => e.id != id);

    //setTodos(newTodos);
}

export default ListProperties;
