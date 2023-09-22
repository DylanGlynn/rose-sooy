import IGLogo from "../../img/IGLogo.png"
import { Link } from "react-router-dom"

/* let map;

async function initMap() {
  const position = { lat: 36.13040808497422, lng: -86.85722858773099 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
} */

export const Connect = () => {
     return (
          <>
               <div className='header__spacer' />
               <section className="connect">
                    <div className="connect__panel-left">
                         <div className="connect__panel-left__heading">
                              <h2 className="connect__panel-left__h2">
                                   Connect with Rose + Sooy
                              </h2>
                              <div className="connect__panel-left__address">
                                   Cavalier Building,<br/>95 White Bridge Pike Suite 350,<br/>Nashville, TN 37205
                              </div>
                              <div className="connect__panel-left__phone-number">
                                   (615) ???-???
                              </div>
                              <div className="connect__panel-left__email">
                                   support@roseandsooy.com
                              </div>
                              <div className="connect__panel-left__IG">
                                   <Link className="connect__panel-left__IG-logo" to={"https://www.instagram.com/roseandsooycounseling/"} target="_blank_tab">
                                        <img className="connect__panel-left__IGlogo-small" src={IGLogo} alt="Rose + Sooy Instagram" />
                                   </Link>
                              </div>
                              <div className="connect__map">
                                   {/* {initMap()} */}
                              </div>
                         </div>
                    </div>
                    <div className="connect__panel-right">
                         Form Goes Here
                    </div>
               </section>
          </>
     )
}