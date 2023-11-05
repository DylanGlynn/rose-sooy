import IGLogo from "../../img/IGLogo.png"
import { Link } from "react-router-dom"
import LocationMap from "../../img/Connect/GoogleMap.png"
import TherapyRoom from "../../img/Connect/TherapyRoom.png"
import Lounge from "../../img/Connect/Lounge.png"

export const Connect = () => {
     return (
          <>
               <div className='header__spacer' />
               <section className="connect">
                    <div className="connect__panel-left">
                         <h2 className="connect__panel-left__h2">
                              Connect with Rose + Sooy
                         </h2>
                         <div className="connect__panel-left__address">
                              Cavalier Building,<br />95 White Bridge Pike Suite 350,<br />Nashville, TN 37205
                         </div>
                         <div className="connect__panel-left__ADA">
                              ADA accessible parking located behind the building.
                         </div>
                         <div className="connect__panel-left__phone-number">
                              (615) ???-???
                         </div>
                         <div className="connect__panel-left__email">
                              <Link className="connect__panel-left__email" to={"mailto:support@roseandsooy.com?subject=Initial%20Contact"}> support@roseandsooy.com</Link>
                         </div>
                         <div className="connect__panel-left__IG">
                              <Link className="connect__panel-left__IG-logo" to={"https://www.instagram.com/roseandsooycounseling/"} target="_blank_tab">
                                   <img className="connect__panel-left__IGlogo-small" src={IGLogo} alt="Rose + Sooy Instagram" />
                              </Link>
                         </div>
                    </div>
                    {/* Form Goes Here */}
                    <div className="connect__panel-right">
                         <Link to="https://www.google.com/maps/place/95+White+Bridge+Rd,+Nashville,+TN+37205/@36.1303102,-86.8599632,17z/data=!3m1!4b1!4m6!3m5!1s0x886463d40313b94b:0x772075008e9dc20e!8m2!3d36.1303102!4d-86.8573883!16s%2Fg%2F11bw3wx9mn?entry=ttu" target="_blank">
                              <img className="connect__map" src={LocationMap} alt="Cavalier Building Map" />
                         </Link>
                    </div>
               </section>
               <section className="connect__bottom">
                    <img className="connect__office__photo" src={Lounge} alt="Lounge" />
                    <img className="connect__office__photo" src={TherapyRoom} alt="Therapy Room" />
               </section>
          </>
     )
}