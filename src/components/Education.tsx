import React from 'react';
import { BookOpen, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: 'aws',
    color: 'bg-orange-500'
  },
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    icon: 'aws',
    color: 'bg-orange-500'
  },
   
  {
    title: 'Create Machine Learning Models in Azure',
    issuer: 'Microsoft',
    date: '2024',
    icon: 'azure',
    color: 'bg-blue-500'
  },
  {
    title: 'Introduction to Data Analysis using Microsoft Excel',
    issuer: 'Coursera',
    date: '2024',
    icon: 'excel',
    color: 'bg-green-500'
  }
];

const education = [
  {
    degree: 'MSc in Applied AI and Data Science',
    institution: 'Solent University, UK',
    grade: 'Distinction',
    details: [
      'Dissertation: Automated Radiology Report Generation Using AI Models',
      'Awarded a Merit Scholarship for academic excellence'
    ]
  },
  {
    degree: 'BSc (Hons) in Software Engineering',
    institution: 'Solent University, UK',
    grade: '2:1',
    details: [
      'Final Year Project: Sentiment-Based Movie Recommendation System'
    ]
  }
];

const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
  >
    <div className={`h-2 ${cert.color}`} />
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-full ${cert.color} flex items-center justify-center`}>
          <Award className="h-6 w-6 text-white" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
          <p className="text-sm text-gray-500">{cert.issuer}</p>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Star className="h-4 w-4 mr-2 text-yellow-400" />
        <span>Issued {cert.date}</span>
      </div>
    </div>
  </motion.div>
);

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Education & Certifications
          </motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                  <h3 className="ml-3 text-lg leading-6 font-medium text-gray-900">
                    Education
                  </h3>
                </div>
              </div>
              <div className="border-t border-gray-200">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="px-4 py-5 sm:px-6"
                  >
                    <dt className="text-lg font-medium text-gray-900">
                      {edu.degree}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-600">
                      {edu.institution} ({edu.grade})
                      <ul className="list-disc list-inside mt-2">
                        {edu.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </dd>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid gap-6"
            >
              {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}