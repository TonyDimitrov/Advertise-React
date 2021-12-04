import {Link} from "react-router-dom"

function Footer() {
    return (
        <footer className="footer">
            <article className="footer-wrap">
                <p><Link to="/about">За нас</Link></p>
                <p><Link to="/properties">Обяви</Link></p>
            </article>
        </footer>
    )
}

export default Footer;