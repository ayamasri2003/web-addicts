import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from './ProtectedRoute.tsx'; // Assuming you have PrivateRoutes logic implemented
import HomePage from '../features/HomePage/HomePage.tsx'; // Adjust the import path based on your folder structure
import Menu from '../features/Menu/Menu.tsx';
import WorkPage from '../features/WorkPage/WorkPage.tsx';
import ServicesPage from '../features/ServicesPage/ServicesPage.tsx';
import ContactPage from '../features/ContactPage/ContactPage.tsx';
import CareersPage from '../features/Careers/CareersPage.tsx';
import PrivacyPolicy from '../features/PrivacyPolicy/PrivacyPolicy.tsx';
import AboutPage from '../features/About/About.tsx';
import AllWork from '../features/AllWork/AllWork.tsx';
import TermsConditions from '../features/TermsConditions/TermsConditions.tsx';
import CookiesPolicies from '../features/CookiePolicies/CookiePolicies.tsx';
import WorkDetails from '../features/WorkDetails/WorkDetails.tsx';
import Project from '../features/Project/Project.tsx';
import Apply from '../features/Apply/Apply.tsx';
import Footer from '../components/atoms/Footer.tsx';
import React from 'react';


const MainRouter = () => {
    return (
        <Routes>
            {/* Protected Routes */}
            <Route element={<PrivateRoutes />}>
                
            </Route>

            {/* Public Routes */}
           

            {/* Home Page Route */}
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/allwork" element={<AllWork selectedCategory={''} />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsconditions" element={<TermsConditions />} />
            <Route path="/cookiespolicies" element={<CookiesPolicies />} />
            <Route path="/project" element={<Project />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/work-details/:title" element={<WorkDetails />} />
            <Route path="/menu" element={<Menu toggleMenu={function (): void {
                throw new Error('Function not implemented.');
            } }  />} />
            {/* Displays the HomePage component when the path is "/" */}

            {/* Default to Home Page if an unknown route is accessed */}
            <Route path="*" element={<Navigate to="/" />} />
            {/* Redirects any unknown route to the Home Page */}
        </Routes>
    );
};

export default MainRouter;
