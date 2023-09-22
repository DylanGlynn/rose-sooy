import { GoodFaithAgreement } from "./GoodFaithAgreement"
import { CancellationPolicy } from "./CancellationPolicy"
import { PrivacyPolicy } from "./PrivacyPolicy"

export const FeesPolicies = () => {
     return (
          <>
               <div className="header__spacer"></div>
               <CancellationPolicy />
               <GoodFaithAgreement />
               <PrivacyPolicy />
          </>
     )
}