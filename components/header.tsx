import Link from "next/link";
import { menuItems } from "../data"
import navStyle from "./header.module.scss";
function Header() {
     return (
          <>
               <header >
                    <section className="container ">
                         <div className="row">
                              <div className=" col-xl-6 col-sm-5">
                                   <button type="button" className={navStyle.brandName}>
                                        Romy hugens
                                   </button>
                              </div>
                              <div className="col-xl-6 col-sm-7 d-flex align-center">
                                   <nav className="nav">
                                        <ul className={navStyle.navItems}>{menuItems.map(({ title, route }, id) => (
                                             <li key={id}>
                                                  <Link href={route}>{title}</Link>
                                             </li>
                                        ))}
                                        </ul>
                                   </nav>
                                   <div className={`${navStyle.headerBtn}`}></div>
                                   <Link className={navStyle.arrow} href="/">Join me <span></span></Link>
                              </div>
                         </div>
                    </section>
               </header>
          </>
     )
}
export default Header