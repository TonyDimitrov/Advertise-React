function SingleProperty({
    id,
    category,
    price,
    city,
    location,
    title,
    image
}) {

    let rootUrl = "https://localhost:5001/advertises/";

    return (
        <article className="main-property">
            <article className="main-property-wrap-img">
                <a href={rootUrl + 'details/' + id}>
                    <img className="main-property-img" src={rootUrl + 'GetImage/' + image} alt="House" />
                </a>
            </article>
            <article className="main-property-text">
                <p>{category}</p>
                <p>{title}</p>
                <p>{city}</p>
                <p>{location}</p>
                <p>{price}</p>
            </article>
        </article>
    )
}

export default SingleProperty;