import TherapistIconJodie from "../../img/TherapistsImgs/RosenblumJodieHeadshot.png"
import TherapistIconKaelie from "../../img/TherapistsImgs/SooyKaelieHeadshot.png"
import TherapistIconRoseSooy from "../../img/TherapistsImgs/RoseSooyHomeReduced.png"
import { ConnectButton, ConnectButtonJodie, ConnectButtonKaelie } from "./ConnectButton"
import { Quote05, Quote06 } from "./Quotes"
import { Link } from "react-router-dom"

export const About = () => {
     return (
          <>
               <div className='header__spacer' />
               <AboutForHome />
               <div className="about__heading-h2">
                    <h2 className="about__greeting">
                         About the therapists!
                    </h2>
               </div>
               <AboutJodieRosenblum />
               <AboutKaelieSooy />
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
                         {/* <h4 className="about__practice-details_header">
                              Individual Therapy and Couples Counseling
                         </h4> */}
                         <div className="about__practice-details_paragraph">
                              Meet the co-owners of Rose + Sooy Counseling, <Link className="about__link" to={"/about/jodie-rosenblum"} target="_top">Jodie Rosenblum, LCSW [she/her]</Link> and <Link className="about__link" to="about/kaelie-sooy" target="_top">Kaelie Sooy, LCSW [she/her]</Link>.
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

export const AboutKaelieSooySpacing = () => {
     return (
          <>
               <div className='header__spacer' />
               <AboutKaelieSooy />
               <Quote05 />
               <ConnectButtonKaelie />
          </>
     )
}

export const AboutKaelieSooy = () => {
     return (
          <article className="about__therapists">
               <section className="about__bio-group">
                    <img className="about__photo" src={TherapistIconKaelie} alt="Kaelie Sooy, LCSW" />
                    <div className="about__therapist-bio">
                         <section className="about__therapist-header">
                              Kaelie Sooy, LCSW [she/her]
                         </section>
                         <div className="about__therapist-bio_paragraph">
                              I enter the therapeutic relationship with openness, curiosity, and a trauma-informed lens. I create a safe space for you to share your story; therefore, you can expect a warm, judgment free approach when meeting with me. I know from personal experience how vulnerable therapy can feel. As a therapist who goes to therapy herself, I understand how hard and scary it is but also how rewarding it is to heal and grow. You deserve to show up for yourself in this way too. I would be honored to hold space with you as you embark on this healing journey for yourself.
                         </div>
                         <div className="about__therapist-bio_paragraph">
                              My approach to therapy is relational and collaborative, based upon the knowledge that you are the expert of your own experiences. I view myself as your guide to connecting with your body-mind-emotions. If you are looking to unpack negative or unhelpful beliefs instilled by trauma, heal from emotional exhaustion after prioritizing others’ needs before your own, or wanting to learn how to regulate your overactive nervous system to find inner peace; you're in the right place! With meaningful connection, collaboration and honest feedback, growth and change can happen. You can rediscover your inner healing and strength. Together, we will create a roadmap to living an authentic, self-compassionate, and balanced life that is aligned with your values. By integrating an eclectic approach, I individualize treatment uniquely to you; using a variety of evidence-based therapy models such as EMDR, Internal Family Systems (IFS), Acceptance and Commitment therapy (ACT), and Cognitive Behavioral therapy (CBT). I am LGBTQIA+ affirming, body positive, and incorporate skills such as mindfulness, somatic awareness, psychodynamic and feminist theories.
                         </div>
                         <div className="about__therapist-bio_paragraph">
                              Being a therapist is my dream job and I am passionate about this work. I am the oldest of five children from an endearingly messy and blended family. I have called Nashville home since moving here in 2015 from Cleveland, Ohio. In my free time I enjoy spending time outdoors and can usually be found hiking somewhere with my spouse and our two energetic dogs. I am creative at heart and enjoy expressing myself through art and design. I have a love for learning and am a podcast/audiobook enthusiast.
                         </div>
                         <ConnectButtonKaelie />
                    </div>
               </section>
               <section className="about__specialty-areas">
                    <div className="about__specialty-header">
                         Specialty Areas
                    </div>
                    <ul className="about__specialty-list">
                         <li className="about__specialty-list_item">
                              LGBTQIA+
                         </li>
                         <li className="about__specialty-list_item">
                              Trauma + PTSD
                         </li>
                         <li className="about__specialty-list_item">
                              Identity + Self-compassion
                         </li>
                         <li className="about__specialty-list_item">
                              Religious Trauma + Deconstruction
                         </li>
                         <li className="about__specialty-list_item">
                              Perinatal + Postpartum Issues
                         </li>
                         <li className="about__specialty-list_item">
                              Anxiety + Depression
                         </li>
                         <li className="about__specialty-list_item">
                              Relationship Issues
                         </li>
                         <li className="about__specialty-list_item">
                              Life Transitions
                         </li>
                         <li className="about__specialty-list_item">
                              Healthcare Professionals
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
                                   EMDR intensives
                              </li>
                              <li className="about__services-list_item">
                                   Adults 18+
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
                                   Trained in EMDR + IFS + CBT + Disordered Eating
                              </li>
                              <li className="about__qualifications-list_item">
                                   Certified Trauma Treatment Specialist
                              </li>
                              <li className="about__qualifications-list_item">
                                   Masters of Social Work - University of Tennessee
                              </li>
                              <li className="about__qualifications-list_item">
                                   Bachelors of Psychology - Taylor University
                              </li>

                         </ul>
                    </article>
               </section>
          </article>
     )
}

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
                              Jodie Rosenblum, LCSW [she/her]
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