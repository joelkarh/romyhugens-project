import { menuItems } from "../data"
import navStyle from "./header.module.scss";
function Header() {
     return (
          <>
               <header >
                    <section className="container ">
                         <div className="row">
                              <div className="col-6">romy hugens</div>
                              <div className="col-6">
                                   <div className="nav">
                                        <ul className={navStyle.navItems}>{menuItems.map(({ title, route }, id) => (
                                             <li key={id}>
                                                  <a href={route}>{title}</a>
                                             </li>
                                        ))}
                                        </ul>
                                        <div className={`${navStyle.headerBtn}`}></div>
                                        <a className={navStyle.arrow} href="/">Join me <span></span></a>
                                   </div>
                              </div>
                         </div>
                    </section>
               </header>
          </>
     )
}
export default Header