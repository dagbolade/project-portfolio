import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:dagbolade72@gmail.com"
            className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-indigo-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Email</p>
                <p className="text-sm text-gray-500">dagbolade72@gmail.com</p>
              </div>
            </div>
          </a>

          <a
            href="tel:+447414283865"
            className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-indigo-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Phone</p>
                <p className="text-sm text-gray-500">+44 7414 283865</p>
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/dagbolade"
            className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center">
              <Linkedin className="h-6 w-6 text-indigo-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                <p className="text-sm text-gray-500">linkedin.com/in/dagbolade</p>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/dagbolade"
            className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center">
              <Github className="h-6 w-6 text-indigo-600" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">GitHub</p>
                <p className="text-sm text-gray-500">github.com/dagbolade</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}