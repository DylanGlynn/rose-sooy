import FlowersBackground from "../../img/FlowersImage.png"

export const Home = () => {
     return (
          <section className="home__page">
               <article className="home__welcome">
                    <h2 className="home__welcome-logo">Rose + Sooy Counseling</h2>
                    <div className="home__welcome-greeting">
                         You are welcome here.
                    </div>
               </article>
               <div className="home__therapeutic-philosophy">
                    “My ideas about therapy….”
               </div>
               <div className="home__quote**temp_title">
                    Quotes
               </div>
               {/* <div className="home__background-image">
                    <img className="home__background-flowers" src={FlowersBackground} alt="Flowers Background" />
               </div> */}
               <article className="home__quotes">
                    <div className="home__individual-quote">
                         <div className="home__individual-quote_border">
                              <div className="home__individual-quote_quote">
                                   "You are worthy of taking up space."
                              </div>
                              <div className="home__individual-quote_attribute">
                                   - R + S Counseling
                              </div>
                         </div>
                    </div>
                    <div className="home__individual-quote">
                         <div className="home__individual-quote_border">
                              <div className="home__individual-quote_quote">
                                   “Therapy is a gift to yourself, to feel, to need, and to heal.”
                              </div>
                              <div className="home__individual-quote_attribute">
                                   - R+S Counseling
                              </div>
                         </div>
                    </div>
                    <div className="home__individual-quote">
                         <div className="home__individual-quote_border">
                              <div className="home__individual-quote_quote">
                                   “You are not who you are because of what has happened to you, but despite it.”
                              </div>
                              <div className="home__individual-quote_attribute">
                                   - R + S Counseling
                              </div>
                         </div>
                    </div>
                    <div className="home__individual-quote">
                         <div className="home__individual-quote_border">
                              <div className="home__individual-quote_quote">
                                   “If trauma can be passed down through generations, then so can healing.”</div>
                              <div className="home__individual-quote_attribute"> - R + S Counseling</div>
                         </div>
                    </div>
                    <div className="home__individual-quote">
                         <div className="home__individual-quote_border">
                              <div className="home__individual-quote_quote">
                                   “Vulnerability sounds like truth and feels like courage.Truth and courage aren’t always comfortable, but they’re never weakness”</div>
                              <div className="home__individual-quote_attribute"> - Brene Brown</div>
                         </div>
                    </div >
                    <div className="home__individual-quote">
                         <div className="home__individual-quote_border">
                              <div className="home__individual-quote_quote">
                                   “The place of true healing is a fierce place.It's a giant place. it's a place of monstrous beauty and endless dark and glimmering light.”</div>
                              <div className="home__individual-quote_attribute"> - Cheryl Strayed, <span className="home__individual-quote_book-title">Tiny Beautiful Things</span></div>
                         </div>
                    </div >

                    <div className="home__pictures">
                         Pics
                    </div>
               </article >
          </section >
     )
}