import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useLenis from './hooks/useLenis';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import BookingModal from './components/BookingModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SportsPage from './pages/SportsPage';
import MembershipPage from './pages/MembershipPage';
import CoachesPage from './pages/CoachesPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Global Registration Modal State
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [preselectedPlan, setPreselectedPlan] = useState('athlete');

  // Global Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSport, setBookingSport] = useState('Cricket');
  const [bookingCoach, setBookingCoach] = useState('Court Rental Only');

  const handleOpenRegister = (planId = 'athlete') => {
    setPreselectedPlan(planId);
    setRegisterModalOpen(true);
  };

  const handleOpenBooking = (sport = 'Cricket', coach = 'Court Rental Only') => {
    setBookingSport(sport);
    setBookingCoach(coach);
    setBookingModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#06080C] text-slate-100 font-sans selection:bg-[#D4FF00] selection:text-black">
      <ScrollToTop />

      {/* Main Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Router */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onOpenRegister={handleOpenRegister} onOpenBooking={handleOpenBooking} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenRegister={handleOpenRegister} />} 
          />
          <Route 
            path="/sports" 
            element={<SportsPage onOpenBooking={handleOpenBooking} onOpenRegister={handleOpenRegister} />} 
          />
          <Route 
            path="/membership" 
            element={<MembershipPage />} 
          />
          <Route 
            path="/coaches" 
            element={<CoachesPage onOpenBooking={handleOpenBooking} />} 
          />
          <Route 
            path="/events" 
            element={<EventsPage onOpenBooking={handleOpenBooking} />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          <Route 
            path="*" 
            element={<NotFoundPage />} 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Registration Modal */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        preselectedPlanId={preselectedPlan}
      />

      {/* Interactive Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialSport={bookingSport}
        initialCoach={bookingCoach}
      />
    </div>
  );
}
