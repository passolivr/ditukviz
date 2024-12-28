import React from 'react';
import { ThumbsUp, MessageCircle, Share } from 'lucide-react';

interface FacebookUIProps {
  content: string;
  page: string;
  image?: string;
}

export function FacebookUI({ content, page, image }: FacebookUIProps) {
  return (
    <div className="bg-white border rounded-lg max-w-2xl w-full mx-auto">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            {page[0]}
          </div>
          <div>
            <h3 className="font-semibold">{page}</h3>
            <span className="text-gray-500 text-sm">Szponzorált</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-4">{content}</p>
        {image && (
          <img src={image} alt="" className="w-full rounded-lg mb-4" />
        )}
      </div>
      <div className="border-t p-2 flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg">
          <ThumbsUp className="w-5 h-5" /> Tetszik
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg">
          <MessageCircle className="w-5 h-5" /> Komment
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg">
          <Share className="w-5 h-5" /> Megosztás
        </button>
      </div>
    </div>
  );
}