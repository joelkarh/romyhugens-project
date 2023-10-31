import Button from './button'
import { reviews } from '../data'
import styles from "./reviews.module.scss"
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Script from 'next/script';


let tl
function Reviews() {
     const { title, btnText, reviewsData } = reviews
     return (
          <>
               <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" />
               <section className='review'>
                    <div className="container">
                         <div className={`row ${styles.reviewHeader}`}>
                              <div className="col-7">
                                   <h4>{title}</h4>
                              </div>
                              <div className="col-4">
                                   <Button title={btnText} />
                              </div>
                         </div>
                    </div>
                    <div className="container-fluid px-0">
                         <div className="row">
                              <div className="col">
                                   <div className={`${styles.reviewWrapper}`}>
                                        {
                                             reviewsData?.map(({ name, job, imgSrc, description }, i) => (
                                                  <div key={i} className={`${styles.reviewBox}`}>
                                                       <div className={`${styles.reviewHeading}`}>
                                                            <div className={`${styles.reviewHead}`}>
                                                                 <Image src={imgSrc} fill alt='' className={styles.reviewImg} />
                                                            </div>
                                                            <div className={styles.reviewHeadContent}>
                                                                 <p>{name}</p>
                                                                 <span>{job}</span>
                                                            </div>
                                                       </div>
                                                       <p className={`${styles.reviewContent}`}>{description} </p>
                                                  </div>
                                             ))
                                        }
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}


export default Reviews