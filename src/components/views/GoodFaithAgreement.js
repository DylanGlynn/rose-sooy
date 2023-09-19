import { Link } from "react-router-dom"
import { WebsiteAddress } from "../../Rose+Sooy"

export const GoodFaithAgreement = () => {
     return (
          <>
               {
                    window.location.href == WebsiteAddress
                         ? ""
                         : <div className='header__spacer' />
               }
               <section className="good-faith">
                    <article className="good-faith_heading">
                         <h2 className="good-faith__h2">
                              Good Faith Estimate
                         </h2>
                    </article>
                    <div className="good-faith__body">
                         <p>You have the right to receive a “Good Faith Estimate” explaining how much your medical care will cost.</p>
                         <p>Under the law, health care providers need to give patients who donʼt have insurance or who are not using insurance an estimate of the bill for medical items and services.</p>
                         <p>You have the right to receive a Good Faith Estimate for the total expected cost of any nonemergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.</p>
                         <p>Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your healthcare provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.</p>
                         <p>If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</p>
                         <p>Make sure to save a copy or picture of your Good Faith Estimate. For questions or more information about your right to a Good Faith Estimate, visit <Link to={"http://www.cms.gov/nosurprises"} target="new">www.cms.gov/nosurprises</Link> or call 615-988-4763.</p>
                    </div>

               </section>
          </>
     )
}