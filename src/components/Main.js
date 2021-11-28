 import ListProperties from "./ListProperties";


function Main() {

    return (
        <main>
        <article className="main-image">
            <img className="main-image-img" src="./main-house.jpg" alt="House"/>

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
        {<ListProperties/>}  
    </main>
    )
}

export default Main;