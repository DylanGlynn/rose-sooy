import { Link } from "react-router-dom"
import RSLogo from "../../img/Logo.png"
import "../../Rose+Sooy.css"

export const NavBar = () => {

     return (
          <ul className="navbar">
               <div className="navbar__group_left">
                    <li className="navbar__logo">
                         <Link className="navbar__link" to={"/"}>
                              <img className="navbar__logo-small" src={RSLogo} />
                         </Link>
                    </li>
                    {/* <li className="navbar__list_item-left">ROSE + SOOY COUNSELING</li> */}
               </div>
               <div className="navbar__group_right">
                    <li className="navbar__list_item-right">
                         <Link className="navbar__link" to={"/"}>
                              Home
                         </Link>
                    </li>
                    <li className="navbar__list_item-separator">
                         |
                    </li>
                    <li className="navbar__list_item-right">
                         <Link className="navbar__link" to={"/about"}>
                              About
                         </Link>
                    </li>
                    <li className="navbar__list_item-separator">
                         |
                    </li>
                    <li className="navbar__list_item-right">
                         <Link className="navbar__link" to={"/services"}>
                              Services
                         </Link>
                    </li>
                    <li className="navbar__list_item-separator">
                         |
                    </li>
                    <li className="navbar__list_item-right">
                         <Link className="navbar__link" to={"/faq"}>
                              FAQ
                         </Link>
                    </li>
                    <li className="navbar__list_item-separator">
                         |
                    </li>
                    <li className="navbar__list_item-right">
                         <Link className="navbar__link" to={"/connect"}>
                              Connect
                         </Link>
                    </li>
               </div>
          </ul>
     )
}