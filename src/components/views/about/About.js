import { AboutJodieRosenblumSmall } from "./JodieRosenblum"
import { AboutKaelieSooySmall } from "./KaelieSooy"
import { ConnectButton } from "../ConnectButton"
import { Link } from "react-router-dom"
import TherapistIconRoseSooy from "../../../img/TherapistsImgs/RoseSooyHomeReduced.png"
import TherapistIconAboutPractice from "../../../img/TherapistsImgs/RoseSooyAboutPractice.png"

export const About = () => {
     return (
          <>
               <div className='header__spacer' />
               <AboutPractice />
               <div className="about__heading-h2">
                    <h2 className="about__greeting">
                         Meet the therapists!
                    </h2>
               </div>
               <section className="about__practice-bio__brief">
                    <AboutJodieRosenblumSmall />
                    <AboutKaelieSooySmall />
               </section>
          </>
     )
}

export const AboutForHome = () => {
     return (
          <section className="about">
               <article className="about__practice-group">
                    <img className="about__practice-photo" src={TherapistIconRoseSooy} alt="Rose + Sooy Counseling" />
                    <section className="about__practice-bio">
                         <h3 className="about__practice-header">
                              We're glad you're here!
                         </h3>
                         <div className="about__practice-details_paragraph">
                              Meet the co-owners of Rose + Sooy Counseling, <Link className="about__link" to={"/about/jodie-rosenblum"} target="_top">Jodie Rosenblum, LCSW (she/her)</Link> and <Link className="about__link" to="about/kaelie-sooy" target="_top">Kaelie Sooy, LCSW (she/her)</Link>.
                         </div>
                         <div className="about__practice-details_paragraph">
                              Therapy is a journey, a weaving winding exploration of what it is that creates meaning in your life. How can you work towards a rich, full and meaningful life aligned by your values? What is it that lights you up? What would a life worth living, a truly lived and embodied life, look like for you? What would your day feel like in your wildest dreams? In the words of Winston Churchill: “Courage isn’t the absence of fear; it’s being afraid and doing it anyway.”
                         </div>
                         <div className="about__practice-details_paragraph">
                              Therapy provides the tools to learn how to live mindfully and meaningfully; how do we pack up our fear and take it with us on our journey through life? How do we learn to “do it scared”? How do we make room for joy and exploration in our daily lives? How do we learn to accept and love ourselves as we are, so we can become fully and authentically ourselves that we wish to be? How do we allow ourselves to love others while ensuring that we are treated with the respect we deserve? How do we ground, restore and recenter ourselves on an ongoing basis so we can have the courage to get present, open up, and do what truly matters to us?
                         </div>
                         <div className="about__practice-details_paragraph">
                              These are the questions we seek to help you answer on your therapy journey with Rose + Sooy Counseling. We are genuine, curious, nonjudgmental and approach you with wonder and excitement.{/*  We’re so glad you’re here! */}
                         </div>
                         <ConnectButton />
                    </section>
               </article>
          </section>
     )
}

export const AboutPractice = () => {
     return (
          <section className="about">
               <article className="about__practice-group">
                    <img className="about__practice-photo" src={TherapistIconAboutPractice} alt="Rose + Sooy Counseling" />
                    <section className="about__practice-bio">
                         <h3 className="about__practice-header">
                              We're so glad you're here!
                         </h3>
                         <div className="about__practice-details_paragraph">
                              At Rose and Sooy Counseling, we help you work towards a rich, full and meaningful life aligned by your values. We provide you with tools to live mindfully, to accept and love yourself as you are. To ground, restore, and recenter yourself. To pack up your fear and have the courage to lean into a well lived life, even when it’s scary.
                         </div>
                         <div className="about__practice-details_paragraph">
                              We offer individual and couples therapy, specializing in trauma processing, perfectionism, and body positivity. We work with adults and adolescents, providing affirming care for neurodiversity and LGBTQ+.
                         </div>
                         <div className="about__practice-details_paragraph">
                              We would be honored to support you in your journey of deeper discovery, self compassion, and healing.
                         </div>
                         <ConnectButton />
                    </section>
               </article>
          </section>
     )
}