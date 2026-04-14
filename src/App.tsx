/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Team from './pages/Team';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import DigitalMarketing from './pages/DigitalMarketing';
import MobileDevelopment from './pages/MobileDevelopment';
import VirtualAssistance from './pages/VirtualAssistance';
import SalesFunnel from './pages/SalesFunnel';
import WebDevelopment from './pages/WebDevelopment';
import SEO from './pages/SEO';
import UIUXDesign from './pages/UIUXDesign';
import GraphicDesign from './pages/GraphicDesign';
import SoftwareQA from './pages/SoftwareQA';
import LeadGeneration from './pages/LeadGeneration';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="team" element={<Team />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers/:id" element={<CareerDetail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="mobile-development" element={<MobileDevelopment />} />
          <Route path="virtual-assistance" element={<VirtualAssistance />} />
          <Route path="sales-funnel" element={<SalesFunnel />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="seo" element={<SEO />} />
          <Route path="ui-ux-design" element={<UIUXDesign />} />
          <Route path="graphic-design" element={<GraphicDesign />} />
          <Route path="software-qa" element={<SoftwareQA />} />
          <Route path="lead-generation" element={<LeadGeneration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
