import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Dr. Isabelle Schyns</h3>
            <p>Psychologue clinicienne</p>
            <p>20 ans d'expérience</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>Adresse: [Adresse à Gemmenich]</p>
            <p>Téléphone: [Numéro de téléphone]</p>
            <p>Email: [Adresse email]</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Langues</h3>
            <p>Français</p>
            <p>Deutsch</p>
            <p>English</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Dr. Isabelle Schyns. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;