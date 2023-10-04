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
                    <li className="navbar__list_item-right navbar__link navbar__group-right__dropdown">
                         <div className="navbar__group-right__dropdown-button">
                              About
                         </div>
                         <div className="navbar__group-right__dropdown-content">
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/about"}>
                                   Rose + Sooy
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/about/jodie-rosenblum"}>
                                   Jodie Rosenblum, LCSW
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/about/kaelie-sooy"}>
                                   Kaelie Sooy, LCSW
                              </Link>
                         </div>
                    </li>
                    <li className="navbar__list_item-separator">
                         |
                    </li>
                    <li className="navbar__list_item-right navbar__link navbar__group-right__dropdown">
                         <div className="navbar__group-right__dropdown-button">
                              <Link className="navbar__link navbar__group-right" to={"/services"}>
                                   Services
                              </Link>
                         </div>
                         <div className="navbar__group-right__dropdown-content">
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/services/individuals"}>
                                   Individual Therapy
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/services/couples"}>
                                   Couples Counseling
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/services/adolescents"}>
                                   Adolescent Therapy
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/specialty-areas"}>
                                   Specialty Areas
                              </Link>
                              <Link className="navbar__link navbar__group-right__dropdown-button" to={"/location-options"}>
                                   Location Options
                              </Link>
                         </div>
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