import { Link } from "react-router-dom"
import RSLogo from "../../img/Logo.png"
import "../../Rose+Sooy.css"

export const NavBar = () => {

     return (
          <ul className="navbar">
               <div className="navbar__group_left">
                    <li className="navbar__logo">
                         <Link className="navbar__link" to={"/"} target="_top">
                              <img className="navbar__logo-small" src={RSLogo} alt="R+S Logo"/>
                         </Link>
                    </li>
               </div>
               <div className="navbar__group_right">
                    <li className="navbar__list_item-right">
                         <Link className="navbar__link" target="_top" to={"/"}>
                              Home
                         </Link>
                    </li>
                    <li className="navbar__list_item-separator">
                         |
                    </li>
                    <li className="navbar__list_item-right navbar__link navbar__group-right__dropdown">
                         <div className="navbar__group-right__dropdown-button">
                              About
                         </div>
                         <div className="navbar__group-right__dropdown-content">
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/about"} target="_top">
                                   Rose + Sooy
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/about/jodie-rosenblum"} target="_top">
                                   Jodie Rosenblum, LCSW
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/about/kaelie-sooy"} target="_top">
                                   Kaelie Sooy, LCSW
                              </Link>
                         </div>
                    </li>
                    <li className="navbar__list_item-separator">
                         |
                    </li>
                    <li className="navbar__list_item-right navbar__link navbar__group-right__dropdown">
                         <div className="navbar__group-right__dropdown-button">
                              <Link className="navbar__link navbar__group-right" to={"/services"} target="_top">
                                   Services
                              </Link>
                         </div>
                         <div className="navbar__group-right__dropdown-content">
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/services/individuals"} target="_top">
                                   Individual Therapy
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/services/couples"} target="_top">
                                   Couples Counseling
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/services/adolescents"} target="_top">
                                   Adolescent Therapy
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/specialty-areas"} target="_top">
                                   Specialty Areas
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/location-options"} target="_top">
                                   Location Options
                              </Link>
                         </div>
                    </li>
                    <li className="navbar__list_item-separator">
                         |
                    </li>
                    <li className="navbar__list_item-right">
                         <Link className="navbar__link" to={"/faq"} target="_top">
                              FAQ
                         </Link>
                    </li>
                    <li className="navbar__list_item-separator">
                         |
                    </li>
                    <li className="navbar__list_item-right">
                         <Link className="navbar__link" to={"/connect"} target="_top">
                              Connect
                         </Link>
                    </li>
               </div>
          </ul>
     )
}