import { ConnectButton, LearnMoreSpecialties } from "./ConnectButton"
import SpecialtiesImg from "../../img/ServicesImgs/SpecialtyAreas.png"
import SpecialtiesBodyPositivityImg from "../../img/SpecialtiesImgs/BodyPositivity.png"
import SpecialtiesOCDImg from "../../img/SpecialtiesImgs/OCD.png"
import SpecialtiesLGBTQIAImg from "../../img/SpecialtiesImgs/LGBTQIA+.png"
import SpecialtiesNeurodivergentImg from "../../img/SpecialtiesImgs/Neurodivergent.png"
import SpecialtiesTraumaImg from "../../img/SpecialtiesImgs/TraumaProcessing.png"
import { QuoteServices04 } from "./Quotes"

export const SpecialtyAreas = () => {
     return (
          <>
               <section className="services__half">
                    <article className="services__details-half">
                         <div className="services__pic-half">
                              <img className="services__photo-half" src={SpecialtiesImg} alt="Specialty Areas" />
                         </div>
                         <div className="services__half-header">
                              <div className="services__h2-half">
                                   Specialty Areas
                              </div>
                              <p className="services__half-paragraph">
                                   Specialty areas of our work includes trauma processing, body positivity, obsessive-compulsive disorders, and affirming care for LGBTQIA+ and neurodiversity.
                              </p>
                         </div>
                    </article>
                    <LearnMoreSpecialties />
               </section>
          </>
     )
}

export const SpecialtyAreasFull = () => {
     return (
          <>
               <div className='header__spacer' />
               <section className="services">
                    <div className="specialties__h2">
                         Specialty Areas
                    </div>
                    <article className="specialties__list">
                         <SpecialtyAreaTrauma />
                         <SpecialtyAreaBodyPositivity />
                         <SpecialtyAreaOCD />
                         <SpecialtyAreaLGBTQIA />
                         <SpecialtyAreaNeurodivergent />
                    </article>
                    <ConnectButton />
               </section>
               <QuoteServices04 />
          </>
     )
}

export const SpecialtyAreaTrauma = () => {
     var acc = document.getElementsByClassName("specialty__sublist-heading");
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
               <section className="specialty" id="trauma_processing">
                    <div className="specialty__pic">
                         <img className="specialty__photo" src={SpecialtiesTraumaImg} alt="Specialty Trauma Processing" />
                    </div>
                    <div className="specialty__h4">
                         Trauma Processing
                    </div>
                    <div className="specialty__description">
                         <div className="specialty__paragraph">
                              Trauma processing involves unpacking trauma experiences, learning to regulate emotions, and reconnecting with a more positive sense of oneself. At Rose + Sooy Counseling, we incorporate the following treatment methods for trauma processing: EMDR, IFS, and Somatic therapy. Trauma processing treatment is offered during regularly scheduled sessions, as supplemental sessions, or for extended session intensives.
                         </div>
                         <article className="specialty__sublist">
                              <div className="specialty__sublist-item">
                                   <div className="specialty__sublist-heading" onClick={AccordionState}>
                                        EMDR (Eye Movement Desensitization and Reprocessing)
                                   </div>
                                   <div className="specialty__sublist-description">
                                        EMDR is a type of therapy used to treat distress and emotional dysregulation caused by traumatic experiences. EMDR uses bilateral movement (such as eye movements) to heal from painful or distressing memories. When we fully heal from trauma, we are able to recall the memories without experiencing overwhelming emotional or physical responses. EMDR is extensively researched and proven to be an effective treatment for PTSD.
                                   </div>
                              </div>
                              <div className="specialty__sublist-item">
                                   <div className="specialty__sublist-heading" onClick={AccordionState}>
                                        IFS (Internal Family Systems)
                                   </div>
                                   <div className="specialty__sublist-description">
                                        IFS, aka Parts Work, is a type of therapy used to identify your inner child, inner critic, and true self. Understanding the individual (and at times conflicting) needs of these parts brings a sense of balance, harmony, and wholeness. IFS is an effective treatment for a variety of experiences such as family of origin trauma, relationship issues, anxiety, compulsive behavior, and attachment injuries. IFS can be integrated with EMDR treatment.
                                   </div>
                              </div>
                              <div className="specialty__sublist-item">
                                   <div className="specialty__sublist-heading" onClick={AccordionState}>
                                        Somatic Therapy
                                   </div>
                                   <div className="specialty__sublist-description">
                                        Somatic therapy is used to strengthen the connection between your body and mind. Emotional pain and stress is stored in your body leading to muscle tension, difficulty sleeping, and overall wear/exhaustion. Somatic therapy seeks to release these emotions by increasing awareness of body sensations and recalling resources that promote feelings of calm and safety. Using somatic therapy, clients learn to better listen to their body and find partnership with their body as an ally in their healing journey.
                                   </div>
                              </div>
                         </article>
                    </div>
               </section>
          </>
     )
}

