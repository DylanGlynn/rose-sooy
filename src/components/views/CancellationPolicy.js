export const CancellationPolicy = () => {
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
                         Cancelation + No Show + Reschedule Policy
                    </h2>
                    <div className="policies__body">
                         <div className="policies__paragraph">
                              Life happens, and sometimes you have to cancel appointments unexpectedly. With more than 24 hours notice, we are happy to cancel or reschedule your session without charge.
                         </div>
                         <div className="policies__paragraph">
                              If you are unable to provide a 24 hour notice of your cancellation, you will be charged the full session fee. This is also the case for any missed appointments (no-show). Late cancellation and no show fee will be charged to the payment method saved on your Simple Practice account. Note that insurance companies do not reimburse for missed or late cancellation sessions.
                         </div>
                         <div className="policies__paragraph">
                              While your timely attendance to your therapy sessions are an important way to prioritize your own mental health, we do provide a 10 minute grace window before considering your session a no-show.
                         </div>

                    </div>
               </section>
          </>
     )
}