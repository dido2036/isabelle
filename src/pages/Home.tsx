import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Dr. Isabelle Schyns</h1>
          <h2 className="text-2xl text-blue-600 mb-4">Psychologue clinicienne spécialisée</h2>
          <p className="text-lg text-gray-700 mb-6">
            Avec 20 ans d'expérience en psychologie, je me spécialise dans la pédiatrie et la psychologie clinique.
            Mon approche multidisciplinaire et ma formation continue me permettent d'offrir un accompagnement
            personnalisé et efficace à mes patients.
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <MapPin className="text-blue-600 mr-2" />
              <span>[Adresse à Gemmenich]</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-blue-600 mr-2" />
              <span>[Numéro de téléphone]</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-blue-600 mr-2" />
              <span>[Adresse email]</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
            Photo
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Mes domaines d'expertise</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Thérapie individuelle et familiale</li>
          <li>Accompagnement enfants et adolescents</li>
          <li>Supervision et intervention de crise</li>
          <li>Spécialisation en trauma et hypnose thérapeutique</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;