import { menuItems } from "../data"
import navStyle from "./header.module.scss";
function Header() {
     return (
          <>
               <header >
                    <section className="container ">
                         <div className="row">
                              <div className="col-6">
                                   <button type="button" className="image btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><path d="M66.214 77.815c.849 0 1.95-.085 2.586-.298v-.509c-.212.044-.424.044-.679.044-1.442 0-2.289-1.4-4.325-6.488-2.035-5.215-2.841-7.801-8.056-8.48 5.513-.636 8.395-3.646 8.395-7.633 0-3.774-2.544-6.614-11.15-6.614h-8.353v.553c1.314.381 1.695 1.356 1.695 4.832v18.911c0 3.476-.381 4.451-1.695 4.832v.551H51.5v-.551c-1.315-.381-1.697-1.356-1.697-4.832v-9.922h2.715c5.087 0 5.426 2.969 7.885 8.819 1.866 4.409 2.544 6.784 5.81 6.784Zm-16.41-16.239V48.559a32.67 32.67 0 0 1 1.994-.084c6.275 0 8.735 3.179 8.735 6.953 0 3.605-2.291 6.149-7.165 6.149Zm0 0" /><path d="M65.316 92.971h6.581v-.533c-1.355-.339-1.936-1.161-1.936-5.614V75.355h20.132v11.469c0 4.454-.581 5.275-1.936 5.614v.533h6.581v-.533c-1.355-.339-1.936-1.161-1.936-5.614V65.242c0-4.454.581-5.275 1.936-5.614v-.533h-6.581v.533c1.355.339 1.936 1.161 1.936 5.614v9.436H69.961v-9.436c0-4.454.581-5.275 1.936-5.614v-.533h-6.581v.533c1.355.339 1.935 1.161 1.935 5.614v21.582c0 4.454-.58 5.275-1.935 5.614Zm0 0" /></svg>
                                   </button>
                              </div>
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