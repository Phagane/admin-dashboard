import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Layouts/Header';
import AdminSignIn from './components/Authentication/AdminSignIn';
import ApplicationForm from './components/Applicationpage/ApplicationForm';
import PropertiesPage from './components/Propertiespage/PropertiesPage';
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <main className='app-main'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in"  element={<AdminSignIn />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/properties-page" element={<PropertiesPage />} />
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