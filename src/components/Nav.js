function Nav(){
    return (
        <nav>
        <article className="nav-wrap">
            <ul className="nav-logo-list">
                <li><a className="nav-logo" href="./index.html">Logo</a></li>
            </ul>
            <ul className="nav-main-list">
                <li><a className="nav-logo" href="./index.html">Начало</a></li>
                <li><a className="nav-logo" href="./properties.html">Обяви</a></li>
                <li><a className="nav-logo" href="/create.html">Добави обява</a></li>
                <li><a className="nav-logo" href="#">За нас</a></li>
            </ul>

            <ul className="nav-logging-list">
                <li className="not-registered"><a className="nav-logo" href="#">Вход</a></li>
                <li className="not-registered"><a className="nav-logo" href="#">Регистрация</a></li>
                <li className="registered"><a className="nav-logo" href="#">Излез</a></li>
            </ul>
        </article>
    </nav>
    )
}

export default Nav;