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