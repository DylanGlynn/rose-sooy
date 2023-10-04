import TherapistIconKaelie from "../../img/SooyKaelieHeadshot.png"
import TherapistIconJodie from "../../img/TherapistIcon.png"

export const About = () => {
     return (
          <>
               <div className='header__spacer' />
               <AboutForHome />
               <div className="about__heading-h2">
                    <h2 className="">
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
               <section className="about__practice">
                    <article className="about__practice???">
                         <div className="about__practice-row-01???">
                              <div className="about__practice-row-01-left???">
                                   <img className="about__practice-pic" src={TherapistIconJodie} alt="Rose + Sooy Counseling" />
                              </div>
                              <section className="about__practice-row-01-left???">
                                   <div className="about__practice-name">
                                        <h3 className="about__practice-name-h3">
                                             ROSE + SOOY COUNSELING
                                        </h3>
                                   </div>
                                   <div className="about--practice-bio">
                                        <h4 className="about--practice-h4">
                                             ???
                                        </h4>
                                        <div className="about--practice-bio-body">
                                             ???
                                        </div>
                                   </div>
                                   <div className="about--practice-services">
                                        <h4 className="about--practice-h4">
                                             ???
                                        </h4>
                                        <ul className="about--practice-list">
                                             <li className="about--practice-list-item">
                                                  ???
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="about--practice-specialties">
                                        <h4 className="about--practice-h4">
                                             ???
                                        </h4>
                                        <ul className="about--practice-list">
                                             <li className="about--practice-list-item">
                                                  ???
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="about--practice-qualifications">
                                        <h4 className="about--practice-h4">
                                             ???
                                        </h4>
                                        <ul className="about--practice-list">
                                             <li className="about--practice-list-item">
                                                  ???
                                             </li>
                                        </ul>
                                   </div>
                              </section>
                         </div>
                    </article>
               </section>
          </section>
     )
}

export const AboutKaelieSooySpacing = () => {
     return (
          <>
               <div className='header__spacer' />
               <AboutKaelieSooy />
          </>
     )
}

export const AboutKaelieSooy = () => {
     return (
          <section className="about">
               <section className="about__therapists">
                    <article className="about__therapist">
                         <div className="about__therapist-row-01">
                              <div className="about__therapist-row-01-left">
                                   <img className="about__therapist-pic" src={TherapistIconKaelie} alt="Kaelie Sooy, LCSW (she/her)" />
                              </div>
                              <section className="about__therapist-row-01-right">
                                   <div className="about__therapist-name">
                                        <h3 className="about__therapist-name-h3">
                                             Kaelie Sooy, LCSW
                                        </h3>
                                   </div>
                                   <div className="about__therapist-bio">
                                        <h4 className="about__therapist-h4">
                                             Bio:
                                        </h4>
                                        <div className="about__therapist-bio-body">
                                             I believe in the power of therapy. With meaningful connection, collaboration and honest feedback between client and therapist, growth and change can happen.  I enter the therapeutic relationship with openness, curiosity, and a trauma-informed lens. I also create a safe space for clients to share their stories. By integrating an eclectic approach using a variety of evidence-based therapy models (like Internal Family Systems (IFS), EMDR, psychodynamic and feminist theory), I individualize treatment to each person.
                                        </div>
                                        <div className="about__therapist-bio-body">
                                             Many of my clients are learning to regulate an over-activated nervous system, unpacking beliefs instilled by trauma, or healing from emotional exhaustion after prioritizing others' needs before their own. I work with individuals 18 and older and specialize in working with the LGBTQ+ community. I help my clients learn to live their lives with authenticity, self-compassion, and balance. You are the expert on yourself; together we can help you rediscover your inner healing and strength.
                                        </div>
                                        <div className="about__therapist-bio-body">
                                             Being a therapist is my dream job and I am passionate about this work. I know from personal experience how vulnerable therapy can feel. As a therapist who goes to therapy herself, I understand how hard and scary it is but also rewarding it can be to heal and grow.  You deserve to show up for yourself in this way too. I would be honored to hold space with you as you embark on this healing journey for yourself.
                                        </div>
                                        <div className="about__therapist-bio-body">
                                             I have called Nashville home since moving here in 2015 from Cleveland, Ohio. I am the oldest of five children from an endearingly messy and blended family. In my free time I enjoy spending time outdoors and can usually be found hiking somewhere with my spouse and our two energetic dogs. I am creative at heart and enjoy expressing myself through art and design. I have a love for learning and am a podcast/audiobook enthusiast.
                                        </div>
                                   </div>
                                   <div className="about__therapist-services">
                                        <h4 className="about__therapist-h4">
                                             Services Offered:
                                        </h4>
                                        <ul className="about__therapist-list">
                                             <li className="about__therapist-list-item">
                                                  Virtual and/or in person sessions for individuals
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Walk and talk therapy at the Nashville Greenway
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  EMDR intensives
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="about__therapist-specialties">
                                        <h4 className="about__therapist-h4">
                                             Specialty Areas:
                                        </h4>
                                        <ul className="about__therapist-list">
                                             <li className="about__therapist-list-item">
                                                  LGBTQ+
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Trauma + PTSD
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Relationship Issues
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Narcissistic Abuse
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Anxiety + Depression
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Healthcare Providers
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Life Transitions + Stress
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Religious Trauma + Deconstruction
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Perinatal + Postpartum
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Boundary Setting
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Adoption Issues
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="about__therapist-qualifications">
                                        <h4 className="about__therapist-h4">
                                             Qualifications:
                                        </h4>
                                        <ul className="about__therapist-list">
                                             <li className="about__therapist-list-item">
                                                  Licensed Clinical Social Worker (LCSW) in Tennessee
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Trained in EMDR + IFS + CBT + Disordered Eating
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Certified Trauma Treatment Specialist
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Masters of Social Work - University of Tennessee
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Bachelors of Psychology - Taylor University
                                             </li>
                                        </ul>
                                   </div>
                              </section>
                         </div>
                    </article>
               </section>
          </section>
     )
}

