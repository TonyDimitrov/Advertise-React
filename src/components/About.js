
function  Abaut() {

    return (
        <div>
        <article className="main-image">
            <h2>На-добрите оферти в нашия сайт</h2>
            <p>Споделете вашата оферта безпларно!</p>

        </article>
        <article className="main-search">
            <p>Какво търсите</p>
            <form action="">
                <select id="type-property">
                    <option defaultValue value="11">Купува</option>
                    <option value="10">Наема</option>
                </select>
                <select id="type-property">
                    <option defaultValue value="1">София</option>
                    <option value="2">Пловдив</option>
                </select>
                <button>Покажи</button>
            </form>
        </article> 
        </div>
    )
}

export default Abaut;