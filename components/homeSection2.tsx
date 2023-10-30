import { herosection2 } from "../data"
import Button from "./button"
import styles from "./homesection.module.scss"
function HomeSection2() {
     const { title, subtitle, btnText, steps } = herosection2
     return (
          <>
               <section className="homeSection2">
                    <div className="container">
                         <div className="row">
                              <div className={`col-8 ${styles.home_section2}`}>
                                   <h2>{title}</h2>
                                   <p>{subtitle}</p>
                              </div>
                         </div>
                         <div className="row">
                              {steps?.map(({ title, description, id }, i) => (
                                   <div className={`col-4 ${styles.steps}`} key={i}>
                                        <div className={styles.number}>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                                  <circle cx="36" cy="36" r="35.5" stroke="#A2A1A0" />
                                             </svg>
                                             <span>{id}</span>
                                        </div>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                   </div>
                              ))
                              }
                         </div>
                         <div className="row">
                              <div className="col">
                                   <Button title={btnText} />
                              </div>
                         </div>
                    </div>
                    <div className={styles.progressline}></div>
               </section>
          </>
     )
}

export default HomeSection2