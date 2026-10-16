import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Directors } from './pages/Directors';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/directors" element={<Directors />} />
            <Route path="/projects" element={<Projects />} />
            
            {/* Explicit dedicated project routes */}
            <Route path="/projects/green-valley" element={<ProjectDetails />} />
            <Route path="/projects/golden-avenue" element={<ProjectDetails />} />
            <Route path="/projects/ocean-heights" element={<ProjectDetails />} />
            
            {/* Dynamic slug route for project details */}
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
