import ServicesPhoto from "../../img/NatureImgs/IMG_9523.JPG"
import { Quote01 } from "./Quotes"

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
     var acc = document.getElementsByClassName("services__individuals-accordion");
     var i;

     let AccordionState = () => {
          for (i = 0; i < acc.length; i++) {
               acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                         panel.style.maxHeight = null;
                    } else {
                         panel.style.maxHeight = panel.scrollHeight + "px";
                    }
               });
          }
     }

     return (
          <>
               <section className="services__individuals">
                    <h2 className="services__individuals-h2">
                         Individual Adult Counseling
                    </h2>
                    <div className="services__individuals-body">
                         <div className="services__individuals-accordion" onClick={AccordionState}>
                              Individual Therapy is a collaborative and relational process of discovering a deeper understanding of oneself. Your therapist with Rose and Sooy will not only provide you with support for navigating life’s stressors, but will help you create a compass towards a life guided by your values.
                         </div>
                         <div className="services__individuals-accordion-panel">
                              <p>
                                   Individual Therapy is a collaborative and relational process of discovering a deeper understanding of oneself. Your therapist with Rose and Sooy will not only provide you with support for navigating life’s stressors, but will help you create a compass towards a life guided by your values. Self-discovery, self-help and self-talk can be great tools but can only go so far. Therapy can provide a more objective perspective from a kind, caring expert on psychology (that’s us!) to help you make sense of your subjective experience of reality.
                              </p>
                              <p>
                                   We believe the outcome of therapy is most predicted by the relationship between the therapist and the client. We honor you as the expert on yourself; your truth, your desires and your goals. Individual therapy is a great place to explore yourself and refine your techniques for improving your life, reaching your goals and caring for yourself. This can help our clients build confidence to ask for what they need, from themselves and the world around them. Who couldn’t use a fresh perspective on how to be kind to yourself, resolve a conflict with a friend, or set a boundary with a family member? Individual therapy is like a dress rehearsal for life; you’re free to try out new techniques and see what works and what doesn’t, all from the comfort of a very low stakes therapy office. Or even from your own couch!
                              </p>
                              <p>
                                   At Rose and Sooy Counseling, we integrate a variety of evidence based practices to provide holistic care, catered to each individual. We offer a safe space for you to express and feel your emotions and reconnect with your mind and body. Each session is approached with curiosity, non-judgment and a trauma-informed lens. We utilize Acceptance and Commitment Therapy (ACT) to help you find acceptance for things outside of your control and take meaningful action on things you are capable of changing. We also employ a range of other evidence-based cognitive behavioral therapies such as Cognitive Behavioral Therapy (CBT) to discover how unhelpful thinking styles may be convincing you to stay in old patterns of behavior that may have been protective in the past but are no longer serving you.
                              </p>
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
                              Couples Counseling teaches relational skills and intentionally explores relationship issues; creating a deeper sense of connection and understanding. At Rose and Sooy Counseling, we believe connection is essential to our health and wellness. We facilitate a safe space for couples to explore their relationship issues with the intention to work towards creating a deeper sense of connection and understanding. During couple therapy sessions, partners will learn relationship skills that focus on acceptance of differences, empathy, conscious listening and safe communication. By doing so, you and your partner(s) will co-creating a deeper sense of connection and understanding about what makes your relationship work and what old habits and patterns of behavior need to be let go.
                         </div>
                         <div className="services__couples-paragraph-dropdown">
                              Conflicts are seen as opportunities for growth, rather than as threats to the relationship. In fact, we say that conflict is growth waiting to happen! We help facilitate a safe space for couples to explore their relationship issues with the intention and to work towards creating a deeper sense of connection and understanding. We  help couples learn that their partner is a mystery; experiencing a subjective reality very much unlike their own. Together from this understanding, By creating a roadmap to openness and curiosity where couples can begin to grow into the realization that they are a team. We hope this exploration will help lead our couples to discover that, in the words of Ram Dass, they’d, “rather be free and in love than be right.”
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
     var acc = document.getElementsByClassName("accordion");
     var i;

     /* for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
               this.classList.toggle("active");
               var panel = this.nextElementSibling;
               if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
               } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
               }
          });
     } */

     let AccordionState = () => {
          for (i = 0; i < acc.length; i++) {
               acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                         panel.style.maxHeight = null;
                    } else {
                         panel.style.maxHeight = panel.scrollHeight + "px";
                    }
               });
          }
     }

     return (
          < section >
               <h2>Animated Accordion</h2>
               <p>Click on the buttons to open the collapsible content.</p>

               <button className="accordion" onClick={AccordionState}>Section 1</button>
               <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </div>

               <button className="accordion" onClick={AccordionState}>Section 2</button>
               <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </div>

               <button className="accordion">Section 3</button>
               <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </div>
          </section >
     )
}

export const ServicesAdolescentsSpacing = () => {
     return (
          <>
               <div className='header__spacer' />
               <ServicesAdolescents />
               <Quote01 />
          </>
     )
}

{/* <>
               <section className="services__adolescents">
                    <h2 className="services__adolescents-h2">
                         Adolescent Therapy
                    </h2>
                    <div className="services__adolescents-body">
                         <div className="services__adolescents-paragraph">
                              Adolescent therapy provides teens with a safe space for self-exploration, an opportunity to learn new tools for understanding and regulating their emotions, and some help with navigating all the life changes, pressures, drama, excitement, heartache and more that come with the teen years.
                         </div>
                         <div className="services__adolescents-paragraph-dropdown">
                              Adolescent therapy provides teens with a safe space for self-exploration, an opportunity to learn new tools for understanding and regulating their emotions, and some help with navigating all the life changes, pressures, drama, excitement, heartache and more that come with the teen years.
                         </div>
                         <div className="services__adolescents-paragraph-dropdown">
                              Being a teenager can be so hard! Our lives are typically changing at a rapid pace, there are so many choices and decisions to navigate, and teens are under so much pressure to perform. Rose and Sooy counseling provides therapy to adolescents for a wide range of issues, including sports and performance psychology, body image issues, help with learning how to interpret and express how we’re feeling, to how to handle bullying, get extra help with subjects teens might be struggling with in school, to sexuality. 
                         </div>
                    </div>
               </section>
          </> */}