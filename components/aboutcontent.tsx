import { aboutHeaderData } from "../data"
import styles from "./about.module.scss"

function AboutContent() {
     let { storytitle, storyContent } = aboutHeaderData

     return (
          <section className={`container ${styles.aboutContent}`}>
               <div className="row">
                    <h2>{storytitle}</h2>
                    <div className="col">
                         <p>{storyContent}</p>
                    </div>
               </div>
          </section>
     )
}

export default AboutContent