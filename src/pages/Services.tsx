import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Services & Accompagnement</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Thérapie individuelle et familiale</h2>
          <p>Accompagnement personnalisé pour adultes, enfants et familles.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Accompagnement enfants/adolescents</h2>
          <p>Soutien spécialisé pour les jeunes en développement.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Supervision et intervention de crise</h2>
          <p>Assistance professionnelle pour les situations d'urgence.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Trauma et hypnose thérapeutique</h2>
          <p>Approches spécialisées pour le traitement des traumatismes.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;