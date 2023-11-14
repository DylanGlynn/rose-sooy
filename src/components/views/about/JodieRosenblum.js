import { ConnectButtonJodie, LearnMoreJodie } from "../ConnectButton"
import { Link } from "react-router-dom"
import TherapistIconJodie from "../../../img/TherapistsImgs/RosenblumJodieHeadshot.png"
import TherapistIconJodieSmall from "../../../img/TherapistsImgs/RosenblumJodieHeadshotSmall.png"
import { Quote06 } from "../Quotes"

export const AboutJodieRosenblumSpacing = () => {
     return (
          <>
               <div className='header__spacer' />
               <AboutJodieRosenblum />
               <Quote06 />
               <ConnectButtonJodie />
          </>
     )
}

export const AboutJodieRosenblum = () => {
     return (
          <article className="about__therapists">
               <section className="about__bio-group">
                    <img className="about__photo" src={TherapistIconJodie} alt="Jodie Rosenblum, LCSW" />
                    <div className="about__therapist-bio">
                         <section className="about__therapist-header">
                              Jodie Rosenblum, LCSW (she/her)
                         </section>
                         <div className="about__therapist-bio_paragraph">
                              I'm passionate about helping people heal, find joy, live their truth, improve their relationships and create a well-lived life by their own definition. I specialize in working with folks with anxiety, depression, bi-polar disorders, neurodivergence like ADHD and ASD, OCD, self-esteem issues, relationship issues, women's and body-image issues and life transitions. I provide a safe space to explore what a life well lived looks like to each of my clients, and help them create a road map to align their life with their values.
                         </div>
                         <div className="about__therapist-bio_paragraph">
                              I use an eclectic and eccentric therapeutic approach to therapy. I employ curiosity and a nonjudgmental attitude, humor. I acknowledge the value of the therapeutic relationship and use radical acceptance—meeting each client “where they are at.” I interweave this approach with evidence-based therapies such as cognitive behavioral therapy (CBT), Acceptance and Commitment therapy (ACT), and Imago Relationship Therapy (IRT). I incorporate mindfulness skills, somatic techniques, neurodiversity-informed and affirming therapy, LGBTQ+ affirming therapy, embodiment, existentialist and feminist theory, the enneagram, and body positivity when engaging with my clients in session. We’ve too often been taught to be ashamed of who we are simply because we’re different. It’s time to unlearn this and discover that being different is not only a great strength, but also a gift to the world and all in it who care to open their minds.
                         </div>
                         <div className="about__therapist-bio_paragraph">
                              If you’re interested in living a curious life guided by your personal values, decolonizing your mind, unlearning patterns and approaches that are no longer serving you, and learning to love the skin you're in, please reach out to me today. I’m so excited to work with you!
                         </div>
                         <ConnectButtonJodie />
                    </div>
               </section>
               <section className="about__specialty-areas">
                    <div className="about__specialty-header">
                         <Link className="about__specialty-header_link" to="/specialty-areas" target="_top">Specialty Areas</Link>
                    </div>
                    <ul className="about__specialty-list">
                         <li className="about__specialty-list_item">
                              ADHD + Neurodiversity
                         </li>
                         <li className="about__specialty-list_item">
                              OCD + Perfectionism
                         </li>
                         <li className="about__specialty-list_item">
                              Performance Anxiety
                         </li>
                         <li className="about__specialty-list_item">
                              Mood Disorders
                         </li>
                         <li className="about__specialty-list_item">
                              Life Transitions + Stress
                         </li>
                         <li className="about__specialty-list_item">
                              Relational Issues
                         </li>
                         <li className="about__specialty-list_item">
                              Couples + Premarital
                         </li>
                         <li className="about__specialty-list_item">
                              Adolescent Issues
                         </li>
                         <li className="about__specialty-list_item">
                              LGBTQIA+
                         </li>
                    </ul>
               </section>
               <section className="about__services-group">
                    <article className="about__services">
                         <div className="about__services-header">
                              Services Offered
                         </div>
                         <ul className="about__services-list">
                              <li className="about__services-list_item">
                                   Virtual Sessions
                              </li>
                              <li className="about__services-list_item">
                                   In-person sessions
                              </li>
                              <li className="about__services-list_item">
                                   Walk and talk therapy at the Nashville Greenway
                              </li>
                              <li className="about__services-list_item">
                                   Adolescents 13+
                              </li>
                              <li className="about__services-list_item">
                                   Adults 18+
                              </li>
                              <li className="about__services-list_item">
                                   Couples
                              </li>
                         </ul>
                    </article>
                    <article className="about__qualifications">
                         <div className="about__qualifications-header">
                              Qualifications
                         </div>
                         <ul className="about__qualifications-list">
                              <li className="about__qualifications-list_item">
                                   Licensed Clinical Social Worker (LCSW) in Tennessee
                              </li>
                              <li className="about__qualifications-list_item">
                                   Trained in Imago Relationship Therapy (IRT)
                              </li>
                              <li className="about__qualifications-list_item">
                                   Masters of Social Work - University of Tennessee
                              </li>
                              <li className="about__qualifications-list_item">
                                   Bachelors in Philosophy - College of Charleston
                              </li>
                         </ul>
                    </article>
               </section>
          </article>
     )
}

export const AboutJodieRosenblumSmall = () => {
     return (
          <section className="about__therapists__brief">
               <img className="about__photo__brief" src={TherapistIconJodieSmall} alt="Jodie Rosenblum, LCSW" />
               <article className="about__small-therapist__group">
                    <h3 className="about__small-therapist__header">
                         Jodie Rosenblum, LCSW (she/her)
                    </h3>
                    <h4 className="about__small-therapist__subheader">
                         Co-Owner and Psychotherapist
                    </h4>
                    <h4 className="about__small-therapist__subheader">
                         Individual and Couples Counseling
                    </h4>
                    <div className="about__small-therapist__paragraph">
                         I use empathy, connection, mindfulness, somatic awareness, laughter and supportive listening to guide the process of therapy. I can help you create a well-lived life by your own definition.
                    </div>
                    <LearnMoreJodie />
               </article>
          </section>
     )
}