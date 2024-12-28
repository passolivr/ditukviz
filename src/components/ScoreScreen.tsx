import React from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

interface ScoreScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export function ScoreScreen({ score, total, onRestart }: ScoreScreenProps) {
  const percentage = (score / total) * 100;

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center">
      <Trophy
        className={`w-16 h-16 mx-auto mb-6 ${
          percentage >= 80 ? 'text-yellow-500' : 'text-blue-600'
        }`}
      />

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Befejezted a kvízt!
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        Eredménye: {score} / {total} pont ({Math.round(percentage)}%)
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left">
        <h3 className="font-semibold text-blue-900 mb-2">
          Biztonsági tanácsok:
        </h3>
        <ul className="list-disc list-inside text-blue-800 space-y-2">
          <li>Mindig ellenőrizze a feladó email címét és domain nevét</li>
          <li>Ne adjon ki személyes adatokat emailben vagy telefonon</li>
          <li>Kerülje a gyanús linkekre való kattintást</li>
          <li>Használjon erős jelszavakat és kétfaktoros hitelesítést</li>
          <li>Ha bizonytalan, kérjen segítséget családtagjaitól</li>
          <li>Telepítsen vírusirtót és tartsa naprakészen</li>
        </ul>
      </div>

      <button
        onClick={onRestart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition inline-flex items-center gap-2"
      >
        <RefreshCw className="w-5 h-5" />
        Újrakezdés
      </button>
    </div>
  );
}
