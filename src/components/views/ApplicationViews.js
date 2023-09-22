import { About } from "./About"
import { Connect } from "./Connect"
import { FAQ } from "./FAQ"
import { Home } from "./Home"
import { Route, Routes } from "react-router-dom"
import { PhoneConsult } from "./PhoneConsult"
import { Services } from "./Services"
import { ClientPortal } from "./ClientPortal"
import { FeesPolicies } from "./FeesPolicies"

export const ApplicationViews = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/services" element={<Services />} />
               <Route path="/faq" element={<FAQ />} />
               <Route path="/connect" element={<Connect />} />
               <Route path="/phone-consultation" element={<PhoneConsult />} />
               <Route path="/fees-and-policies" element={<FeesPolicies />} />
               <Route path="/client-portal" element={<ClientPortal />} />
          </Routes>
     )
}