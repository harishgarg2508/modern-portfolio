import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Mail, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  {
    id: 1,
    icon: Github,
    url: 'https://github.com/harishgarg2508',
    label: '. GitHub',
    hoverBg: 'group-hover:bg-[#333333]',
    iconColor: 'group-hover:text-white'
  },
  {
    id: 2,
    icon: Linkedin,
    url: 'https://linkedin.com/in/harishgarg2508',
    label: '.  LinkedIn',
    hoverBg: 'group-hover:bg-[#0077b5]',
    iconColor: 'group-hover:text-white'
  },
  {
    id: 3,
    icon: Code2,
    url: 'https://leetcode.com/rishushar123321',
    label: '.  LeetCode',
    hoverBg: 'group-hover:bg-[#FFA116]',
    iconColor: 'group-hover:text-black'
  },
  {
    id: 4,
    icon: Twitter,
    url: 'https://twitter.com/yourusername',
    label: '.  Twitter',
    hoverBg: 'group-hover:bg-[#1DA1F2]',
    iconColor: 'group-hover:text-white'
  },
  {
    id: 5,
    icon: Mail,
    url: 'mailto:harishgarg.tech@gmail.com',
    label: '.  Email',
    hoverBg: 'group-hover:bg-[#EA4335]',
    iconColor: 'group-hover:text-white'
  },
  {
    id: 6,
    icon: Instagram,
    url: 'https://instagram.com/harishgarg2508',
    label: '.  Instagram',
    hoverBg: 'group-hover:bg-[#e300f6]',
    iconColor: 'group-hover:text-white'
  }
];

export default function SocialLinks() {
  return (
    <>
      {/* Desktop version */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="relative">
          {/* Glowing background line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20" />

          <div className="relative space-y-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Animated background glow with modified shake effect */}
                <motion.div
                  className={`absolute -inset-2 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 ${link.hoverBg}`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -180, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Icon wrapper */}
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block p-3 rounded-full border border-white/10 transition-all duration-300
                    ${link.hoverBg} bg-gray-900/50 backdrop-blur-sm
                    text-gray-400 ${link.iconColor}
                    hover:border-transparent hover:shadow-lg
                    hover:shadow-[${link.hoverBg}]/20`}
                  whileHover={{ scale: 1.5, rotate: [0, -180, 0] }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

                  {/* Tooltip */}
                  <div className="absolute left-14 top-1/2 -translate-y-1/2 hidden group-hover:block">
                    <div className={`${link.hoverBg} px-3 py-1 rounded-lg text-white shadow-lg transition-all duration-300`}>
                      <p className="text-sm font-medium whitespace-nowrap">{link.label}</p>
                      <div className={`absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-8 border-transparent ${link.hoverBg} border-r-[16px]`} />
                    </div>
                  </div>
                </motion.a>

                {/* Connection line */}
                <div className={`absolute left-1/2 -translate-x-1/2 h-6 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent
                  transition-all duration-300 group-hover:via-current ${link.iconColor}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
      className="fixed bottom-4 left-0 right-0 mx-auto w-fit z-50 block lg:hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex gap-3 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-lg">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full transition-all duration-300 text-gray-400 active:scale-95"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
    </>
  );
}