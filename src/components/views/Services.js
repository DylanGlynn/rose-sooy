import ServicesPhoto from "../../img/NatureImgs/IMG_9523.JPG"
import { Quote01, QuoteServices01, QuoteServices03 } from "./Quotes"
import AdolescentTherapyImg from "../../img/ServicesImgs/AdolescentTherapy.png"
import IndividualTherapyImg from "../../img/ServicesImgs/IndividualTherapy.png"
import { ConnectButton, LearnMore, LearnMoreAdolescents, LearnMoreIndividuals } from "./ConnectButton"

export const ServicesForHome = () => {
     return (
          <section className="home__services">
               <div className="home__services-h2">
                    Services
               </div>
               <article className="home__services-list">
                    <ServicesIndividualAdults />
                    <ServicesAdolescents />
                    <ServicesAdolescents />
                    <ServicesAdolescents />
               </article>
          </section>
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
     return (
          <>
               <section className="services__half">
                    <article className="services__details-half">
                         <div className="services__pic-half">
                              <img className="services__photo-half" src={IndividualTherapyImg} alt="Adolescent Therapy" />
                         </div>
                         <div className="services__half-header">
                              <div className="services__h2-half">
                                   Individual Therapy
                              </div>
                              <p className="services__half-paragraph" />Individual Therapy is a collaborative and relational process of discovering a deeper understanding of oneself. Your therapist with Rose and Sooy will not only provide you with support for navigating life’s stressors, but will help you create a compass towards a life guided by your values.  
                         </div>
                    </article>
                    <LearnMoreIndividuals />
               </section>
          </>
     )
}

export const ServicesIndividualAdultsFull = () => {
     return (
          <>
               <div className='header__spacer' />
               <section className="services">
                    <div className="services__h2">
                         Individual Therapy
                    </div>
                    <article className="services__details">
                         <div className="services__full">
                              <p className="services__full-paragraph" />Individual Therapy is a collaborative and relational process of discovering a deeper understanding of oneself. Your therapist with Rose and Sooy will not only provide you with support for navigating life’s stressors, but will help you create a compass towards a life guided by your values. Self-discovery, self-help and self-talk can be great tools but can only go so far. Therapy can provide a more objective perspective from a kind, caring expert on psychology (that’s us!) to help you make sense of your subjective experience of reality.
                              <p className="services__full-paragraph" />We believe the outcome of therapy is most predicted by the relationship between the therapist and the client. We honor you as the expert on yourself; your truth, your desires and your goals. Individual therapy is a great place to explore yourself and refine your techniques for improving your life, reaching your goals and caring for yourself. This can help our clients build confidence to ask for what they need, from themselves and the world around them. Who couldn’t use a fresh perspective on how to be kind to yourself, resolve a conflict with a friend, or set a boundary with a family member? Individual therapy is like a dress rehearsal for life; you’re free to try out new techniques and see what works and what doesn’t, all from the comfort of a very low stakes therapy office. Or even from your own couch!
                              <p className="services__full-paragraph" />At Rose + Sooy Counseling, we integrate a variety of evidence based practices to provide holistic care, catered to each individual. We offer a safe space for you to express and feel your emotions and reconnect with your mind and body. Each session is approached with curiosity, non-judgment and a trauma-informed lens. We utilize Acceptance and Commitment Therapy (ACT) to help you find acceptance for things outside of your control and take meaningful action on things you are capable of changing. We also employ a range of other evidence-based cognitive behavioral therapies such as Cognitive Behavioral Therapy (CBT) to discover how unhelpful thinking styles may be convincing you to stay in old patterns of behavior that may have been protective in the past but are no longer serving you.
                         </div>
                         <div className="services__pic">
                              <img className="services__photo-full" src={IndividualTherapyImg} alt="Adolescent Therapy" />
                         </div>
                    </article>
                    <ConnectButton />
               </section>
               <QuoteServices01 />
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
     return (
          <>
               <section className="services__half">
                    <article className="services__details-half">
                         <div className="services__pic-half">
                              <img className="services__photo-half" src={AdolescentTherapyImg} alt="Adolescent Therapy" />
                         </div>
                         <div className="services__half-header">
                              <div className="services__h2-half">
                                   Adolescent Therapy
                              </div>
                              <p className="services__half-paragraph" />Adolescent therapy provides teens with a safe space for self-exploration, an opportunity to learn new tools for understanding and regulating their emotions, and some help with navigating all the life changes, pressures, drama, excitement, heartache and more that come with the teen years.
                         </div>
                    </article>
                    <LearnMoreAdolescents />
               </section>
          </>
     )
}

export const ServicesAdolescentsFull = () => {
     return (
          <>
               <div className='header__spacer' />
               <section className="services">
                    <div className="services__h2">
                         Adolescent Therapy
                    </div>
                    <article className="services__details">
                         <div className="services__full">
                              <p className="services__full-paragraph" />Adolescent therapy provides teens with a safe space for self-exploration, an opportunity to learn new tools for understanding and regulating their emotions, and some help with navigating all the life changes, pressures, drama, excitement, heartache and more that come with the teen years.
                              <p className="services__full-paragraph" />Being a teenager can be so hard! Our lives are typically changing at a rapid pace, there are so many choices and decisions to navigate, and teens are under so much pressure to perform. Rose and Sooy counseling provides therapy to adolescents for a wide range of issues, including sports and performance psychology, body image issues, help with learning how to interpret and express how we’re feeling, to how to handle bullying, get extra help with subjects teens might be struggling with in school, to sexuality.
                         </div>
                         <div className="services__pic">
                              <img className="services__photo-full" src={AdolescentTherapyImg} alt="Adolescent Therapy" />
                         </div>
                    </article>
                    <ConnectButton />
               </section>
               <QuoteServices03 />
          </>
     )
}