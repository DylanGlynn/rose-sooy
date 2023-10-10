import { AboutForHome, AboutJodieRosenblum, AboutKaelieSooy } from "./About";
import { Quote01, Quote02 } from "./Quotes";
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
               <Quote01 />
               <AboutForHome />
               <AboutJodieRosenblum />
               <AboutKaelieSooy />
               <Quote02 />
               <ServicesForHome />
          </>
     )
}