export type EnrollmentStatus = 'Open' | 'Closed' | 'In Progress';

export interface SyllabusItem {
  week: number;
  topic: string;
  content: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  progress?: number;
  completed?: boolean;
}

export interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: EnrollmentStatus;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: SyllabusItem[];
  students: Student[];
  likes?: number;
}