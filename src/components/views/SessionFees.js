export const SessionFees = () => {
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
                         Session Fees
                    </h2>
                    <div className="policies__body">
                         <div className="policies__paragraph">
                              At Rose + Sooy Counseling, we have chosen to not be in-network with any insurance providers. We accept all major credit, debit, and HSA/FSA cards through your client portal in Simple Practice. Fees are based upon services provided. Please contact us for further information regarding pricing.
                         </div>
                         <div className="policies__paragraph">
                              We are happy to provide you with a super bill for possible “out-of-network” reimbursement. Please be aware that in order for your insurance company to consider your claim for reimbursement, they require a mental health diagnosis from the DSM-5 which could then become part of your permanent medical record.
                         </div>

                    </div>
               </section>
          </>
     )
}