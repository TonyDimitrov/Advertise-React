function SingleProperty({
    id,
    type,
    price,
    city,
    neighbourhood
}) {
    return (
        <article className="main-property">
            <article className="main-property-wrap-img">
                <a href="./details.html">
                    <img className="main-property-img" src="./main-image.jpg" alt="House" />
                </a>
            </article>
            <article className="main-property-text">
                <p>{type}</p>
                <p>{city}</p>
                <p>{neighbourhood}</p>
                <p>{price}</p>
            </article>
        </article>
    )
}

export default SingleProperty;

// id={el.id}
// type={el.property.type}
// price={el.property.price}
// city={el.property.city}
// neighbouhood={el.property.neighbouhood}