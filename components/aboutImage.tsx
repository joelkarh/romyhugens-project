import { aboutHeaderData } from "../data"
import styles from "./about.module.scss"
import Image from "next/image"

function AboutImage() {
     const { rightsrc, leftsrc } = aboutHeaderData

     return (
          <>
               <section className={`${styles.image} container`}>
                    <div className={`row ${styles.imageContainer}`}>
                         <div className="col-5 ">
                              <div className={`${styles.imageLeft}`}>
                                   <Image src={leftsrc} width={700}
                                        height={475}
                                        sizes="100vw"
                                        style={{
                                             width: '100%',
                                             height: 'auto',
                                        }} alt="" priority />
                              </div>
                         </div>
                         <div className="col-7">
                              <div className={`${styles.imageRight}`}>
                                   <Image src={rightsrc} width={700}
                                        height={475}
                                        sizes="100vw"
                                        style={{
                                             width: '100%',
                                             height: 'auto',
                                        }} alt="" priority />
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default AboutImage