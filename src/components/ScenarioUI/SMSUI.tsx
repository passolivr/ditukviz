import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';

interface SMSUIProps {
  sender: string;
  content: string;
  time: string;
}

export function SMSUI({ sender, content, time }: SMSUIProps) {
  return (
    <div className="max-w-sm mx-auto bg-gray-100 rounded-3xl p-4 border">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm">9:41</div>
        <div className="flex items-center gap-1">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="text-sm font-medium mb-1">{sender}</div>
        <div className="text-gray-600 mb-2">{content}</div>
        <div className="text-xs text-gray-400">{time}</div>
      </div>
    </div>
  );
}