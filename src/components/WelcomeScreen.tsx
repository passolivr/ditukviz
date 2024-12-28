import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center">
      <img 
        src="src/ditus.png" 
        alt="DITA" 
        className="w-32 h-32 mx-auto mb-6 rounded-full" 
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
  Internetes csalások<br />felismerése
</h1>

      <h2 className="text-xl text-blue-600 mb-4">
        Kvízjáték
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Ebben a játékban megtanulhatja felismerni a
        különböző internetes csalási kísérleteket. Minden kérdésnél döntse el,
        hogy valódi vagy csalás az adott helyzet.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left">
        <h3 className="font-semibold text-blue-900 mb-2">
          Biztonsági tanácsok:
        </h3>
        <ul className="list-disc list-inside text-blue-800 space-y-2">
          <li>Mindig ellenőrizze a feladó email címét és a domain neveket</li>
          <li>
            A bankok sosem kérnek személyes adatokat e-mailben vagy SMS-ben
          </li>
          <li>Legyen gyanakvó a sürgető, fenyegető üzenetekkel</li>
          <li>Ha túl szép hogy igaz legyen, általában csalás</li>
        </ul>
      </div>

      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition inline-flex items-center gap-2"
      >
        Kezdés
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}