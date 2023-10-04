import { GoodFaithAgreement } from "./GoodFaithAgreement"
import { CancellationPolicy } from "./CancellationPolicy"
import { PrivacyPolicy } from "./PrivacyPolicy"
import { SessionFees } from "./SessionFees"

export const FeesPolicies = () => {
     return (
          <>
               <div className="header__spacer"></div>
               <SessionFees />
               <CancellationPolicy />
               <GoodFaithAgreement />
               <PrivacyPolicy />
          </>
     )
}