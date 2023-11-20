import Image from "next/image"
import { homeSection3 } from "../data"
import Button from "./button"
import styles from "./homesection3.module.scss"
function HomeSection3() {
     const { src, quote, author, alt } = homeSection3
     return (
          <>
               <section className="homeSection3">
                    <div className="container">
                         <div className={`row ${styles.imagewrapper}`}>
                              <div className="col">
                                   <div className={`${styles.quote__imagewrapper}`}>
                                        <Image src={src} alt={alt} fill className={styles.quoteImage} priority />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="container">
                         <div className="row">
                              <div className={`col ${styles.quoteWrapper}`}>
                                   <div className={`${styles.quoteIcon}`}>
                                        <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M5.11929e-06 21.0772C5.5986e-06 15.5945 1.68551 10.9289 5.05651 7.08018C8.42751 3.23146 13.2303 0.871403 19.4648 -2.75689e-06L19.4648 5.01059C16.8913 5.51891 14.5896 6.29954 12.5597 7.35249C10.5299 8.44175 8.93497 9.80332 7.77506 11.4372C6.5789 13.0711 5.98082 14.941 5.98082 17.0469C5.98082 18.826 6.61514 19.7156 7.8838 19.7156C8.24627 19.7156 8.9531 19.6248 10.0043 19.4433C11.0192 19.2617 11.7985 19.171 12.3422 19.171C14.2996 19.171 16.1119 19.9516 17.7793 21.5129C19.4105 23.1104 20.226 25.0893 20.226 27.4493C20.226 30.0272 19.3561 32.0968 17.6162 33.6581C15.8401 35.2194 13.774 36 11.4179 36C9.71429 36 7.99254 35.4372 6.25267 34.3116C4.47655 33.2224 2.99041 31.534 1.79425 29.2466C0.598084 26.9591 4.84314e-06 24.236 5.11929e-06 21.0772ZM30.7196 21.0772C30.7196 17.4463 31.4808 14.1422 33.0032 11.1649C34.4893 8.18759 36.7186 5.71861 39.6908 3.75794C42.6269 1.79727 46.1247 0.544628 50.1844 -7.1299e-08L50.1844 5.01059C47.6109 5.51891 45.3092 6.29954 43.2793 7.35249C41.2495 8.44175 39.6546 9.80333 38.4947 11.4372C37.2985 13.0711 36.7004 14.941 36.7004 17.0469C36.7004 18.826 37.3348 19.7156 38.6034 19.7156C38.9659 19.7156 39.6546 19.6248 40.6695 19.4433C41.6482 19.2617 42.4456 19.171 43.0618 19.171C45.0192 19.171 46.8316 19.9516 48.4989 21.5129C50.1663 23.1104 51 25.0893 51 27.4493C51 30.0272 50.1301 32.0968 48.3902 33.6581C46.6141 35.2194 44.548 36 42.1919 36C40.4883 36 38.7484 35.4372 36.9723 34.3116C35.1962 33.2224 33.71 31.534 32.5139 29.2466C31.3177 26.9592 30.7196 24.236 30.7196 21.0772Z" fill="#333333" />
                                        </svg>
                                   </div>
                                   <q>Life shoulld not only be lived,it should be celebrated</q>
                                   <address>
                                        Mark Twain : The Story of the Fox
                                   </address>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default HomeSection3