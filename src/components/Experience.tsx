import React from 'react';

const experiences = [
  {
    title: 'DevOps & AI Engineer Intern',
    company: 'Yunex Traffic',
    period: 'Sep 2024 - Present',
    responsibilities: [
      'Developed the IoT Inventory Management System for real-time device tracking using Kafka and CouchDB',
      'Integrated ML models for predictive maintenance and smart traffic monitoring',
      'Deployed Kubernetes-based solutions, managing APIs with Fission',
      'Implemented GitLab CI/CD pipelines for automated deployments',
      'Led the YuDetect project, transitioning HTTP-based publishing to MQTT for detector results'
    ]
  },
  {
    title: 'AI Researcher & Developer',
    company: 'Freelance & Academic Projects',
    period: '2023 - Present',
    responsibilities: [
      'Developed AI models for football, basketball, and tennis predictions',
      'Created the Intelligent Coin Trading Platform, achieving a 10% RMSE improvement',
      'Published a COVID-19 global analysis and predictive modeling paper',
      'Created SolentBot, a voice-enabled admission chatbot for Solent University'
    ]
  },
  {
    title: 'Artificial Intelligence Engineer Intern',
    company: 'RadicalX',
    period: 'Oct 2023 - Jan 2024',
    responsibilities: [
      'Developed an AI Dev Manager using OpenAI and TensorFlow',
      'Created predictive models for customer behavior and fraud detection',
      'Enhanced marketing effectiveness by 30%'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {exp.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {exp.company} | {exp.period}
                </p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="px-4 py-5 sm:px-6">
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}