export const AboutJodieRosenblumSpacing = () => {
     return (
          <>
               <div className='header__spacer' />
               <AboutJodieRosenblum />
          </>
     )
}

export const AboutJodieRosenblum = () => {
     return (
          <section className="about">
               <section className="about__therapists">
                    <article className="about__therapist">
                         <div className="about__therapist-row-02">
                              <section className="about__therapist-row-02-left">
                                   <div className="about__therapist-name">
                                        <h3 className="about__therapist-name-h3">
                                             Jodie Rosenblum, LCSW
                                        </h3>
                                   </div>
                                   <div className="about__therapist-bio">
                                        <h4 className="about__therapist-h4">
                                             Bio:
                                        </h4>
                                        <div className="about__therapist-bio-body">
                                             I believe in the power of therapy. With meaningful connection, collaboration and honest feedback between client and therapist, growth and change can happen.  I enter the therapeutic relationship with openness, curiosity, and a trauma-informed lens. I also create a safe space for clients to share their stories. By integrating an eclectic approach using a variety of evidence-based therapy models (like Internal Family Systems (IFS), EMDR, psychodynamic and feminist theory), I individualize treatment to each person.
                                        </div>
                                        <div className="about__therapist-bio-body">
                                             Many of my clients are learning to regulate an over-activated nervous system, unpacking beliefs instilled by trauma, or healing from emotional exhaustion after prioritizing others' needs before their own. I work with individuals 18 and older and specialize in working with the LGBTQ+ community. I help my clients learn to live their lives with authenticity, self-compassion, and balance. You are the expert on yourself; together we can help you rediscover your inner healing and strength.
                                        </div>
                                        <div className="about__therapist-bio-body">
                                             Being a therapist is my dream job and I am passionate about this work. I know from personal experience how vulnerable therapy can feel. As a therapist who goes to therapy herself, I understand how hard and scary it is but also rewarding it can be to heal and grow.  You deserve to show up for yourself in this way too. I would be honored to hold space with you as you embark on this healing journey for yourself.
                                        </div>
                                        <div className="about__therapist-bio-body">
                                             I have called Nashville home since moving here in 2015 from Cleveland, Ohio. I am the oldest of five children from an endearingly messy and blended family. In my free time I enjoy spending time outdoors and can usually be found hiking somewhere with my spouse and our two energetic dogs. I am creative at heart and enjoy expressing myself through art and design. I have a love for learning and am a podcast/audiobook enthusiast.
                                        </div>
                                   </div>
                                   <div className="about__therapist-services">
                                        <h4 className="about__therapist-h4">
                                             Services Offered:
                                        </h4>
                                        <ul className="about__therapist-list">
                                             <li className="about__therapist-list-item">
                                                  Virtual and/or in person sessions for individuals
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Walk and talk therapy at the Nashville Greenway
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  EMDR intensives
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="about__therapist-specialties">
                                        <h4 className="about__therapist-h4">
                                             Specialty Areas:
                                        </h4>
                                        <ul className="about__therapist-list">
                                             <li className="about__therapist-list-item">
                                                  LGBTQ+
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Trauma + PTSD
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Relationship Issues
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Narcissistic Abuse
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Anxiety + Depression
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Healthcare Providers
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Life Transitions + Stress
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Religious Trauma + Deconstruction
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Perinatal + Postpartum
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Boundary Setting
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Adoption Issues
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="about__therapist-qualifications">
                                        <h4 className="about__therapist-h4">
                                             Qualifications:
                                        </h4>
                                        <ul className="about__therapist-list">
                                             <li className="about__therapist-list-item">
                                                  Licensed Clinical Social Worker (LCSW) in Tennessee
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Trained in EMDR + IFS + CBT + Disordered Eating
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Certified Trauma Treatment Specialist
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Masters of Social Work - University of Tennessee
                                             </li>
                                             <li className="about__therapist-list-item">
                                                  Bachelors of Psychology - Taylor University
                                             </li>
                                        </ul>
                                   </div>
                              </section>
                              <div className="about__therapist-row-02-right">
                                   <img className="about__therapist-pic" src={TherapistIconJodie} alt="Jodie Rosenblum, LCSW (she/her)" />
                              </div>
                         </div>
                    </article>
               </section>
          </section>
     )
}