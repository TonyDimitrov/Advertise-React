import { Link } from "react-router-dom";
function Nav(){
    return (
        <nav>
        <article className="nav-wrap">
            <ul className="nav-logo-list">
                <li><Link className="nav-logo" to="/">Logo</Link></li>
            </ul>
            <ul className="nav-main-list">
                <li><Link className="nav-logo" to="/">Начало</Link></li>
                <li><Link className="nav-logo" to="/properties">Обяви</Link></li>
                <li><Link className="nav-logo" to="/add-advertise">Добави обява</Link></li>
                <li><Link className="nav-logo" to="/about">За нас</Link></li>
            </ul>

            <ul className="nav-logging-list">
                <li className="not-registered"><Link className="nav-logo" to="#">Вход</Link></li>
                <li className="not-registered"><Link className="nav-logo" to="#">Регистрация</Link></li>
                <li className="registered"><Link className="nav-logo" to="#">Излез</Link></li>
            </ul>
        </article>
    </nav>
    )
}

export default Nav;