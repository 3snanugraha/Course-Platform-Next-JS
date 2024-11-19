'use client'
import { nunito } from "../../components/Fonts";
import { Button } from "../../components/Button";
import { useState } from "react";

interface Course {
  id: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: {
    en: string;
    id: string;
  };
  lessons: number;
  image: string;
}

const courses: Course[] = [
  {
    id: "forex-basics",
    title: {
      en: "Forex Trading Basics",
      id: "Dasar Trading Forex"
    },
    description: {
      en: "Learn the fundamentals of forex trading, including currency pairs, pips, and basic market analysis.",
      id: "Pelajari dasar-dasar trading forex, termasuk pasangan mata uang, pip, dan analisis pasar dasar."
    },
    level: "Beginner",
    duration: {
      en: "4 weeks",
      id: "4 minggu"
    },
    lessons: 12,
    image: "/courses/forex-basics.svg"
  },
  {
    id: "technical-analysis",
    title: {
      en: "Technical Analysis Mastery",
      id: "Penguasaan Analisis Teknikal"
    },
    description: {
      en: "Master chart patterns, indicators, and technical analysis tools for better trading decisions.",
      id: "Kuasai pola grafik, indikator, dan alat analisis teknikal untuk keputusan trading yang lebih baik."
    },
    level: "Intermediate",
    duration: {
      en: "6 weeks",
      id: "6 minggu"
    },
    lessons: 18,
    image: "/courses/technical.svg"
  },
  {
    id: "risk-management",
    title: {
      en: "Advanced Risk Management",
      id: "Manajemen Risiko Lanjutan"
    },
    description: {
      en: "Deep dive into position sizing, risk-reward ratios, and portfolio management strategies.",
      id: "Pelajari lebih dalam tentang ukuran posisi, rasio risiko-reward, dan strategi manajemen portofolio."
    },
    level: "Advanced",
    duration: {
      en: "5 weeks",
      id: "5 minggu"
    },
    lessons: 15,
    image: "/courses/risk.svg"
  }
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("en");

  const filteredCourses = courses.filter((course) =>
    course.title[language as keyof typeof course.title].toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description[language as keyof typeof course.description].toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.level.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const languages = {
    en: {
      name: "English",
      flag: "gb",
      searchPlaceholder: "Search courses...",
      availableCourses: "Available Courses",
      startCourse: "Start Course"
    },
    id: {
      name: "Indonesia",
      flag: "id",
      searchPlaceholder: "Cari kursus...",
      availableCourses: "Kursus Tersedia",
      startCourse: "Mulai Kursus"
    }
  };

  return (
    <div className={`${nunito.className} min-h-screen bg-gradient-to-br from-[#E6FFF9] via-[#B2FFE6] to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-700`}>
      <header className="fixed top-0 left-0 right-0 bg-[#00BFA6]/90 backdrop-blur-sm shadow-lg z-50 rounded-b-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">fo<span className="text-teal-200">Course</span></span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition-all group-hover:rounded-b-none">
                  <img src={`https://flagcdn.com/w20/${languages[language as keyof typeof languages].flag}.png`} alt={languages[language as keyof typeof languages].name} className="w-5 h-5 rounded-sm" />
                  <span className="text-white font-medium">{language.toUpperCase()}</span>
                  <svg 
                    className="w-4 h-4 text-white transition-transform duration-200 group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>                <div className="absolute right-0 mt-2 w-32 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hidden group-hover:block">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-white/20 transition-all"
                      onClick={() => setLanguage(code)}
                    >
                      <img src={`https://flagcdn.com/w20/${lang.flag}.png`} alt={lang.name} className="w-5 h-5 rounded-sm" />
                      <span className="text-gray-800">{code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>  
          
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#00BFA6] to-[#00A693] text-transparent bg-clip-text">
            {languages[language as keyof typeof languages].availableCourses}
          </h1>
          <div className="relative">
            <input
              type="search"
              placeholder={languages[language as keyof typeof languages].searchPlaceholder}
              className="w-full p-4 pl-12 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-2 border-[#00BFA6] focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4 relative h-48">
                <img
                  src={course.image}
                  alt={course.title[language as keyof typeof course.title]}
                  className="w-full h-full object-cover rounded-xl"
                />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold bg-[#00BFA6] text-white">
                  {course.level}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {course.title[language as keyof typeof course.title]}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {course.description[language as keyof typeof course.description]}
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                <span>⏱️ {course.duration[language as keyof typeof course.duration]}</span>
                <span>📚 {course.lessons} lessons</span>
              </div>
              <Button
                href={`/courses/${course.id}`}
                variant="secondary"
              >
                {languages[language as keyof typeof languages].startCourse} <span className="text-xl">➡️</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}