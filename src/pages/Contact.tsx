import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Informations de contact</h2>
          <div className="space-y-4">
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
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Formulaire de contact</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;