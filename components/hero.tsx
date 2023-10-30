import { heroItems } from "../data"
// import Image from "next/image"
import Button from "./button"
import heroStyle from './hero.module.scss'
function Hero() {
     const { title, subTitle, imgUrl, btnText } = heroItems
     return (
          <>
               <section className="hero">
                    <section className="container">
                         <div className="row">
                              <div className={`col-6 ${heroStyle.heroSection}`}>
                                   <h1 className="mb-4">{title}</h1>
                                   <p className={heroStyle.subtitle}>{subTitle}</p>
                                   <Button title={btnText} />
                              </div>
                              <div className="col-6">
                                   <div className={`${heroStyle.heroBackground} position-relative`}>
                                        <div className={`${heroStyle.heroArrow}`}>
                                             <span>I&apos;m Romy Hugens</span>
                                             <svg width="132" height="78" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#333"><path d="M2.972 0c1.25 1.82 2.597 3.93 3.847 5.75L4.232 7.578C2.982 5.757 1.347 3.745 0 1.636L2.972 0Zm8.174 11.02 4.615 5.173-2.204 2.019c-1.538-1.724-3.076-3.449-4.71-5.461l2.3-1.731Zm9.229 10.346c1.538 1.725 3.364 3.353 5.093 4.693l-2.107 2.306c-1.825-1.627-3.364-3.352-5.19-4.98l2.204-2.019Zm10.57 9.577c1.73 1.34 3.556 2.968 5.573 4.212l-1.723 2.498c-1.729-1.34-3.843-2.872-5.668-4.5l1.819-2.21Zm11.049 8.137c2.017 1.244 4.034 2.487 5.763 3.828l-1.626 2.785-6.051-3.732 1.914-2.881ZM54 46.255c2.017 1.244 4.225 2.104 6.146 3.06l-1.339 2.689c-2.208-.86-4.225-2.104-6.242-3.348l1.435-2.4Zm12.58 6.023 6.624 2.58-.954 2.88-6.625-2.58.954-2.88Zm12.865 4.967c2.496.764 4.608 1.336 6.72 1.908l-.955 2.88c-2.4-.476-4.608-1.336-6.72-1.908l.955-2.88Zm13.63 3.43c2.4.477 4.512 1.049 6.815 1.236l-.57 3.072c-2.4-.476-4.703-.664-6.815-1.236l.57-3.071Zm13.63 2.472 6.909.564.005 2.878c-2.303-.188-4.606-.376-7.197-.467l.283-2.975Zm14.009.744c2.303.187 4.51.088 7.004-.108l.102 3.166c-2.495.196-4.798.008-7.004.108l-.102-3.166Z" /><path d="m117.337 52.862-2.107 2.307 11.339 9.959-10.823 10.669L117.764 78l13.315-12.784-13.742-12.354Z" /></g></svg>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
               </section>
          </>
     )
}

export default Hero