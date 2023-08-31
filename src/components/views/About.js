import TherapistIcon from "../../img/SooyKalieHeadshot.png"

export const About = () => {
     return (
          <section className="about">
               {/* <div className="about__heading">
                    <h2 className="about__heading-h2">
                         About the practice.
                    </h2>
                    <div className="about__history">
                         Brief description about history and purpose of practice?
                    </div>
               </div> */}
               <section className="about__therapists">
                    <article className="about__therapist">
                         <div className="about__therapist-row-01">
                              <div className="about__therapist-row-01-left">
                                   <img className="about__therapist-pic" src={TherapistIcon} alt="Kaelie Sooy, LCSW (she/her)" />
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
                                             I believe in the power of therapy, with growth through meaningful connection and honest feedback. Therapy with me is collaborative and relational. I am attuned to creating safe spaces for clients to share their life experiences and emotional moments. I enter the therapeutic relationship with openness, curiosity, and a trauma informed lens. By integrating an eclectic approach, using a variety of evidence-based therapeutic modalities (like IFS, EMDR, psychodynamic, and feminist theory), I individualize treatment to each person.
                                        </div>
                                        <div className="about__therapist-bio-body">
                                             Many of my clients are learning to regulate an over-activated nervous system, unpacking beliefs instilled by trauma, or healing from emotional exhaustion after prioritizing others' needs before their own. I provide therapeutic support for young adults, individual adults, and specialize in work with the LGBTQ+ community. I help my clients lean into living an authentic, self-compassionate, and balanced life. You are the expert on yourself, and together we can help you rediscover your own inner healing and strength.
                                        </div>
                                        <div className="about__therapist-bio-body">
                                             Being a therapist is my dream job, and I am authentically passionate about this work. I know from personal experience how vulnerable therapy can feel, as I am a therapist who goes to therapy, committed to walking my own healing journey. Going to therapy, leaning into your healing journey, is one of the bravest and strongest things you can do. You deserve to show up for yourself in this way, and I would be honored to hold space with you.
                                        </div>
                                        <div className="about__therapist-bio-body">
                                             I have called Nashville home since moving here in 2015 from Cleveland, Ohio. I am the oldest of five children from an endearingly messy and blended family. When I am not seeing clients, I enjoy spending time outdoors and can usually be found hiking somewhere with my spouse and our two energetic dogs. I am creative at heart and enjoy self expression through art and design. I have a love for learning and am a podcast/audiobook enthusiast.
                                        </div>
                                   </div>
                                   <div className="about__therapist-services">
                                        <h4 className="about__therapist-h4">
                                             Services Offered:
                                        </h4>
                                        <ul className="about__therapist-list">
                                             <li className="about__therapist-list-item">
                                                  Virtual + in person sessions for individuals
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
                                                  Sense of Self + Self-compassion
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
                                                  Licensed Clinical Social Worker in Tennessee
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
          </section>)
}