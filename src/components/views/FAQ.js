import FAQPhoto from "../../img/NatureImgs/IMG_9358.JPG"
import { Link } from "react-router-dom"

export const FAQ = () => {
     /* const faqAccordion = (id) => {
          let x = document.getElementById(id);
          if (x.className.indexOf('faq__answer') === -1) {
               x.className += 'faq__answer';
          } else {
               x.className = x.className.replace('faq__answer', '');
          }
     } */

     return (
          <>
               <div className='header__spacer' />
               <div className="faqs">
                    <article className="faq__group-left">
                         <h2 className="faq__header">
                              Frequently Asked Questions
                         </h2>
                         <ul className="faq__list">
                              <li className="faq__entry">
                                   <div className="faq__question">
                                        How can I schedule a session?
                                   </div>
                                   <div className="faq__answer">
                                        Use the <Link to={"/phone-consultation"}>contact form</Link> to schedule a free phone consultation or email <Link to={"mailto:support@roseandsooy.com?subject=Initial%20Contact"}> support@roseandsooy.com</Link>.
                                   </div>
                              </li>
                              {/* <li className="faq__entry">
                              <button onClick={faqAccordion('faq__answer')} className="faq__question">
                              How can I schedule a session?
                              </button>
                              <div className="faq__answer" id="faq__answer">
                              Use the <Link to={"/phone-consultation"}>contact form</Link> to schedule a free phone consultation or email <Link to={"mailto:support@roseandsooy.com?subject=Initial%20Contact"}> support@roseandsooy.com</Link>.
                              </div>
                         </li> */}
                              <li className="faq__entry">
                                   <div className="faq__question">
                                        What should I expect in a consult call?
                                   </div>
                                   <div className="faq__answer">
                                        The consultation call lasts for approximately 15 minutes. The therapist will ask you to share a little about yourself and what you are looking for in therapy. The therapist will discuss their approach to counseling and answer any questions you have about their therapeutic style and process. Keep in mind consult calls are not a therapy session, so therapeutic advice will not be provided. If both parties feel like it’s a good fit, you will be provided with next steps and scheduled for an intake session.
                                   </div>
                              </li>
                              <li className="faq__entry">
                                   <div className="faq__question">
                                        What if I do not live in Tennessee?
                                   </div>
                                   <div className="faq__answer">
                                        Due to licensing restrictions, Rose and Sooy Counselors are unable to provide therapy services for individuals who live outside of Tennessee.
                                   </div>
                              </li>
                              <li className="faq__entry">
                                   <div className="faq__question">
                                        What happens in the first session?
                                   </div>
                                   <div className="faq__answer">
                                        The first session is your intake session and will entail a lot of questions. Your therapist will ask you questions about yourself, your history and background, what you have been experiencing recently, how you cope with stressors, and your hopes/goals for therapy. You will also begin to form a connection with your therapist. Your therapist may share information about themself and what you can expect in future sessions.
                                   </div>
                              </li>
                              <li className="faq__entry">
                                   <div className="faq__question">
                                        What if I need to cancel?
                                   </div>
                                   <div className="faq__answer">
                                        Appointments can be canceled free of charge with more than 24 hours notice to the scheduled appointment. If appointments are canceled with less than 24 hours notice, you will be charged for the full session fee of the appointment.
                                   </div>
                              </li >
                              <li className="faq__entry">
                                   <div className="faq__question">
                                        Do you provide religious therapy?
                                   </div>
                                   <div className="faq__answer">
                                        No, we are not faith based. While we do not counsel from any particular religious perspective, we are welcoming to people from all spiritual, religious backgrounds, or lack thereof!
                                   </div>
                              </li >
                              <li className="faq__entry">
                                   <div className="faq__question">
                                        Can you prescribe medications or complete psych testing?
                                   </div>
                                   <div className="faq__answer">
                                        No, our license does not allow us to prescribe medications or complete psych testing. We diagnose and treat many mental health issues and are also able to provide established clients with referrals to trusted providers in the community for these services.
                                   </div>
                              </li >
                              <li className="faq__entry">
                                   <div className="faq__question">
                                        How often will we meet and how long will I be in therapy?
                                   </div>
                                   <div className="faq__answer">
                                        There is not a definitive answer to this question as each person’s circumstances are unique. Some clients are seen for a few months, while others continue treatment for years. Your therapist will collaborate with you throughout your work together, continuously exploring where you are at in your healing journey and if the current therapeutic work is meeting your needs.
                                   </div>
                              </li >
                         </ul >
                    </article>
                    <article className="faq__group-right">
                         <div className="faq__group-right_photo">
                              <img className="faq__group-right_pic" src={FAQPhoto} alt="Services" />
                         </div>
                    </article>
               </div >
          </>
     )
}