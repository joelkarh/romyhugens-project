import { aboutHeaderData } from "../data"
import styles from "./about.module.scss"

function AboutHero() {
     const { title, description } = aboutHeaderData
     return (
          <section className={`container ${styles.about}`}>
               <div className="row">
                    <div className="col-8 offset-1">
                         <h1>{title}</h1>
                    </div>
               </div>
               <div className={`row ${styles.aboutRow}`}>
                    <div className="col-7">
                         <p>
                              {description}
                         </p>
                    </div>
               </div>
          </section>
     )
}

export default AboutHero