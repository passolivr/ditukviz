import React from 'react';
import { Lock } from 'lucide-react';

interface WebsiteUIProps {
  domain: string;
  content: string;
  image?: string;
}

export function WebsiteUI({ domain, content, image }: WebsiteUIProps) {
  return (
    <div className="bg-white border rounded-lg max-w-2xl w-full mx-auto">
      {/* Browser chrome */}
      <div className="bg-gray-100 border-b rounded-t-lg p-2">
        <div className="flex items-center gap-2 px-2">
          <div className="flex-1 bg-white rounded flex items-center gap-2 px-2 py-1">
            <Lock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 text-sm font-mono flex-1">{domain}</span>
          </div>
        </div>
      </div>
      
      {/* Website content */}
      <div className="p-6">
        {image && (
          <div className="mb-6">
            <img src={image} alt="" className="w-full h-48 object-cover rounded-lg" />
          </div>
        )}
        <div className="space-y-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">
              ⚠️ Figyelmeztetés: A fiókja zárolva
            </div>
            <div className="prose mx-auto">
              <div className="whitespace-pre-wrap text-left">{content}</div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded">
                Tovább a fizetéshez
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}