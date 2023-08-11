import IGLogo from "../../img/IGLogo.png"
import { Link } from "react-router-dom"
import RSLogo from "../../img/Logo.png"
import "../../Rose+Sooy.css"

export const Footer = () => {
     return (
          <ul className="footer">
               <div className="footer__group_left">
                    <li className="footer__list_item-left">
                         <Link className="footer__link" to={"/"}>
                              <img className="footer__logo-small" src={RSLogo} alt="Rose + Sooy Logo"/>
                         </Link>
                    </li>
               </div>
               <div className="footer__group-middle">
                    <li className="footer__list_item-middle">
                         <Link className="footer__link" to={"https://www.instagram.com/roseandsooycounseling/"} target="_blank_tab">
                              <img className="footer__IGlogo-small" src={IGLogo} alt="Rose + Sooy Instagram"/>
                         </Link>
                    </li>
               </div>
               <div className="footer__group_right">
                    <li className="footer__list_item-right">
                         <Link className="footer__link" to={"mailto:support@roseandsooy.com"}>
                              support@roseandsooy.com
                         </Link>
                    </li>
                    <li className="footer__list_item-separator">
                         |
                    </li>
                    <li className="footer__list_item-right">
                         <Link className="footer__link" to={"/phone-consultation"}>
                              Free Phone Consultation
                         </Link>
                    </li>
                    <li className="footer__list_item-separator">
                         |
                    </li>
                    <li className="footer__list_item-right">
                         <Link className="footer__link" to={"/client-portal"}>
                              Client Portal
                         </Link>
                    </li>
                    <li className="footer__list_item-separator">
                         |
                    </li>
                    <li className="footer__list_item-right">
                         <Link className="footer__link" to={"/good-faith-estimate"}>
                              Good Faith Agreement
                         </Link>
                    </li>
                    <li className="footer__list_item-separator">
                         |
                    </li>
                    <li className="footer__list_item-right">
                         <Link className="footer__link" to={"/privacy-policy"}>
                              Privacy Policy
                         </Link>
                    </li>
               </div>
          </ul>
     )
}