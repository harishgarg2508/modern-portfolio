import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import EducationCard from './EducationCard';

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "2022 - 2026",
    grade: "8.05 CGPA",
    achievements: [
      "Dean's List for Academic Excellence",
      "Won 1st Prize in Hackathon"
    ],
    courses: ["Data Structures", "Algorithms", "Web Development", "React"],
    color: "blue"
  },
  {
    id: 2,
    degree: "Intermediate Education",
    field: "Science & Mathematics",
    institution: "G.S.S.S Namhol",
    location: "Bilaspur, Himachal Pradesh",
    duration: "2019 - 2021",
    grade: "86%",
    achievements: [
      "School Topper",
      "Science Olympiad Winner",
    ],
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
    color: "purple"
  }
];

export default function EducationSection() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [0, Math.random() * 100, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <motion.div
          className="inline-block mb-4"
          animate={{ rotate: [-180, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <GraduationCap className="w-16 h-16 text-blue-400 mx-auto" />
        </motion.div>
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Educational Journey
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Exploring the path of knowledge and growth through academic excellence
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div className="max-w-6xl mx-auto px-6 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
        
        {education.map((edu, index) => (
          <EducationCard 
            key={edu.id} 
            education={edu} 
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </motion.div>
    </div>
  );
}