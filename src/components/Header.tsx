import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-blue-800">Dr. Isabelle Schyns</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-blue-600 hover:text-blue-800">Accueil</Link></li>
            <li><Link to="/expertise" className="text-blue-600 hover:text-blue-800">Parcours & Expertise</Link></li>
            <li><Link to="/services" className="text-blue-600 hover:text-blue-800">Services</Link></li>
            <li><Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <Globe className="text-blue-600" />
          <select className="bg-white border border-blue-300 rounded px-2 py-1">
            <option value="fr">FR</option>
            <option value="de">DE</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;