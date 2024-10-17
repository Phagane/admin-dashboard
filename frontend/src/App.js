import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Layouts/Header';
import AdminSignIn from './components/Authentication/AdminSignIn';
import ApplicationForm from './components/Applicationpage/ApplicationForm';
import PropertiesPage from './components/Propertiespage/PropertiesPage';
import ApplicationView from './components/Applicationpage/ApplicationView';
import PropertyDetailsPage from './components/Applicationpage/PropertyDetailsPage';
import PropertyDetails from './components/Propertiespage/PropertyDetails';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <main className='app-main'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in"  element={<AdminSignIn />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/application-view" element={<ApplicationView />} />
          <Route path="/properties-page" element={<PropertiesPage />} />
          <Route path="/applications/:id" element={<PropertyDetailsPage />} />
          <Route path="/property/:id" element={<PropertyDetails />} /> {/* Property Details */}
        </Routes>
      </main>
    </div>
  )
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;