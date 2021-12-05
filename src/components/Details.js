import { useState, useEffect } from "react";
import { getProperties } from "../services/propertiesService" 

function Details({match}) {

   const rootUrl = "https://localhost:5001/advertises/"

    const [property, setProperty] = useState([]);
    const [images, setImages] = useState([]);
    console.log("match ");
    console.log(match.url);

    useEffect(() => {
        getProperties( match.url)
        .then(resultProperty => {
            console.log(resultProperty);
            setProperty(resultProperty);
            setImages(resultProperty.images)
            });       
    }, []);

    return (
        <article className="main-property-text">
            <h2>Имот детайли</h2>
            <article>
            <p>{ property.country == 1 ? 'Продава': 'Отдава под наем'}</p>
            <p>Цена: {property.price} лв</p>
                <p>{property.title}</p>
                <p>{property.description}</p>
                <p>Адрес: {property.location} {property.town} {property.country}</p>
                <br/>
                <p>Лице за контакт: {property.contactPerson} Телефон: {property.contactPhone}</p>
                <p>Емейл: {property.contactEmail}</p>             
            </article>
            <article>
                <ul>
                    {images.map((id,i) =>
                     <li key={id}>
                        <img className="main-property-img" src={rootUrl + 'GetImage/' + id} alt="House" />
                     </li>)}
                </ul>
            </article>
        </article>
    )
}

export default Details;