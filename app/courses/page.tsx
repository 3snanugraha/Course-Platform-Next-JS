import { nunito } from "../../components/fonts";
import { Button } from "../../components/Button";

interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  image: string;
}

const courses: Course[] = [
  {
    id: "forex-basics",
    title: "Forex Trading Basics",
    description: "Learn the fundamentals of forex trading, including currency pairs, pips, and basic market analysis.",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 12,
    image: "/courses/forex-basics.svg"
  },
  {
    id: "technical-analysis",
    title: "Technical Analysis Mastery",
    description: "Master chart patterns, indicators, and technical analysis tools for better trading decisions.",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: 18,
    image: "/courses/technical.svg"
  },
  {
    id: "risk-management",
    title: "Advanced Risk Management",
    description: "Deep dive into position sizing, risk-reward ratios, and portfolio management strategies.",
    level: "Advanced",
    duration: "5 weeks",
    lessons: 15,
    image: "/courses/risk.svg"
  }
];

export default function CoursesPage() {
  return (
    <div className={`${nunito.className} min-h-screen bg-gradient-to-br from-[#E6FFF9] via-[#B2FFE6] to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-700`}>

      <header className="fixed top-0 left-0 right-0 bg-[#00BFA6]/90 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">fo<span className="text-teal-200">Course</span></span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition-all">
                <img src="/flags/en.svg" alt="English" className="w-5 h-5 rounded-sm" />
                <span className="text-white">EN</span>
                <span className="text-white">▼</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#00BFA6] to-[#00A693] text-transparent bg-clip-text">
            Available Courses
          </h1>
          <div className="relative">
            <input
              type="search"
              placeholder="Search courses..."
              className="w-full p-4 pl-12 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-[#00BFA6] focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition-all duration-300"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4 relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold bg-[#00BFA6] text-white">
                  {course.level}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {course.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                <span>⏱️ {course.duration}</span>
                <span>📚 {course.lessons} lessons</span>
              </div>
              <Button
                href={`/courses/${course.id}`}
                variant="primary"
              >
                Start Course <span className="text-xl">➡️</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}