export const SpecialtyAreaBodyPositivity = () => {
     /* var acc = document.getElementsByClassName("specialty__sublist-heading");
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
     } */

     return (
          <>
               <section className="specialty" id="body-positivity">
                    <div className="specialty__pic">
                         <img className="specialty__photo" src={SpecialtiesBodyPositivityImg} alt="Specialty Body Positivity" />
                    </div>
                    <div className="specialty__h4">
                         Body Positivity
                    </div>
                    <div className="specialty__description">
                         <div className="specialty__paragraph">
                              At Rose and Sooy Counseling, we care about your emotional, physical, social, spiritual, and economic needs. We work within the Healthy at Every Size model (HAES), emphasizing that one’s health is not determined by their body shape or size. Holistic health includes intuitive eating, enjoyable body movement, and respect for the diversity of body shapes and sizes. We provide support for clients wanting to improve the relationship they have with their body by strengthening emotional awareness, improving emotional tolerance, creating more sustainable patterns, and increasing body neutral self-talk.  We welcome all body shapes and sizes.
                         </div>
                         {/* <article className="specialty__sublist">
                              <div className="specialty__sublist-heading" onClick={AccordionState}>
                                   SubTitle
                              </div>
                              <div className="specialty__sublist-description">
                                   SubDescription
                              </div>
                         </article> */}
                    </div>
               </section>
          </>
     )
}

export const SpecialtyAreaOCD = () => {
     /* var acc = document.getElementsByClassName("specialty__sublist-heading");
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
     } */

     return (
          <>
               <section className="specialty" id="OCD">
                    <div className="specialty__pic">
                         <img className="specialty__photo" src={SpecialtiesOCDImg} alt="Specialty Title" />
                    </div>
                    <div className="specialty__h4">
                         Obsessive-Compulsive Disorder (OCD)
                    </div>
                    <div className="specialty__description">
                         <div className="specialty__paragraph">
                              Obsessions and compulsions can feel overwhelming, all consuming, and impact your daily routine and overall functioning. At Rose and Sooy Counseling, we understand the importance of not only addressing the symptoms of OCD, but also the underlying causes. We utilize Cognitive Behavioral Therapy (CBT) and Exposure and Response Prevention Therapy (ERP) to equip you with the skills to manage your OCD symptoms and find freedom from the cycle of obsessions and compulsions.
                         </div>
                         {/*
                         <article className="specialty__sublist">
                              <div className="specialty__sublist-heading" onClick={AccordionState}>
                                   SubTitle
                              </div>
                              <div className="specialty__sublist-description">
                                   SubDescription
                              </div>
                         </article>
                         */}
                    </div>
               </section>
          </>
     )
}

export const SpecialtyAreaLGBTQIA = () => {
     /* var acc = document.getElementsByClassName("specialty__sublist-heading");
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
     } */

     return (
          <>
               <section className="specialty">
                    <div className="specialty__pic">
                         <img className="specialty__photo" src={SpecialtiesLGBTQIAImg} alt="Specialty LGBTQIA+ Affirming Care" />
                    </div>
                    <div className="specialty__h4">
                         LGBTQIA+ Affirming Care
                    </div>
                    <div className="specialty__description">
                         <div className="specialty__paragraph">
                              At Rose and Sooy Counseling, we provide a safe and inclusive space for LGBTQIA+ folk and allies. It is our privilege to support you through life stressors, identity and sexual exploration, processing discrimination or rejection, and navigating relationships. We provide clients with gender affirming healthcare assessments and letters. We welcome all parts of you, and are honored to celebrate your resilience and growth as you reconnect with your true authentic self.
                         </div>
                         {/*
                         <article className="specialty__sublist">
                              <div className="specialty__sublist-heading" onClick={AccordionState}>
                                   SubTitle
                              </div>
                              <div className="specialty__sublist-description">
                                   SubDescription
                              </div>
                         </article>
                         */}
                    </div>
               </section>
          </>
     )
}

export const SpecialtyAreaNeurodivergent = () => {
     /* var acc = document.getElementsByClassName("specialty__sublist-heading");
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
     } */

     return (
          <>
               <section className="specialty" id="neurodivergence">
                    <div className="specialty__pic">
                         <img className="specialty__photo" src={SpecialtiesNeurodivergentImg} alt="Specialty Title" />
                    </div>
                    <div className="specialty__h4">
                         Neurodivergent Affirming Care
                    </div>
                    <div className="specialty__description">
                         <div className="specialty__paragraph">
                              Neurodiveristy is an umbrella term used to describe the different ways that people’s brains work. Everyone’s brain is unique in its functioning and no two brains are exactly alike. Being neurodivergent means having a brain that functions differently from the average or “neurotypical” person. While being neurodivergent is not a bad thing, it can cause major issues and difficulty in our lives. By providing neurodivergent-affirming care we provide support to foster your strengths, and process the unique obstacles of navigating a world that caters to neurotypical folks. It can often feel like everyone else has a guide book for how to socialize and interact that you’ve never known about. Being different is not only a strength, but a gift to the world. Therapy can help you learn how to better communicate with yourself and others while honoring and celebrating your differences. We value the importance of neurodiverse folks and your unique perspectives on the world.
                         </div>
                         {/* 
                         <article className="specialty__sublist">
                              <div className="specialty__sublist-heading" onClick={AccordionState}>
                                   SubTitle
                              </div>
                              <div className="specialty__sublist-description">
                                   SubDescription
                              </div>
                         </article>
                          */}
                    </div>
               </section>
          </>
     )
}