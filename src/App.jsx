import React from "react";

import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contactus from './Pages/Contactus'
import Aboutus from './Pages/Aboutus'
import Education from './Pages/Education'
import Newsroom from './Pages/Newsroom'
import Resources from './Pages/Resources'
import HR from './Pages/HR'
import AccountingFinance from './Pages/AccountingFinance'
import CSA from './Pages/CSA'
import CTA from './Pages/CTA.jsx'
import News from './Pages/News.jsx'
import Travel from './Pages/Travel.jsx'
import Casestudy from './Pages/Casestudies.jsx/Casestudy.jsx'
import Solutions from './Pages/Solutions/Solutions.jsx'
import PricingCSA from './Pages/PricingCSA.jsx'
import SolutionsHR from "./Pages/SolutionsHR.jsx";
import SolutionsEducation from './Pages/SolutionsEducation.jsx'
import SolutionsFinance from './Pages/SolutionsFinance.jsx'
import SolutionsTravel from './Pages/SolutionsTravel.jsx'
import SolutionsHealth from './Pages/SolutionsHealth.jsx'
import SolutionsRealEstate from './Pages/SolutionsRealEstate.jsx'
import CaseStudyTravelAssistant from './Pages/Casestudies.jsx/CaseStudyTravelAssistant.jsx'
import CaseStudyCodibot from './Pages/Casestudies.jsx/CaseStudyCodibot.jsx'
import CaseStudyLearning from './Pages/Casestudies.jsx/CaseStudyLearning.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from "react";
import { useCallback } from "react";

function App() {

  return (
    <>
      <main className="font-libre-franklin">
        <Header />
        <Routes>
          <Route path={`/`} element={<Landing />} />
          <Route path={`/contact`} element={<Contactus />} />
          <Route path={`/about`} element={<Aboutus />} />
          <Route path={`/newsroom`} element={<Newsroom />} />
          <Route path={`/resources`} element={<Resources />} />
          <Route path={`/accountingfinance`} element={<AccountingFinance />} />
          <Route path={`/cta`} element={<CTA />} />
          <Route path={`/csa`} element={<CSA />} />
          <Route path={`/pricingcsa`} element={<PricingCSA />} />
          <Route path={`/news`} element={<News />} />
          <Route path={`/casestudy`} element={<Casestudy />} />
          <Route
            path={`/travel-assistant`}
            element={<CaseStudyTravelAssistant />}
          />
          <Route path={`/codibot-ai`} element={<CaseStudyCodibot />} />
          <Route path={`/students-learning`} element={<CaseStudyLearning />} />
          <Route path={`/solutions`} element={<Solutions />} />
          <Route path={`/hr`} element={<SolutionsHR />} />
          <Route path={`/education`} element={<SolutionsEducation />} />
          <Route path={`/finance`} element={<SolutionsFinance />} />
          <Route path={`/travel`} element={<SolutionsTravel />} />
          <Route path={`/health`} element={<SolutionsHealth />} />
          <Route path={`/realestate`} element={<SolutionsRealEstate />} />
        </Routes>
        {/* <Routes>
          <Route path={`/stagging/`} element={<Landing />} />
          <Route path={`/stagging/contact`} element={<Contactus />} />
          <Route path={`/stagging/about`} element={<Aboutus />} />
          <Route path={`/stagging/newsroom`} element={<Newsroom />} />
          <Route path={`/stagging/resources`} element={<Resources />} />
          <Route path={`/stagging/accountingfinance`} element={<AccountingFinance />} />
          <Route path={`/stagging/cta`} element={<CTA />} />
          <Route path={`/stagging/csa`} element={<CSA />} />
          <Route path={`/stagging/pricingcsa`} element={<PricingCSA />} />
          <Route path={`/stagging/news`} element={<News />} />
          <Route path={`/stagging/casestudy`} element={<Casestudy />} />
          <Route path={`/stagging/solutions`} element={<Solutions />} />
        <Route
          path={`/stagging/travel-assistant`}
          element={<CaseStudyTravelAssistant />}
        />
        <Route path={`/stagging/codibot-ai`} element={<CaseStudyCodibot />} />
        <Route
          path={`/stagging/students-learning`}
          element={<CaseStudyLearning />}
        />
        <Route path={`/stagging/education`} element={<SolutionsEducation />} />
        <Route path={`/stagging/hr`} element={<SolutionsHR />} />
        <Route path={`/stagging/travel`} element={<SolutionsTravel />} />
        <Route path={`/stagging/finance`} element={<SolutionsFinance />} />
        <Route path={`/stagging/health`} element={<SolutionsHealth />} />
        <Route
          path={`/stagging/realestate`}
          element={<SolutionsRealEstate />}
        />
        {/* </Routes> */}
        <Footer />
      </main>
    </>
  );
}

export default App
