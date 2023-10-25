import { About, AboutJodieRosenblumSpacing, AboutKaelieSooySpacing } from "./About"
import { Connect } from "./Connect"
import { FAQ } from "./FAQ"
import { FeesPolicies } from "./FeesPolicies"
import { Home } from "./Home"
import { Route, Routes } from "react-router-dom"
import { PhoneConsult } from "./PhoneConsult"
import { Services, ServicesAdolescentsFull, ServicesCouplesMarriageFull, ServicesIndividualAdultsFull } from "./Services"
import { SpecialtyAreas, SpecialtyAreasFull } from "./Specialties"
import { LocationOptions, LocationOptionsSpacing } from "./LocationOptions"

export const ApplicationViews = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/about/jodie-rosenblum" element={<AboutJodieRosenblumSpacing />} />
               <Route path="/about/kaelie-sooy" element={<AboutKaelieSooySpacing />} />
               <Route path="/connect" element={<Connect />} />
               <Route path="/faq" element={<FAQ />} />
               <Route path="/fees-and-policies" element={<FeesPolicies />} />
               <Route path="/location-options" element={<LocationOptionsSpacing />} />
               <Route path="/phone-consultation" element={<PhoneConsult />} />
               <Route path="/services" element={<Services />} />
               <Route path="/services/individuals" element={<ServicesIndividualAdultsFull />} />
               <Route path="/services/couples" element={<ServicesCouplesMarriageFull />} />
               <Route path="/services/adolescents" element={<ServicesAdolescentsFull />} />
               <Route path="/specialty-areas" element={<SpecialtyAreasFull />} />
          </Routes>
     )
}