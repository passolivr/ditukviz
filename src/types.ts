export interface Question {
  id: number;
  scenario: string;
  image?: string;
  isPhishing: boolean;
  explanation: string;
  type: 'bank' | 'phone' | 'facebook' | 'sms' | 'email' | 'website';
  from?: string;
  subject?: string;
  date?: string;
  page?: string;
  duration?: string;
}

export interface QuizState {
  screen: 'welcome' | 'quiz' | 'score';
  currentQuestion: number;
  score: number;
  answered: boolean;
  showExplanation: boolean;
  lastAnswerCorrect?: boolean;
}