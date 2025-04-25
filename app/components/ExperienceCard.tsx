import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
  logo: string;
}

export const ExperienceCard = ({
  title,
  company,
  period,
  description,
  index,
  logo,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group max-w-4xl mx-auto"
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="relative p-6 lg:p-10 bg-black border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-purple-500/10 rounded-xl self-start"
          >
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-md"
            />
          </motion.div>

          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-purple-400 transition-colors">
              {title}
              <motion.span
                whileHover={{ scale: 1.2, rotate: 45 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.span>
            </h3>
            <p className="text-purple-300 text-lg lg:text-xl">{company}</p>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base text-purple-400/80">
            <Calendar className="w-6 h-6 sm:w-5 sm:h-5" />
            {period}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 leading-relaxed text-base lg:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
    </motion.div>
  );
};
