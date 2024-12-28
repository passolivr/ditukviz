import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Question } from '../types';
import { EmailUI } from './ScenarioUI/EmailUI';
import { FacebookUI } from './ScenarioUI/FacebookUI';
import { SMSUI } from './ScenarioUI/SMSUI';
import { PhoneUI } from './ScenarioUI/PhoneUI';
import { WebsiteUI } from './ScenarioUI/WebsiteUI';

interface QuizCardProps {
  question: Question;
  onAnswer: (answer: boolean) => void;
  onNext: () => void;
  answered: boolean;
  isCorrect?: boolean;
}

export function QuizCard({
  question,
  onAnswer,
  onNext,
  answered,
  isCorrect,
}: QuizCardProps) {
  const renderScenarioUI = () => {
    switch (question.type) {
      case 'email':
      case 'bank':
        return (
          <EmailUI
            from={question.from || 'bank@example.com'}
            subject={question.subject || 'Fontos értesítés'}
            content={question.scenario}
            date={question.date || '2024. március 14. 10:30'}
          />
        );
      case 'facebook':
        return (
          <FacebookUI
            content={question.scenario}
            page={question.page || 'Egészség és Wellness'}
            image={question.image}
          />
        );
      case 'sms':
        return (
          <SMSUI
            sender={question.from || 'Magyar Posta'}
            content={question.scenario}
            time="10:30"
          />
        );
      case 'phone':
        return (
          <PhoneUI
            caller={question.from || 'Microsoft Support'}
            duration={question.duration}
          />
        );
      case 'website':
        return (
          <WebsiteUI
            domain={question.from}
            content={question.scenario}
            image={question.image}
          />
        );
      default:
        return (
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="whitespace-pre-wrap text-gray-700">
              {question.scenario}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full">
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle className="w-6 h-6 text-amber-500" />
        <h2 className="text-xl font-semibold text-gray-800">
          Csalás vagy valódi?
        </h2>
      </div>

      <div className="mb-6">{renderScenarioUI()}</div>

      {!answered ? (
        <div className="flex gap-4">
          <button
            onClick={() => onAnswer(true)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Csalás
          </button>
          <button
            onClick={() => onAnswer(false)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Valódi
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div
            className={`flex items-center gap-2 p-4 rounded-lg ${
              isCorrect ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600" />
            )}
            <p
              className={`font-medium ${
                isCorrect ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {isCorrect ? 'Helyes válasz!' : 'Sajnos nem helyes!'}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">{question.explanation}</p>
          </div>
          <button
            onClick={onNext}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
          >
            Tovább
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
