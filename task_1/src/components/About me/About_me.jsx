import style from "./About_me.module.css";
import main from "../../styles/main.module.css";

function Aboutme() {
    return (
        <section id="About me" className={style.info}>
            <div className={main.container}>
                <div className={style.info__title}>
                    <h2 className={main.h2}>About me</h2>
                </div>
                <p className={main.p}>
                    Hi, I'm Denis – UX/UI designer from Minsk. <br />
                    I'm interested in design and everything connected with it. <br /><br /><br />
                    I'm studying at courses "Web and mobile design <br />
                    interfaces" in IT-Academy. <br /><br /><br />
                    Ready to implement excellent projects <br />
                    with wonderful people.
                </p>
            </div>
        </section>
    );
}
 
export default Aboutme;