import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ChevronDown, ChevronUp, Clock, MapPin, BookOpen } from 'lucide-react';
import { RootState } from '../store/store';

const CourseDetails = () => {
  const { id } = useParams();
  const course = useSelector((state: RootState) => 
    state.courses.courses.find(c => c.id === Number(id))
  );
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{course.name}</h1>
            <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-800">
              {course.enrollmentStatus}
            </span>
          </div>

          <div className="mb-8">
            <p className="text-xl text-gray-600 mb-2">Instructor: {course.instructor}</p>
            <p className="text-gray-700">{course.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>{course.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <BookOpen className="h-5 w-5" />
              <span>{course.schedule}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Prerequisites</h2>
            <ul className="list-disc list-inside space-y-2">
              {course.prerequisites.map((prereq, index) => (
                <li key={index} className="text-gray-700">{prereq}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Syllabus</h2>
            <div className="space-y-4">
              {course.syllabus.map((item) => (
                <div
                  key={item.week}
                  className="border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                    onClick={() => setExpandedWeek(expandedWeek === item.week ? null : item.week)}
                  >
                    <span className="font-medium">Week {item.week}: {item.topic}</span>
                    {expandedWeek === item.week ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  {expandedWeek === item.week && (
                    <div className="px-4 py-3 bg-white">
                      <p className="text-gray-700">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;