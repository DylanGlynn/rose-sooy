import { Link } from "react-router-dom"
import "../../Rose+Sooy.css"

export const Footer = () => {
     return (
          <section className="footer">
               <section className="footer__group-left"></section>
               <section className="footer__group-middle">
                    <article className="footer__group-middle-name">
                         Rose + Sooy Counseling
                    </article>
                    <article className="footer__group-middle-address">
                         Cavalier Building, 95 White Bridge Pike Suite 350, Nashville, TN 37205
                    </article>
                    <article className="footer__group-middle-list">
                         <ul className="footer__group-middle-list__links">
                              <li className="footer__list_item-middle">
                                   <Link className="footer__link" to={"mailto:support@roseandsooy.com"}>
                                        support@roseandsooy.com
                                   </Link>
                              </li>
                              <li className="footer__list_item-separator">
                                   |
                              </li>
                              {/* <li className="footer__list_item-middle">
                                   (615) ???-????
                              </li>
                              <li className="footer__list_item-separator">
                                   |
                              </li> */}
                              <li className="footer__list_item-middle">
                                   <Link className="footer__link" to={"/phone-consultation"}>
                                        Free Phone Consultation
                                   </Link>
                              </li>
                              <li className="footer__list_item-separator">
                                   |
                              </li>
                              <li className="footer__list_item-middle">
                                   <Link className="footer__link" to={"https://secure.simplepractice.com/users/sign_in"}>
                                        Client Portal
                                   </Link>
                              </li>
                              <li className="footer__list_item-separator">
                                   |
                              </li>
                              <li className="footer__list_item-middle">
                                   <Link className="footer__link" to={"/fees-and-policies"}>
                                        Fees & Policies
                                   </Link>
                              </li>
                         </ul>
                    </article>
               </section>
               <section className="footer__group-right">
               </section>
          </section>
     )
}