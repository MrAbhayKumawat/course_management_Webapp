import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">CourseHub</span>
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
          >
            <User className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;