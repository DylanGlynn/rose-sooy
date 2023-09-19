import { WebsiteAddress } from "../../Rose+Sooy"

export const Connect = () => {
     return (
          <>
               {
                    window.location.href == WebsiteAddress
                         ? "" 
                         : <div className='header__spacer' />
               }
               <section className="connect">
                    <div className="connect__heading">
                         <h2 className="connect__h2">
                              Client Portal
                         </h2>
                    </div>
                    <div className="connect__body">
                         Coming soon.
                    </div>
               </section>
          </>
     )
}