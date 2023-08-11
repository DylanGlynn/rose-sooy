export const Services = () => {
     return (
          <section className="services">
               <div className="services__heading">
                    <h2 className="services__h2">
                         Services Offered.
                    </h2>
               </div>
               <div className="services__body">
                    <div className="services__h4">
                         Counseling Provided for:
                    </div>
                    <ul className="services__list">
                         <li className="services__list-item">
                              Individual Adults
                         </li>
                         {/* 
                         <li className="services__list-item">
                              Couples + Marriage (Add after Jodie joins)
                         </li>
                         <li className="services__list-item">
                              Adolescents + Young Adults (Add after Jodie joins)
                         </li>
                         */}
                    </ul>
                    <div className="services__h4">
                         Location Options:
                    </div>
                    <ul className="services__list">
                         <li className="services__list-item">
                              <span className="services__emphasis-underline">Telehealth</span>: Meet virtually on a HIPPA safe platform from your home using your laptop or smartphone. At Rose and Sooy Counseling, we utilize Simple Practice for virtual therapy sessions.
                         </li>
                         {/*
                         <li className="services__list-item">
                              <span className="services__emphasis-underline">In Office</span>: Therapy sessions are held in person at our office location: (office address). (Add after office found)
                         </li>
                         */}
                         <li className="services__list-item">
                              <span className="services__emphasis-underline">Walk + Talk</span>: Walking therapy involves taking our session outdoors to the local Nashville Greenway. The movement is easy-going and designed to facilitate the psychotherapy process.
                         </li>
                    </ul>
                    <div className="services__h4">
                         Session Fees:
                    </div>
                    <div className="services__session-paragraph">
                         At Rose and Sooy Counseling, we have chosen to not be in-network with any insurance providers. We accept all major credit, debit, and HSA/FSA cards through your client portal in Simple Practice. Fees are based upon services provided. Please contact us for further information regarding pricing.
                    </div>
                    <div className="services__session-paragraph">
                         We are happy to provide you with a super bill for possible “out-of-network” reimbursement. Please be aware that in order for your insurance company to consider your claim for reimbursement, they require a mental health diagnosis from the DSM-5 which could then become part of your permanent medical record.
                    </div>
               </div>
          </section>
     )
}