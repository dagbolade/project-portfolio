import React from 'react';
import { Code2, Database, Cloud, Terminal, Brain, Network, Apple as Api, GitBranch, Cpu, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = {
  programming: [
    'Python', 'Java', 'JavaScript', 'SQL', 'Bash',
    'Flask', 'FastAPI', 'Streamlit', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'
  ],
  cloud: [
    'AWS', 'Azure', 'Kubernetes', 'Docker', 'Fission',
    'GitLab CI/CD', 'Terraform', 'Ansible'
  ],
  iot: [
    'MQTT', 'SNMP', 'Kafka', 'Karapace', 'NGSI-LD',
    'Sensor Integration', 'Real-time Processing'
  ],
  ai: [
    'XGBoost', 'CatBoost', 'Random Forest', 'LSTM',
    'Sports Analytics', 'Medical AI', 'NLP', 'Computer Vision', 'Time Series Forecasting'
  ],
  Analysis:[
    'Tableau', 'PowerBI', 'Excel', 'Pandas','SQL', 'Data Cleaning', 'Data Visualisation'
  ],
  dataPipeline: [
    'End-to-end Data Flows',
    'Message Brokers',
    'Latency Optimisation',
    'Throughput Analysis',
    'Data Validation'
  ],
  database: [
    'NoSQL (CouchDB)',
    'Time-series Data',
    'Data Retention',
    'Performance Tuning',
    'Schema Design'
  ],
  api: [
    'REST APIs',
    'API Testing',
    'Data Validation',
    'Monitoring',
    'Documentation'
  ],
  systemsIntegration: [
    'Cross-component Integration',
    'Debugging',
    'Monitoring',
    'Alerting',
    'System Architecture'
  ]
};

const SkillCard = ({ icon: Icon, title, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="absolute -top-4 -left-4 flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-500 text-white shadow-lg">
        <Icon className="h-6 w-6" />
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full hover:bg-indigo-200 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Technical Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive skill set across multiple domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard icon={Code2} title="Programming & Development" skills={skills.programming} delay={0.1} />
          <SkillCard icon={Cloud} title="Cloud & DevOps" skills={skills.cloud} delay={0.2} />
          <SkillCard icon={Terminal} title="IoT & Data Engineering" skills={skills.iot} delay={0.3} />
          <SkillCard icon={Brain} title="AI & Machine Learning" skills={skills.ai} delay={0.4} />
          <SkillCard icon={Workflow} title="Data Pipeline Engineering" skills={skills.dataPipeline} delay={0.5} />
          <SkillCard icon={Database} title="Database Management" skills={skills.database} delay={0.6} />
          <SkillCard icon={Api} title="API Development" skills={skills.api} delay={0.7} />
          <SkillCard icon={Network} title="Systems Integration" skills={skills.systemsIntegration} delay={0.8} />
        </div>
      </div>
    </section>
  );
}