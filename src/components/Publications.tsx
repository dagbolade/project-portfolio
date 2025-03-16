import React from 'react';

const publications = [
 
  {
    title: 'Automated Radiology Report Generation',
    status: 'In Review for conference submission',
    type: 'Journal Article'
  }
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Publications
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {pub.title}
                </h3>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mr-2">
                    {pub.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {pub.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}