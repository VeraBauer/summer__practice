import style from "./Content.module.css";
import main from "../../styles/main.module.css";
import Img from "../../img/header/img1.jpg"

function Content() {
    return (
        <section className={style.header__content}>
            <div className={main.container}>
                <div className={style.content}>
                    <div className={style.text}>
                        <p className={style.h1}>
                            Denis Novik
                        </p>
                        <p className={style.h4}>
                            UX | UI designer <br />
                            24 years old, Minsk
                        </p>  
                    </div>
                    <div className={style.language}>
                            <ul className={style.lang__list}>
                                <li><a href="#!" class={style.lang__link}>RU</a></li>
                                <li><a href="#!" class={style.lang__link_active}>ENG</a></li>
                            </ul>
                    </div>
                </div>
                <div className="header__img">
                        <img src={Img} alt="Frontman"/>
                    </div>
            </div>
        </section>
    );
}
 
export default Content;