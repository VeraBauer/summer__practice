import style from "./Contacts.module.css";
import main from "../../styles/main.module.css";

import LI from "../../img/socials/LI.svg";
import IN from "../../img/socials/IN.svg";
import BE from "../../img/socials/BE.svg";
import DR from "../../img/socials/DR.svg";

function Contacts() {
    return (
        <section id="Contacts" className={style.contacts}>
            <div className={main.container}>
                <div className={style.contacts__title}>
                    <h2 className={main.h2}>Contacts</h2>
                </div>
                <p className={main.p}>Want to know more or just chat?<br />You are welcome!</p>
                <div className={style.contacts__button}>
                    <a href="#!" className={style.button}>Send message</a>
                </div>
                <div className={style.contacts__social}>
                    <a href="#!"><img src={LI} alt="LinkedIn" /></a>
                    <a href="#!"><img src={IN} alt="Instagram" /></a>
                    <a href="#!"><img src={BE} alt="Behance" /></a>
                    <a href="#!"><img src={DR} alt="Dribble" /></a>
                </div>
                <div className={style.contacts__social__text}>
                    <p>Like me on<br />LinkedIn, Instagram, Behance, Dribble</p>
                </div>
            </div>
        </section>
    );
}

export default Contacts;