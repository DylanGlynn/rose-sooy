import { Link } from "react-router-dom"

export const ConnectButton = () => {
     return (
          <article className="button">
               <div className="connect__button-general">
                    <button className="connect__button" onClick={""}>CONNECT</button>
               </div>
          </article >
     )
}

export const ConnectButtonJodie = () => {
     return (
          <article className="button">
               <div className="connect__button-jodie">
                    <button className="connect__button" onClick={""}>CONNECT</button>
               </div>
          </article>
     )
}

export const ConnectButtonKaelie = () => {
     return (
          <article className="button">
               <div className="connect__button-kaelie">
                    <button className="connect__button" onClick={""}>CONNECT</button>
               </div>
          </article>
     )
}

export const LearnMoreAdolescents = () => {
     return (
          <article className="button">
               <div className="button__learn">
                    <Link to="/services/adolescents" ><button className="learn__button">LEARN MORE</button></Link>
               </div>
          </article>
     )
}

export const LearnMoreCouples = () => {
     return (
          <article className="button">
               <div className="button__learn">
                    <Link to="/services/couples" ><button className="learn__button">LEARN MORE</button></Link>
               </div>
          </article>
     )
}

export const LearnMoreIndividuals = () => {
     return (
          <article className="button">
               <div className="button__learn">
                    <Link to="/services/individuals" ><button className="learn__button">LEARN MORE</button></Link>
               </div>
          </article>
     )
}

export const LearnMoreSpecialties = () => {
     return (
          <article className="button">
               <div className="button__learn">
                    <Link to="/services/specialty-areas" ><button className="learn__button">LEARN MORE</button></Link>
               </div>
          </article>
     )
}