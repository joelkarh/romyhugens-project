import styles from "./homesection4.module.scss"
import { homeSection4 } from "../data"
import Button from "./button"
import Table from "./table"

function HomeSection4() {
     const { title, description, btnTitle, headTitles, content } = homeSection4
     return (
          <>
               <section className="container">
                    <div className={`row ${styles.sectionWrapper}`}>
                         <div className="col-5">
                              <div className=''>
                                   <h5>{title}</h5>
                                   <p>
                                        {description}
                                   </p>
                              </div>
                              <Button title={btnTitle} />
                         </div>
                         <div className="col-7">
                              <div >
                                   <table>
                                        <thead>
                                             <tr>
                                                  {
                                                       headTitles.map(({ title }, i) => (
                                                            <td key={i}> {title}</td>
                                                       ))
                                                  }
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr>
                                                  {
                                                       content.map(({ title }, i) => (
                                                            <Table key={i} tableDatacontent={title} />
                                                       ))
                                                  }
                                             </tr>
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                    </div>
               </section >
          </>
     )
}

export default HomeSection4