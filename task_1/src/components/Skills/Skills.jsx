import style from "./Skills.module.css";
import main from "../../styles/main.module.css";


import PS from "../../img/skills/PS.svg";
import AI from "../../img/skills/AI.svg";
import AE from "../../img/skills/AE.svg";
import Figma from "../../img/figma.png";
import Stars3 from "../../img/stars/3stars.svg";
import Stars4 from "../../img/stars/4stars.svg";

function Skills() {
    return (
        <section id="Skills" className={style.skills}>
            <div className={main.container}>
                <div className={style.skills__title}>
                    <h2 className={main.h2}>Skills</h2>
                </div>
                <p className={main.p}>I work in such programs as</p>
                <div className={style.skills__list}>
                    <div className={style.skills__skill}>
                        <img className={style.skills__skill__img} src={PS} alt="Adobe Photoshop"/>
                        <h5 className={style.skills__skill__title}>Adobe<br />Photoshop</h5>
                        <img className={style.skills__skill__stars} src={Stars4} alt="4/5 stars"></img>
                    </div>
                    <div className={style.skills__skill}>
                        <img className={style.skills__skill__img} src={AI} alt="Adobe Illustrator"/>
                        <h5 className={style.skills__skill__title}>Adobe<br />Illustrator</h5>
                        <img className={style.skills__skill__stars} src={Stars3} alt="3/5 stars"></img>
                    </div>
                    <div className={style.skills__skill}>
                        <img className={style.skills__skill__img} src={AE} alt="Adobe After Effects"/>
                        <h5 className={style.skills__skill__title}>Adobe<br />After Effects</h5>
                        <img className={style.skills__skill__stars} src={Stars4} alt="4/5 stars"></img>
                    </div>
                    <div className={style.skills__skill}>
                        <img className={style.skills__skill__img} src={Figma} alt="Figma"/>
                        <h5 className={style.skills__skill__title}>Figma</h5>
                        <img className={style.skills__skill__star} src={Stars4} alt="4/5 stars"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;