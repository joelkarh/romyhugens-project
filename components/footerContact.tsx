import Link from "next/link"
import { footerData } from "../data"
import styles from "./footer.module.scss"
function FooterContact() {
     const { title, shout, links } = footerData
     return (<>

          <section className={`container-fluid `}>
               <div className="container">
                    <div className="row">
                         <div className="col-6">
                              <div className={styles.footerTitle}>
                                   {title}
                              </div>
                              <div className={styles.footerShout}>
                                   {shout}
                              </div>
                              <div className={styles.footerLinks}>
                                   <ul>
                                        {
                                             links.map(({ linkTitle }, i) => (
                                                  <li key={i}>
                                                       <Link href="">{linkTitle}</Link>
                                                  </li>
                                             ))
                                        }
                                   </ul>
                              </div>
                         </div>
                         <div className="col-6">
                              <div className={styles.footerSocials}>
                                   <Link href="">
                                        <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" stroke="#000" /><path d="M16.205 14.75a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 .001Zm.045 2.61h-3v9.39h3v-9.39Zm4.74 0h-2.985v9.39h2.955v-4.927c0-2.745 3.578-3 3.578 0v4.927H27.5v-5.947c0-4.628-5.295-4.455-6.54-2.183l.03-1.26Z" fill="#000" /></svg></Link>
                                   <Link href="">
                                        <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 12h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4Zm-4 11.334a3.333 3.333 0 1 1 0-6.667 3.333 3.333 0 0 1 0 6.666Zm3.333-7.667a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" fill="#000" /><circle cx="20" cy="20" r="19.5" stroke="#000" /></svg></Link>
                                   <Link href="">
                                        <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.067 29v-8.21h2.756l.413-3.2h-3.169v-2.043c0-.927.258-1.558 1.586-1.558h1.695v-2.863a22.651 22.651 0 0 0-2.47-.126c-2.442 0-4.115 1.491-4.115 4.23v2.36H15v3.2h2.763V29h3.304Z" fill="#000" /><circle cx="20" cy="20" r="19.5" stroke="#000" /></svg></Link>
                              </div>
                         </div>
                    </div>
               </div>
               <section className={`container-fluid ${styles.footer}`}>
                    <div className="container">
                         <div className={`row ${styles.footerRow}`}>
                              <div className={`col-6 ${styles.footerTerms}`}>
                                   <Link href="">Login </Link> -
                                   <Link href=""> Privacy </Link> -
                                   <Link href=""> Terms</Link>
                              </div>
                              <div className="col-6 ">
                                   <p>This website is developed with <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464Z" /></svg></span> by Websupplier</p>
                              </div>
                         </div>
                    </div>

               </section>
          </section>



     </>
     )
}

export default FooterContact