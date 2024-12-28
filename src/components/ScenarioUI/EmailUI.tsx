import React from 'react';
import { Mail, User, Clock } from 'lucide-react';

interface EmailUIProps {
  from: string;
  subject: string;
  content: string;
  date: string;
}

export function EmailUI({ from, subject, content, date }: EmailUIProps) {
  return (
    <div className="bg-white border rounded-lg max-w-2xl w-full mx-auto">
      <div className="border-b p-4">
        <div className="flex items-center gap-2 mb-2">
          <User className="w-5 h-5 text-gray-500" />
          <span className="font-medium">Feladó:</span>
          <span>{from}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Mail className="w-5 h-5 text-gray-500" />
          <span className="font-medium">Tárgy:</span>
          <span>{subject}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-500" />
          <span>{date}</span>
        </div>
      </div>
      <div className="p-4 whitespace-pre-wrap">
        {content}
      </div>
    </div>
  );
}