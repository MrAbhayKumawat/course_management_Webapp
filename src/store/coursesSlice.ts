import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from '../types/course';
import { mockCourses } from '../data/mockData';

interface CoursesState {
  courses: Course[];
  searchTerm: string;
}

const initialState: CoursesState = {
  courses: mockCourses,
  searchTerm: '',
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    updateCourseProgress: (state, action: PayloadAction<{ courseId: number; studentId: number; progress: number }>) => {
      const course = state.courses.find(c => c.id === action.payload.courseId);
      if (course) {
        const student = course.students.find(s => s.id === action.payload.studentId);
        if (student) {
          student.progress = action.payload.progress;
        }
      }
    },
    toggleCourseCompletion: (state, action: PayloadAction<{ courseId: number; studentId: number }>) => {
      const course = state.courses.find(c => c.id === action.payload.courseId);
      if (course) {
        const student = course.students.find(s => s.id === action.payload.studentId);
        if (student) {
          student.completed = !student.completed;
          student.progress = student.completed ? 100 : student.progress;
        }
      }
    },
    updateCourseLikes: (state, action: PayloadAction<{ courseId: number; likes: number }>) => {
      const course = state.courses.find(c => c.id === action.payload.courseId);
      if (course) {
        course.likes = action.payload.likes;
      }
    },
  },
});

export const { setSearchTerm, updateCourseProgress, toggleCourseCompletion, updateCourseLikes } = coursesSlice.actions;
export default coursesSlice.reducer;