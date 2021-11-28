import { useState } from "react";
import SingleProperty from './SingleProperty';

function ListProperties() {

    let [properties, setTodos] = useState([
        {
            id: 1, property: {
                type: 'Продава',
                price: '105000',
                city: 'София',
                neighbourhood: 'Витоша'
            }
        },
        {
            id: 2, property: {
                type: 'Продава',
                price: '45000',
                city: 'Кюстендил',
                neighbourhood: 'Широк център'
            }
        },
        {
            id: 3, property: {
                type: 'Под наем',
                price: '650',
                city: 'Софиа',
                neighbourhood: 'Витоша'
            }
        }]);

    function deleteSingleProperty(id) {
        console.log(`Delete: ${id}`)
        var newTodos = properties.filter(e => e.id != id);

        setTodos(newTodos);
    }

    return (
        <article className="filling">
            {properties.map(el =>
                <SingleProperty key={el.id}
                    id={el.id}
                    type={el.property.type}
                    price={el.property.price}
                    city={el.property.city}
                    neighbourhood={el.property.neighbourhood}
                    deleteTodo={deleteSingleProperty} />)}
        </article>
    )
}

export default ListProperties;

{/* <p>Под наем</p>
<p>Цена 550лв</p>
<p>София</p>
<p>Малинова долина</p> */}