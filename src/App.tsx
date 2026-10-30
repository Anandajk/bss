/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopUtilityBar } from './components/TopUtilityBar';
import { MainNavbar } from './components/MainNavbar';
import { MarqueeTicker } from './components/MarqueeTicker';
import { HeroSlider } from './components/HeroSlider';
import { QuickAccessCards } from './components/QuickAccessCards';
import { InstitutionalStats } from './components/InstitutionalStats';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyBSSSection } from './components/WhyBSSSection';
import { DirectorDeskSection } from './components/DirectorDeskSection';
import { PlacementsSection } from './components/PlacementsSection';
import { CampusLifeSection } from './components/CampusLifeSection';
import { NewsEventsSection } from './components/NewsEventsSection';
import { GallerySection } from './components/GallerySection';
import { CampusesSection } from './components/CampusesSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { ScrollReveal, ScrollProgressBar } from './components/ScrollReveal';

// Modals
import { ApplicationModal } from './components/ApplicationModal';
import { EnquiryModal } from './components/EnquiryModal';
import { BrochureModal } from './components/BrochureModal';
import { VirtualTourModal } from './components/VirtualTourModal';

// Dedicated Full Pages
import { AboutPage } from './pages/AboutPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { CampusPage } from './pages/CampusPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  // Modals state
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyProgramTarget, setApplyProgramTarget] = useState<string | undefined>(undefined);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isVirtualTourModalOpen, setIsVirtualTourModalOpen] = useState(false);

  // Scroll to top on page change
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApply = (programName?: string) => {
    setApplyProgramTarget(programName);
    setIsApplyModalOpen(true);
  };

  const handleOpenBrochure = () => {
    setIsBrochureModalOpen(true);
  };

  const handleOpenEnquiry = () => {
    setIsEnquiryModalOpen(true);
  };

  const handleOpenVirtualTour = () => {
    setIsVirtualTourModalOpen(true);
  };

  const handleSelectProgram = (programId: string) => {
    setSelectedProgram(programId);
    navigateTo('programs');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#c59b27] selection:text-[#0a1f44]">
      {/* Top viewport scroll progress indicator (Framer Motion) */}
      <ScrollProgressBar />

      {/* 1. Top Utility Header Bar (Yenepoya Style) */}
      <TopUtilityBar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenVirtualTour={handleOpenVirtualTour}
        onNavigate={navigateTo}
      />

      {/* 2. Main University Sticky Navbar with Mega Menu */}
      <MainNavbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenApply={() => handleOpenApply()}
        onOpenBrochure={handleOpenBrochure}
        onOpenEnquiry={handleOpenEnquiry}
        onSelectProgram={handleSelectProgram}
      />

      {/* 3. Urgent Admissions & News Marquee Ticker */}
      <MarqueeTicker
        onOpenApply={() => handleOpenApply()}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Page View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Cinematic Hero Slider */}
            <HeroSlider
              onOpenApply={() => handleOpenApply()}
              onOpenBrochure={handleOpenBrochure}
              onOpenVirtualTour={handleOpenVirtualTour}
              onNavigatePrograms={() => navigateTo('programs')}
            />

            {/* Overlapping Quick Access 4-Card Hub (Yenepoya Signature) */}
            <ScrollReveal direction="up" distance={30} delay={0.1} amount={0.05}>
              <QuickAccessCards
                onOpenApply={() => handleOpenApply()}
                onNavigate={navigateTo}
                onOpenVirtualTour={handleOpenVirtualTour}
              />
            </ScrollReveal>

            {/* Key Statistics & Milestone Counters */}
            <ScrollReveal direction="up" distance={45} delay={0.1} amount={0.15}>
              <div className="mt-8 md:mt-12">
                <InstitutionalStats />
              </div>
            </ScrollReveal>

            {/* Academic Programs Hub */}
            <ScrollReveal direction="up" distance={40} delay={0.1} amount={0.1}>
              <ProgramsSection
                onOpenApply={handleOpenApply}
                onOpenBrochure={handleOpenBrochure}
                selectedProgramId={selectedProgram}
              />
            </ScrollReveal>

            {/* Why BSS Foundation (Beyond Education Philosophy) */}
            <ScrollReveal direction="up" distance={40} delay={0.1} amount={0.1}>
              <WhyBSSSection />
            </ScrollReveal>

            {/* Leadership Message / Director's Desk */}
            <ScrollReveal direction="zoom" distance={30} delay={0.1} amount={0.15}>
              <DirectorDeskSection
                onOpenApply={() => handleOpenApply()}
              />
            </ScrollReveal>

            {/* Placements & Corporate Recruiter Showcase (Highest 22 LPA) */}
            <ScrollReveal direction="up" distance={40} delay={0.1} amount={0.1}>
              <PlacementsSection
                onOpenApply={() => handleOpenApply()}
                onOpenBrochure={handleOpenBrochure}
              />
            </ScrollReveal>

            {/* Campus Life & Infrastructure Showcase */}
            <ScrollReveal direction="up" distance={40} delay={0.1} amount={0.1}>
              <CampusLifeSection
                onOpenVirtualTour={handleOpenVirtualTour}
                onOpenApply={() => handleOpenApply()}
              />
            </ScrollReveal>

            {/* News, Circulars & Upcoming Events */}
            <ScrollReveal direction="up" distance={40} delay={0.1} amount={0.1}>
              <NewsEventsSection
                onOpenApply={() => handleOpenApply()}
                onOpenEnquiry={handleOpenEnquiry}
              />
            </ScrollReveal>

            {/* Photo Gallery with Lightbox */}
            <ScrollReveal direction="up" distance={40} delay={0.1} amount={0.1}>
              <GallerySection />
            </ScrollReveal>

            {/* Campuses & Contact Inquiry Desk */}
            <ScrollReveal direction="up" distance={40} delay={0.1} amount={0.1}>
              <CampusesSection
                onOpenApply={() => handleOpenApply()}
              />
            </ScrollReveal>
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenApply={() => handleOpenApply()}
            onOpenBrochure={handleOpenBrochure}
          />
        )}

        {currentPage === 'programs' && (
          <div className="pt-6">
            <ProgramsSection
              onOpenApply={handleOpenApply}
              onOpenBrochure={handleOpenBrochure}
              selectedProgramId={selectedProgram}
            />
          </div>
        )}

        {currentPage === 'admissions' && (
          <AdmissionsPage
            onOpenApply={() => handleOpenApply()}
            onOpenBrochure={handleOpenBrochure}
          />
        )}

        {currentPage === 'placements' && (
          <PlacementsPage
            onOpenApply={() => handleOpenApply()}
            onOpenBrochure={handleOpenBrochure}
          />
        )}

        {currentPage === 'campus' && (
          <CampusPage
            onOpenVirtualTour={handleOpenVirtualTour}
            onOpenApply={() => handleOpenApply()}
          />
        )}

        {currentPage === 'gallery' && (
          <div className="pt-6">
            <GallerySection />
          </div>
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenApply={() => handleOpenApply()}
          />
        )}
      </main>

      {/* Yenepoya-style Right-Side Sticky Floating Quick Actions */}
      <FloatingActions
        onOpenApply={() => handleOpenApply()}
        onOpenEnquiry={handleOpenEnquiry}
        onOpenBrochure={handleOpenBrochure}
        onOpenVirtualTour={handleOpenVirtualTour}
      />

      {/* Comprehensive Multi-Column Institutional Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenApply={() => handleOpenApply()}
        onOpenBrochure={handleOpenBrochure}
        onOpenVirtualTour={handleOpenVirtualTour}
      />

      {/* Interactive Modal Overlays */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        preselectedProgram={applyProgramTarget}
      />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />

      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />

      <VirtualTourModal
        isOpen={isVirtualTourModalOpen}
        onClose={() => setIsVirtualTourModalOpen(false)}
        onOpenApply={() => {
          setIsVirtualTourModalOpen(false);
          handleOpenApply();
        }}
      />
    </div>
  );
}
