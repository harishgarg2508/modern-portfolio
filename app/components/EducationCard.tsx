import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  achievements: string[];
  courses: string[];
  color: string;
}

interface Props {
  education: Education;
  // index: number;
  isLeft: boolean;
}

export default function EducationCard({ education, isLeft }: Props) {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      x: isLeft ? -50 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`flex justify-center items-center mb-20 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`relative w-full lg:w-[calc(50%-40px)] ${isLeft ? 'lg:mr-10' : 'lg:ml-10'}`}
      >
        {/* Connection Line */}
        <div 
          className={`hidden lg:block absolute top-10 w-10 h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50
            ${isLeft ? 'right-[-40px]' : 'left-[-40px]'}`}
        />
        
        {/* Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-700/30"
        >
          {/* Glowing Background */}
          <div className={`absolute inset-0 bg-gradient-to-r from-${education.color}-500/10 to-purple-500/10 rounded-2xl`} />
          
          {/* Content */}
          <div className="relative">
            <motion.h3 
              variants={childVariants}
              className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              {education.degree}
            </motion.h3>
            
            <motion.h4 
              variants={childVariants}
              className="text-xl text-gray-300 mb-4"
            >
              {education.field}
            </motion.h4>

            <motion.div variants={childVariants} className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5 text-blue-400" />
                {education.duration}
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-purple-400" />
                {education.institution}, {education.location}
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-5 h-5 text-green-400" />
                {education.grade}
              </div>
            </motion.div>

            <motion.div 
              variants={childVariants}
              className="mt-6"
            >
              <h5 className="text-lg font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Key Achievements
              </h5>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                {education.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              variants={childVariants}
              className="mt-6"
            >
              <h5 className="text-lg font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                Key Courses
              </h5>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((course, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}