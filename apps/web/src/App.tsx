import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import Faq from "./pages/Faq";
import Help from "./pages/Help";
import Status from "./pages/Status";
import CustomerLanding from "./pages/customer/Landing";
import CustomerHowItWorks from "./pages/customer/HowItWorks";
import CustomerFeatures from "./pages/customer/Features";
import CustomerPricing from "./pages/customer/Pricing";
import CustomerUseCases from "./pages/customer/UseCases";
import PartnerLanding from "./pages/partner/Landing";
import PartnerHowItWorks from "./pages/partner/HowItWorks";
import PartnerFeatures from "./pages/partner/Features";
import PartnerPricing from "./pages/partner/Pricing";
import PartnerUseCases from "./pages/partner/UseCases";
import WhyPartner from "./pages/partner/WhyPartner";
import Demo from "./pages/partner/Demo";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Cookies from "./pages/legal/Cookies";
import DataRights from "./pages/legal/DataRights";
import AcceptableUse from "./pages/legal/AcceptableUse";
import Dpa from "./pages/legal/Dpa";
import Accessibility from "./pages/legal/Accessibility";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Global */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="security" element={<Security />} />
        <Route path="faq" element={<Faq />} />
        <Route path="help" element={<Help />} />
        <Route path="status" element={<Status />} />

        {/* Customer */}
        <Route path="customer" element={<CustomerLanding />} />
        <Route path="customer/how-it-works" element={<CustomerHowItWorks />} />
        <Route path="customer/features" element={<CustomerFeatures />} />
        <Route path="customer/pricing" element={<CustomerPricing />} />
        <Route path="customer/use-cases" element={<CustomerUseCases />} />

        {/* Partner */}
        <Route path="partner" element={<PartnerLanding />} />
        <Route path="partner/how-it-works" element={<PartnerHowItWorks />} />
        <Route path="partner/features" element={<PartnerFeatures />} />
        <Route path="partner/pricing" element={<PartnerPricing />} />
        <Route path="partner/use-cases" element={<PartnerUseCases />} />
        <Route path="partner/why-partner" element={<WhyPartner />} />
        <Route path="partner/demo" element={<Demo />} />

        {/* Legal */}
        <Route path="legal/terms" element={<Terms />} />
        <Route path="legal/privacy" element={<Privacy />} />
        <Route path="legal/cookies" element={<Cookies />} />
        <Route path="legal/data-rights" element={<DataRights />} />
        <Route path="legal/acceptable-use" element={<AcceptableUse />} />
        <Route path="legal/dpa" element={<Dpa />} />
        <Route path="legal/accessibility" element={<Accessibility />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
