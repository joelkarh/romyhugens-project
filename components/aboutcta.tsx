"use client";
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { aboutHeaderData } from "../data"
import styles from "./about.module.scss"
import Button from "./button"

function AboutCta() {
     let { aboutContent } = aboutHeaderData
     let { title, description, img, btnText, btnColor } = aboutContent
     const sunRef = useRef<HTMLDivElement>(null);
     useEffect(() => {
          gsap.registerPlugin(ScrollTrigger)
          let ctx = gsap.context(() => {
               gsap.from(sunRef.current, {
                    rotation: 360,
                    duration: 100,
                    scrollTrigger: {
                         trigger: sunRef.current,
                         start: "20px 80%",
                         end: "bottom 100px",

                         scrub: 15,
                         toggleActions: "restart pause reverse pause",
                    },


               })
          }, sunRef)
          return () => ctx.revert()
     }, [])

     return (
          <section className={`container ${styles.aboutCta}`}>
               <div className="row">
                    <div className={`col-4 offset-1 `}>
                         <div className={styles.aboutSvg} ref={sunRef}>
                              {img}
                         </div>
                    </div>
                    <div className={`col-5 d-flex justify-content-center`}>
                         <div className={styles.aboutCtaContent}>
                              <h2>{title}</h2>
                              <p>{description}</p>
                              <Button colorBtn={btnColor} title={btnText} />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default AboutCta