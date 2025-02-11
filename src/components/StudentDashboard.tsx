import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { RootState } from '../store/store';
import { toggleCourseCompletion } from '../store/coursesSlice';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const courses = useSelector((state: RootState) => state.courses.courses);

  const enrolledCourses = courses.filter(course =>
    course.students.some(student => student.id === currentUser.id)
  );

  const handleToggleCompletion = (courseId: number) => {
    dispatch(toggleCourseCompletion({ courseId, studentId: currentUser.id }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
        <p className="text-gray-600">Welcome back, {currentUser.name}</p>
      </div>

      <div className="space-y-6">
        {enrolledCourses.map(course => {
          const studentEnrollment = course.students.find(
            student => student.id === currentUser.id
          );

          return (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Link
                      to={`/course/${course.id}`}
                      className="text-xl font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      {course.name}
                    </Link>
                    <p className="text-gray-600">Instructor: {course.instructor}</p>
                  </div>
                  <button
                    onClick={() => handleToggleCompletion(course.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      studentEnrollment?.completed
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>{studentEnrollment?.completed ? 'Completed' : 'Mark as Complete'}</span>
                  </button>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{studentEnrollment?.progress || 0}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 rounded-full h-2"
                      style={{ width: `${studentEnrollment?.progress || 0}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>{course.schedule}</span>
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentDashboard;