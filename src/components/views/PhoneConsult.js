import { WebsiteAddress } from "../../Rose+Sooy"

export const PhoneConsult = () => {
     return (
          <>
               {
                    window.location.href == WebsiteAddress
                         ? ""
                         : <div className='header__spacer' />
               }
               <section className="phone-form">
                    <h3 className="faq__header">Phone Consultation.</h3>
                    Coming Soon.
               </section>
          </>
     )
}