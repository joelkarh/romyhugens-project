import { aboutHeaderData } from "../data"
import styles from "./about.module.scss"
import Image from "next/image"

function AboutImage() {
     const { rightsrc, leftsrc } = aboutHeaderData

     return (
          <>
               <section className="container">
                    <div className="row">
                         <div className="col-5">
                              <div className={`${styles.imageLeft}`}>
                                   <Image src={leftsrc} fill className={""} alt="" priority />
                              </div>
                         </div>
                         <div className="col-7">
                              <div className={`${styles.imageRight}`}>
                                   <Image src={rightsrc} alt="" fill className={""} priority />
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default AboutImage