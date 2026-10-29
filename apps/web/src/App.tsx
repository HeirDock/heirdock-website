import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import Faq from "./pages/Faq";
import CustomerFeatures from "./pages/customer/Features";
import CustomerPricing from "./pages/customer/Pricing";
import CustomerUseCases from "./pages/customer/UseCases";
import PartnerLanding from "./pages/partner/Landing";
import PartnerFeatures from "./pages/partner/Features";
import PartnerPricing from "./pages/partner/Pricing";
import Demo from "./pages/partner/Demo";
import RequestAccess from "./pages/partner/RequestAccess";
import LegalHub from "./pages/legal/LegalHub";
import LegalDocumentPage from "./pages/legal/LegalDocumentPage";
import LegalInAppPage from "./pages/legal/LegalInAppPage";
import { legalDocuments } from "./content/legal";
import Invite from "./pages/Invite";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Global */}
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="security" element={<Security />} />
        <Route path="faq" element={<Faq />} />
        <Route path="invite" element={<Invite />} />

        {/* Customer */}
        <Route path="customer/features" element={<CustomerFeatures />} />
        <Route path="customer/pricing" element={<CustomerPricing />} />
        <Route path="customer/use-cases" element={<CustomerUseCases />} />

        {/* Partner */}
        <Route path="professional" element={<PartnerLanding />} />
        <Route path="professional/features" element={<PartnerFeatures />} />
        <Route path="professional/pricing" element={<PartnerPricing />} />
        <Route path="professional/demo" element={<Demo />} />
        <Route path="professional/request-access" element={<RequestAccess />} />

        {/* Legal */}
        <Route path="legal" element={<LegalHub />} />
        {legalDocuments.map((doc) => (
          <Route key={doc.slug} path={`legal/${doc.slug}`} element={<LegalDocumentPage doc={doc} />} />
        ))}

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Legal documents for the HeirDock app's in-app browser: no site layout */}
      {legalDocuments.map((doc) => (
        <Route key={doc.slug} path={`legal/${doc.slug}/in-app`} element={<LegalInAppPage doc={doc} />} />
      ))}
    </Routes>
  );
}
