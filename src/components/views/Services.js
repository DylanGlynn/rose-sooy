import ServicesPhoto from "../../img/NatureImgs/IMG_9523.JPG"

export const ServicesForHome = () => {
     return (
          <>
               <section className="services">
                    <article className="services__group-left">
                         <div className="services__heading">
                              <h2 className="services__h2">
                                   Services Offered
                              </h2>
                         </div>
                         <div className="services__body">
                              <article className="services__provided">
                                   <div className="services__h4">
                                        Counseling Provided for:
                                   </div>
                                   <ul className="services__list">
                                        <li className="services__list-item">
                                             Individual Adults
                                        </li>
                                        <li className="services__list-item">
                                             Couples + Marriage
                                        </li>
                                        <li className="services__list-item">
                                             Adolescents + Young Adults
                                        </li>
                                   </ul>
                              </article>
                              <article className="services__locations">
                                   <div className="services__h4">
                                        Location Options:
                                   </div>
                                   <ul className="services__list">
                                        <li className="services__list-item">
                                             <span className="services__emphasis-underline">In Office</span>: Therapy sessions are held in-person at our office location: Cavalier Building, 95 White Bridge Pike Suite 350, Nashville, TN 37205.
                                        </li>
                                        <li className="services__list-item">
                                             <span className="services__emphasis-underline">Telehealth</span>: Meet virtually on a HIPPA safe platform from your home using your laptop or smartphone. At Rose and Sooy Counseling, we utilize Simple Practice for virtual therapy sessions.
                                        </li>
                                        <li className="services__list-item">
                                             <span className="services__emphasis-underline">Walk + Talk</span>: Walking therapy involves taking our session outdoors to the local Nashville Greenway. The movement is easy-going and designed to facilitate the psychotherapy process.
                                        </li>
                                   </ul>
                              </article>
                              <article className="services__fees">
                                   <div className="services__h4">
                                        Session Fees:
                                   </div>
                                   <ul className="services__list">
                                        <li className="services__session-paragraph">
                                             At Rose and Sooy Counseling, we have chosen to not be in-network with any insurance providers. We accept all major credit, debit, and HSA/FSA cards through your client portal in Simple Practice. Fees are based upon services provided. Please contact us for further information regarding pricing.
                                        </li>
                                        <li className="services__session-paragraph">
                                             We are happy to provide you with a super bill for possible “out-of-network” reimbursement. Please be aware that in order for your insurance company to consider your claim for reimbursement, they require a mental health diagnosis from the DSM-5 which could then become part of your permanent medical record.
                                        </li>
                                   </ul>
                              </article>
                         </div>
                    </article>
                    <article className="services__group-right">
                         <div className="services__group-right_photo">
                              <img className="services__group-right_pic" src={ServicesPhoto} alt="Services" />
                         </div>
                    </article>
               </section>
          </>
     )
}

export const Services = () => {
     return (
          <>
               <div className='header__spacer' />
               <ServicesForHome />
          </>
     )
}

export const ServicesIndividualAdults = () => {
     var acc = document.getElementsByClassName("accordion");
     var i;

     for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
               /* Toggle between adding and removing the "active" class,
               to highlight the button that controls the panel */
               this.classList.toggle("active");

               /* Toggle between hiding and showing the active panel */
               var panel = this.nextElementSibling;
               if (panel.style.display === "block") {
                    panel.style.display = "services__individuals-paragraph-dropdown";
               } else {
                    panel.style.display = "block";
               }
          });
     }
     return (
          <>
               <section className="services__individuals">
                    <h2 className="services__individuals-h2">
                         Individual Adult Counseling
                    </h2>
                    <div className="services__individuals-body">
                         <div className="services__individuals-paragraph accordion">
                              Adolescent therapy provides teens with a safe space for self-exploration, regulating emotions, and navigating changes.
                         </div>
                         <div className="accordion__panel">
                              <div id={1} className="services__individuals-paragraph-dropdown">
                                   Individual Therapy is a collaborative and relational process to discovering a deeper understanding of oneself and support for navigating life’s stressors. We believe the outcome of therapy is most predicted by the relationship between the therapist and the client. We honor you as the expert of your own experiences; viewing ourselves as guides to help you live a life more aligned with your values.
                              </div>
                              <div className="services__individuals-paragraph-dropdown">
                                   At Rose and Sooy Counseling, we utilize Acceptance and Commitment Therapy (ACT) to help you find acceptance for things outside of your control and take meaningful action on things you are capable of changing.
                              </div>
                              <div className="services__individuals-paragraph-dropdown">
                                   Together, we will …
                                   Emotion focused - identifying and regulating emotions
                                   Somatic therapy - reconnecting with your body and mind
                                   ACT, CBT (add more info)
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export const ServicesIndividualAdultsSpacing = () => {
     return (
          <>
               <div className='header__spacer' />
               <ServicesIndividualAdults />
          </>
     )
}

export const ServicesCouplesMarriage = () => {
     return (
          <>
               <section className="services__couples">
                    <h2 className="services__couples-h2">
                         Couples + Marriage Counseling
                    </h2>
                    <div className="services__couples-body">
                         <div className="services__couples-paragraph">
                              Couples Counseling teaches relational skills and intentionally explores relationship issues; creating a deeper sense of connection and understanding.
                         </div>
                         <div className="services__couples-paragraph-learn">
                              Learn More🔻
                         </div>
                         <div className="services__couples-paragraph-dropdown">
                              Couples Counseling teaches relational skills and intentionally explores relationship issues; creating a deeper sense of connection and understanding. Partners will learn relationship skills that focus on acceptance of differences, empathy, conscious listening and safe communication. Conflicts are seen as opportunities for growth, rather than as threats to the relationship.
                         </div>
                         <div className="services__couples-paragraph-dropdown">
                              At Rose and Sooy Counseling, we facilitate a safe space for couples to explore their relationship issues with the intention to work towards creating a deeper sense of connection and understanding. This helps couples remember that their partner is a mystery; experiencing a subjective reality very much unlike their own. Together from this understanding, we facilitate an avenue to openness and curiosity where couples can begin to cultivate a lived-awareness that they are a team; that they can either be "right" or be "in-relationship."  (add more info?)
                         </div>
                    </div>
               </section>
          </>
     )
}

export const ServicesCouplesMarriageSpacing = () => {
     return (
          <>
               <div className='header__spacer' />
               <ServicesCouplesMarriage />
          </>
     )
}

export const ServicesAdolescents = () => {
     return (
          <>
               <section className="services__adolescents">
                    <h2 className="services__adolescents-h2">
                         Adolescents + Young Adult Counseling
                    </h2>
                    <div className="services__adolescents-body">
                         <div className="services__adolescents-paragraph">
                              Adolescent therapy provides teens with a safe space for self-exploration, regulating emotions, and navigating changes.
                         </div>
                         <div className="services__adolescents-paragraph-learn">
                              Learn More🔻
                         </div>
                         <div className="services__adolescents-paragraph-dropdown">
                              Adolescent therapy provides teens with a safe space for self-exploration, regulating emotions, and navigating changes. (add more info)
                         </div>
                    </div>
               </section>
          </>
     )
}

export const ServicesAdolescentsSpacing = () => {
     return (
          <>
               <div className='header__spacer' />
               <ServicesAdolescents />
          </>
     )
}