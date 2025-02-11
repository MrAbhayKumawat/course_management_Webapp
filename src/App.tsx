import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<CourseList />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/dashboard" element={<StudentDashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;