import { Course } from '../types/course';

export const mockCourses: Course[] = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      }
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        progress: 60
      }
    ],
    likes: 150
  },
  {
    id: 2,
    name: 'Advanced Web Development',
    instructor: 'Jane Smith',
    description: 'Master modern web development techniques and best practices.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60',
    duration: '12 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['HTML/CSS', 'JavaScript', 'Basic React'],
    syllabus: [
      {
        week: 1,
        topic: 'Modern JavaScript',
        content: 'ES6+, async programming, and modern JavaScript patterns.'
      },
      {
        week: 2,
        topic: 'Advanced React',
        content: 'React hooks, context, and performance optimization.'
      }
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        progress: 30
      }
    ],
    likes: 230
  },
  {
    id: 3,
    name: 'Data Science Fundamentals',
    instructor: 'Michael Chen',
    description: 'Introduction to data science concepts, statistics, and Python programming.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=60',
    duration: '10 weeks',
    schedule: 'Fridays, 5:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic Python', 'High School Math'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Data Science',
        content: 'Overview of data science field and basic statistical concepts.'
      }
    ],
    students: [],
    likes: 180
  },
  {
    id: 4,
    name: 'UI/UX Design Principles',
    instructor: 'Sarah Wilson',
    description: 'Learn modern UI/UX design principles and tools.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60',
    duration: '6 weeks',
    schedule: 'Tuesdays, 6:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['None'],
    syllabus: [
      {
        week: 1,
        topic: 'Design Fundamentals',
        content: 'Basic design principles and color theory.'
      }
    ],
    students: [],
    likes: 320
  },
  {
    id: 5,
    name: 'Cloud Architecture with AWS',
    instructor: 'David Miller',
    description: 'Master cloud architecture using Amazon Web Services.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
    duration: '14 weeks',
    schedule: 'Thursdays, 7:00 PM - 10:00 PM',
    location: 'Online',
    prerequisites: ['Basic Cloud Knowledge', 'Linux Fundamentals'],
    syllabus: [
      {
        week: 1,
        topic: 'AWS Basics',
        content: 'Introduction to AWS services and console.'
      }
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        progress: 25
      }
    ],
    likes: 420
  },
  {
    id: 6,
    name: 'Mobile App Design',
    instructor: 'Emily Brown',
    description: 'Create beautiful and functional mobile app designs.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60',
    duration: '8 weeks',
    schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic Design Knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Mobile Design Principles',
        content: 'Understanding mobile-first design approach.'
      }
    ],
    students: [],
    likes: 290
  },
  {
    id: 7,
    name: 'Blockchain Development',
    instructor: 'Alex Thompson',
    description: 'Learn blockchain development and smart contracts.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60',
    duration: '12 weeks',
    schedule: 'Mondays and Fridays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['JavaScript', 'Basic Cryptography'],
    syllabus: [
      {
        week: 1,
        topic: 'Blockchain Basics',
        content: 'Understanding blockchain technology and cryptocurrencies.'
      }
    ],
    students: [],
    likes: 380
  },
  {
    id: 8,
    name: 'Machine Learning Fundamentals',
    instructor: 'Robert Zhang',
    description: 'Introduction to machine learning algorithms and applications.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60',
    duration: '16 weeks',
    schedule: 'Saturdays, 10:00 AM - 1:00 PM',
    location: 'Online',
    prerequisites: ['Python', 'Linear Algebra', 'Statistics'],
    syllabus: [
      {
        week: 1,
        topic: 'ML Introduction',
        content: 'Overview of machine learning and its applications.'
      }
    ],
    students: [],
    likes: 450
  },
  {
    id: 9,
    name: 'DevOps Engineering',
    instructor: 'Mark Anderson',
    description: 'Master modern DevOps practices and tools.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60',
    duration: '10 weeks',
    schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Linux', 'Basic Programming'],
    syllabus: [
      {
        week: 1,
        topic: 'DevOps Introduction',
        content: 'Understanding DevOps principles and culture.'
      }
    ],
    students: [],
    likes: 280
  },
  {
    id: 10,
    name: 'Cybersecurity Essentials',
    instructor: 'Lisa Martinez',
    description: 'Learn fundamental cybersecurity concepts and practices.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60',
    duration: '12 weeks',
    schedule: 'Wednesdays and Fridays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Networking Basics', 'Operating Systems'],
    syllabus: [
      {
        week: 1,
        topic: 'Security Fundamentals',
        content: 'Basic security concepts and threat landscape.'
      }
    ],
    students: [],
    likes: 340
  }
];