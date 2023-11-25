"use client";
import Button from './button'
import { reviews } from '../data'
import styles from "./reviews.module.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Script from 'next/script';
import ReviewBox from './reviewBox';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
let wrapper
function Reviews() {
     const { title, btnText, reviewsData, btnColor } = reviews
     const sectionRef = useRef(null);
     const triggerRef = useRef(null);
     gsap.registerPlugin(ScrollTrigger);
     useEffect(() => {
          const pin = gsap.fromTo(
               sectionRef.current,
               {
                    translateX: 0,
               },
               {
                    translateX: "-100vw",
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                         trigger: triggerRef.current,
                         markers: false,
                         start: "-250% top ",
                         end: "bottom",
                         scrub: 3.5,
                    },
               }
          );
          return () => {
               {/* A return function for killing the animation on component unmount */ }
               pin.kill();
          };
     }, []);



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
                                   <Button colorBtn={btnColor} title={btnText} />
                              </div>
                         </div>
                    </div>
                    <div className="container-fluid px-0 overflow-hidden">
                         <div className="row">
                              <div ref={sectionRef} className="col">
                                   <div ref={triggerRef} className={`${styles.reviewWrapper}`}>
                                        {
                                             reviewsData?.map(({ name, job, imgSrc, description }, i) => (
                                                  <ReviewBox key={i} name={name} imgSrc={imgSrc} job={job} description={description} />
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