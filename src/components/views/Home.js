import { AboutForHome, AboutJodieRosenblum, AboutKaelieSooy } from "./About";
import { ServicesForHome } from "./Services"

export const Home = () => {
     return (
          <>
               <section className="home__greeting">
                    <article className="home__greeting-words">
                         <div className="home__greeting-name">
                              ROSE + SOOY COUNSELING
                         </div>
                         <div className="home__greeting-welcome">
                              We're glad you're here!
                         </div>
                    </article>
               </section>
               <section className="home__page">
               </section >
               <article className="home__quotes-01">
                    <div className="home__quote-01">
                         <div className="home__quote-01-pic">
                              {/* <img src={NatureBackground_Ocean} className="home__quote-01-img" /> */}
                         </div>
                         <div className="home__quote-01-right">
                              <div className="home__quote-01-quote">
                                   “You are not who you are because of what has happened to you, but despite it.”
                              </div>
                              <div className="home__quote-01-attribute">
                                   - R + S Counseling
                              </div>
                         </div>
                    </div>
               </article>
               <AboutForHome />
               <AboutJodieRosenblum />
               <AboutKaelieSooy />
               <article className="home__quotes-02">
                    <div className="home__quote-02">
                         <div className="home__quote-02-pic">
                              {/* <img src={NatureBackground_Ocean} className="home__quote-02-img" /> */}
                         </div>
                         <div className="home__quote-02-right">
                              <div className="home__quote-02-quote">
                                   “The place of true healing is a fierce place. It's a giant place. it's a place of monstrous beauty and endless dark and glimmering light.”
                              </div>
                              <div className="home__quote-02-attribute">
                                   - Cheryl Strayed, <span className="home__quote_book-title">Tiny Beautiful Things</span>
                              </div>
                         </div>
                    </div>
               </article>
               <ServicesForHome />
          </>
     )
}