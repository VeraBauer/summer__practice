import style from "./Portfolio.module.css";
import main from "../../styles/main.module.css";

import img1 from "../../img/portfolio/img1.jpg";
import img2 from "../../img/portfolio/img2.jpg";
import img3 from "../../img/portfolio/img3.jpg";


function Portfolio () {
    return (
        <section id="Portfolio" className={style.portfolio}>
            <div className={main.container}>
                <div className={style.portfolio__title}>
                    <h2 className={main.h2}>Portfolio</h2>
                </div>
                <div className={style.portfolio__example}>
                    <img src={img1} alt="Online fashion store - Homepage" className={style.portfolio__img}/>
                    <p><a href="#!">Online fashion store - Homepage</a></p>
                </div>
                <div className={style.portfolio__example}>
                    <img src={img2} alt="Reebok Store - Concept" className={style.portfolio__img}/>
                    <p><a href="#!">Reebok Store - Concept</a></p>
                </div>
                <div className={style.portfolio__example}>
                    <img src={img3} alt="Braun Landing Page - Concept" className={style.portfolio__img}/>
                    <p><a href="#!">Braun Landing Page - Concept</a></p>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;