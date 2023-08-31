import { About } from "./About"
import { Connect } from "./Connect"
import { FAQ } from "./FAQ"
import { GoodFaithAgreement } from "./GoodFaithAgreement"
import { Home } from "./Home"
import { Route, Routes } from "react-router-dom"
import { PhoneConsult } from "./PhoneConsult"
import { PrivacyPolicy } from "./PrivacyPolicy"
import { Services } from "./Services"
import { ClientPortal } from "./ClientPortal"

export const ApplicationViews = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/services" element={<Services />} />
               <Route path="/faq" element={<FAQ />} />
               <Route path="/connect" element={<Connect />} />
               <Route path="/phone-consultation" element={<PhoneConsult />} />
               <Route path="/good-faith-estimate" element={<GoodFaithAgreement />} />
               <Route path="/privacy-policy" element={<PrivacyPolicy />} />
               <Route path="/client-portal" element={<ClientPortal />} />
          </Routes>
     )
}