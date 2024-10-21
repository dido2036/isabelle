import React from 'react';

const Expertise: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Parcours & Expertise</h1>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Formation universitaire</h2>
        <p className="mb-4">Université Catholique de Louvain (UCL)</p>
        
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Spécialisations</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Thérapie systémique</li>
          <li>Hypnose</li>
          <li>Traitement du trauma</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Expérience professionnelle</h2>
        <p>20 ans d'expérience en psychologie clinique et pédiatrique</p>
      </div>
    </div>
  );
};

export default Expertise;