import style from "./Header.module.css";
import main from "../../styles/main.module.css";

function Header() {
    return (
        <header id="Home" className={style.header}>
            <div className={main.container}>
                <nav className={style.header__title}>
                    <ul className={style.header__list}>
                        <li><a className={style.header__link_active} href="#Home">Home</a></li>
                        <li><a className={style.header__link} href="#About me">About me</a></li>
                        <li><a className={style.header__link} href="#Skills">Skills</a></li>
                        <li><a className={style.header__link} href="#Portfolio">Portfolio</a></li>
                        <li><a className={style.header__link} href="#Contacts">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
