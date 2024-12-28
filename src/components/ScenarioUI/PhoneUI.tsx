import React from 'react';
import { Phone, X } from 'lucide-react';

interface PhoneUIProps {
  caller: string;
}

export function PhoneUI({ caller }: PhoneUIProps) {
  return (
    <div className="max-w-sm mx-auto bg-gray-100 rounded-3xl p-4 border">
      <div className="bg-white rounded-xl p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{caller}</h3>
        <p className="text-green-600 mb-4">Bejövő hívás</p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-red-500 text-white p-3 rounded-full">
            <X className="w-6 h-6 mx-auto" />
          </button>
          <button className="bg-green-500 text-white p-3 rounded-full">
            <Phone className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}