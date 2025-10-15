"use client";

import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  const education = [
    {
      degree: "Masters in Artificial Intelligence",
      institution: "Open University (Konza)",
      period: "2025 - Present",
    },
    {
      degree: "Bachelor's Degree in Applied Science",
      institution: "Technical University of Mombasa",
      period: "2020 - 2024",
      details: "Electronics and Instrumentation",
    },
  ];

  const experience = [
    {
      role: "Digital Marketing",
      company: "Accord Medical Supplies",
      period: "September 2025 - Present",
      description: "Managing digital marketing campaigns and online presence.",
    },
    {
      role: "Graphic Designer & Digital Marketer",
      company: "Amani CBO & HeroesForHer (Nigeria)",
      period: "May 2025 - August 2025",
      description: "Volunteer graphic design and digital marketing for NGOs.",
    },
    {
      role: "Graphic Designer",
      company: "Elimu Centre Malindi",
      period: "January 2025 - April 2025",
      description: "Enhanced skills in graphic design, SEO, and web development.",
    },
  ];

  const certifications = [
    "Software Engineering - ALX Africa (Full Stack)",
    "Artificial Intelligence - ALX Africa",
    "Machine Learning - Braitacademy (Ongoing)",
    "Frontend Development - Power Learn Project",
    "Computer Packages - ElgonView College",
  ];

  // motion variants for smooth animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="mx-auto w-24 h-1 bg-primary rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            A glimpse into my academic path, professional journey, and skills development.
          </p>
        </motion.div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(260px,auto)]">
          {/* Education Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="col-span-1 md:col-span-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/30 dark:border-gray-800/50 p-8 rounded-3xl shadow-[8px_8px_20px_#d1d5db,-8px_-8px_20px_#ffffff4d] dark:shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#1f2937]"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-7 w-7 text-primary" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-gray-50 dark:bg-gray-800/70 p-4 rounded-xl shadow-inner"
                >
                  <h4 className="font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                  {edu.details && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.details}</p>
                  )}
                  <p className="text-sm text-primary">{edu.institution}</p>
                  <p className="text-xs text-gray-500 font-mono">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/30 dark:border-gray-800/50 p-8 rounded-3xl shadow-[8px_8px_20px_#d1d5db,-8px_-8px_20px_#ffffff4d] dark:shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#1f2937]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-7 w-7 text-primary" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.li
                  key={cert}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="text-sm text-gray-600 dark:text-gray-300 flex gap-2 items-start"
                >
                  <span className="text-primary text-lg leading-none mt-[2px]">▹</span>
                  <span>{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="col-span-1 md:col-span-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/30 dark:border-gray-800/50 p-8 rounded-3xl shadow-[8px_8px_20px_#d1d5db,-8px_-8px_20px_#ffffff4d] dark:shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#1f2937]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-7 w-7 text-primary" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role + exp.company}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-gray-50 dark:bg-gray-800/70 p-5 rounded-xl shadow-inner"
                >
                  <h4 className="font-bold text-gray-800 dark:text-gray-100">{exp.role}</h4>
                  <p className="text-sm text-primary">{exp.company}</p>
                  <p className="text-xs text-gray-500 font-mono mb-2">{exp.period}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
