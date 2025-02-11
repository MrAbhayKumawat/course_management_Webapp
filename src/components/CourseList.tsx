import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search, Clock, Users, ThumbsUp } from 'lucide-react';
import { RootState } from '../store/store';
import { setSearchTerm } from '../store/coursesSlice';

const CourseList = () => {
  const dispatch = useDispatch();
  const { courses, searchTerm } = useSelector((state: RootState) => state.courses);

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses or instructors..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 bg-white shadow-sm"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <Link
            key={course.id}
            to={`/course/${course.id}`}
            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`absolute top-4 right-4 px-3 py-1 text-sm font-medium rounded-full ${
                course.enrollmentStatus === 'Open' 
                  ? 'bg-green-100 text-green-800'
                  : course.enrollmentStatus === 'In Progress'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {course.enrollmentStatus}
              </span>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {course.name}
              </h2>
              
              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <Users className="h-4 w-4" />
                {course.instructor}
              </p>
              
              <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {course.likes}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseList;