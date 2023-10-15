import LocationsInOffice from "../../img/NatureImgs/Locations/InOffice.png"
import LocationsTelehealth from "../../img/NatureImgs/Locations/TelehealthSessions.png"
import LocationsWalkTalk from "../../img/NatureImgs/Locations/WalkTalk.png"
import { ConnectButton } from "./ConnectButton"

export const LocationOptions = () => {
     return (
          <section className="locations">
               <div className="locations__h2">
                    Locations
               </div>
               <section className="locations__group">
                    <article className="location">
                         <div className="location__pic">
                              <img className="location__pic-img" src={LocationsTelehealth} />
                         </div>
                         <div className="location__name">
                              Telehealth
                         </div>
                         <div className="location__info">
                              Meet virtually on a HIPPA safe platform from your home using your laptop or smartphone. At Rose + Sooy Counseling, we utilize Simple Practice for virtual therapy sessions.
                         </div>
                    </article>
                    <article className="location">
                         <div className="location__pic">
                              <img className="location__pic-img" src={LocationsInOffice} />
                         </div>
                         <div className="location__name">
                              In Office
                         </div>
                         <div className="location__info">
                              Therapy sessions are held in person at our ADA accessible office location:
                              <div className="location__address">
                                   95 White Bridge Rd. Suite 350,
                                   <br />Nashville TN 37205
                              </div>
                         </div>
                    </article>
                    <article className="location">
                         <div className="location__pic">
                              <img className="location__pic-img" src={LocationsWalkTalk} />
                         </div>
                         <div className="location__name">
                              Walk + Talk
                         </div>
                         <div className="location__info">
                              Walking therapy involves taking our session outdoors to the local Nashville Greenway. The movement is easy-going and designed to facilitate the psychotherapy process.
                         </div>
                    </article>
               </section>
          </section>
     )
}

export const LocationOptionsSpacing = () => {
     return (
          <>
               <div className='header__spacer' />
               <LocationOptions />
               <ConnectButton />
          </>
     )
}