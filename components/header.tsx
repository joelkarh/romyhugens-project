import { menuItems } from "../data"
function Header() {
     return (
          <>
               <header className="container-fluid">
                    <div className="row">
                         <div className="container">
                              <div className="row">
                                   <div className="col-6">romy hugens</div>
                                   <div className="col-6">
                                        <div className="nav">
                                             <ul>{menuItems.map(({ title, route }, id) => (
                                                  <li key={id}>
                                                       <a href={route}>{title}</a>
                                                  </li>
                                             ))}
                                             </ul>
                                        </div>
                                   </div>
                              </div>

                         </div>

                    </div>
               </header>
          </>
     )
}
export default Header