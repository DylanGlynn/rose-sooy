import { Link } from "react-router-dom"

export const GoodFaithAgreement = () => {
     var acc = document.getElementsByClassName("policies__header");
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
               <section className="policies">
                    <h2 className="policies__header" onClick={AccordionState}>
                         Good Faith Estimate
                    </h2>
                    <div className="policies__body">
                         <div className="policies__paragraph">
                              You have the right to receive a “Good Faith Estimate” explaining how much your medical care will cost.
                         </div>
                         <div className="policies__paragraph">
                              Under the law, health care providers need to give patients who donʼt have insurance or who are not using insurance an estimate of the bill for medical items and services.
                         </div>
                         <div className="policies__paragraph">
                              You have the right to receive a Good Faith Estimate for the total expected cost of any nonemergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.
                         </div>
                         <div className="policies__paragraph">
                              Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your healthcare provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.
                         </div>
                         <div className="policies__paragraph">
                              If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.
                         </div>
                         <div className="policies__paragraph">
                              Make sure to save a copy or picture of your Good Faith Estimate. For questions or more information about your right to a Good Faith Estimate, visit <Link to={"http://www.cms.gov/nosurprises"} target="new">www.cms.gov/nosurprises</Link> or call 615-988-4763.
                         </div>
                    </div>

               </section>
          </>
     )
}