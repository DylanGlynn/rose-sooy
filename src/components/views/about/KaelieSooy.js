import { ConnectButtonKaelie, LearnMoreKaelie } from "../ConnectButton"
import TherapistIconKaelie from "../../../img/TherapistsImgs/SooyKaelieHeadshot.png"
import TherapistIconKaelieSmall from "../../../img/TherapistsImgs/SooyKaelieHeadshotSmall.png"
import { Quote05 } from "../Quotes"

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
                              Kaelie Sooy, LCSW (she/her)
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

export const AboutKaelieSooySmall = () => {
     return (
          <section className="about__therapists__brief">
               <img className="about__photo__brief" src={TherapistIconKaelieSmall} alt="Kaelie Sooy, LCSW" />
               <article className="about__small-therapist__group">
                    <h3 className="about__small-therapist__header">
                         Kaelie Sooy, LCSW (she/her)
                    </h3>
                    <h4 className="about__small-therapist__subheader">
                         Co-Owner and Psychotherapist
                    </h4>
                    <h4 className="about__small-therapist__subheader">
                         Individual Counseling
                    </h4>
                    <div className="about__small-therapist__paragraph">
                         I enter the therapeutic relationship with openness, curiosity, and a trauma informed lens. You can expect therapy with me to be collaborative, grounding, and individualized to your values and goals.
                    </div>
                    <div className="about__small-therapist__button">
                         <LearnMoreKaelie />
                    </div>
               </article>
          </section>
     )
}