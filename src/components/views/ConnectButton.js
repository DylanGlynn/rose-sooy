import { Link } from "react-router-dom"

export const ConnectButton = () => {
     return (
          <article className="button">
               <div className="connect__button-general">
                    <Link className="connect__button" to={"mailto:support@roseandsooy.com"}>CONNECT</Link>
               </div>
          </article >
     )
}

export const ConnectButtonJodie = () => {
     return (
          <article className="button">
               <div className="connect__button-jodie">
                    <Link className="connect__button" to={"mailto:support@roseandsooy.com?subject=Initial%20Contact%20for%20Jodie%20Rosenblum"}>CONNECT</Link>
               </div>
          </article>
     )
}

export const ConnectButtonKaelie = () => {
     return (
          <article className="button">
               <div className="connect__button-kaelie">
                    <Link className="connect__button" to={"mailto:support@roseandsooy.com?subject=Initial%20Contact%20for%20Kaelie%20Sooy"}>CONNECT</Link>
               </div>
          </article>
     )
}

export const LearnMoreAdolescents = () => {
     return (
          <article className="button">
               <div className="button__learn">
                    <Link to="/services/adolescents/" ><button className="learn__button">LEARN MORE</button></Link>
               </div>
          </article>
     )
}

export const LearnMoreCouples = () => {
     return (
          <article className="button">
               <div className="button__learn">
                    <Link to="/services/couples/" ><button className="learn__button">LEARN MORE</button></Link>
               </div>
          </article>
     )
}

export const LearnMoreIndividuals = () => {
     return (
          <article className="button">
               <div className="button__learn">
                    <Link to="/services/individuals/" ><button className="learn__button">LEARN MORE</button></Link>
               </div>
          </article>
     )
}

export const LearnMoreSpecialties = () => {
     return (
          <article className="button">
               <div className="button__learn">
                    <Link to="/specialty-areas" ><button className="learn__button">LEARN MORE</button></Link>
               </div>
          </article>
     )
}