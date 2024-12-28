import React, { useState } from 'react';
import { questions } from './data/questions';
import { QuizCard } from './components/QuizCard';
import { Progress } from './components/Progress';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ScoreScreen } from './components/ScoreScreen';
import { QuizState } from './types';

export default function App() {
  const [state, setState] = useState<QuizState>({
    screen: 'welcome',
    currentQuestion: 0,
    score: 0,
    answered: false,
    showExplanation: false,
    lastAnswerCorrect: undefined,
  });

  const currentQuestion = questions[state.currentQuestion];

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === currentQuestion.isPhishing;
    setState((prev) => ({
      ...prev,
      answered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      lastAnswerCorrect: isCorrect,
    }));
  };

  const handleNext = () => {
    if (state.currentQuestion < questions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answered: false,
        lastAnswerCorrect: undefined,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        screen: 'score',
      }));
    }
  };

  const handleStart = () => {
    setState((prev) => ({
      ...prev,
      screen: 'quiz',
    }));
  };

  const handleRestart = () => {
    setState({
      screen: 'welcome',
      currentQuestion: 0,
      score: 0,
      answered: false,
      showExplanation: false,
      lastAnswerCorrect: undefined,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <img src="dita.png" alt="DITA" className="h-12" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {state.screen === 'welcome' && (
            <WelcomeScreen onStart={handleStart} />
          )}

          {state.screen === 'quiz' && (
            <>
              <Progress
                current={state.currentQuestion + 1}
                total={questions.length}
                score={state.score}
              />
              <QuizCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                onNext={handleNext}
                answered={state.answered}
                isCorrect={state.lastAnswerCorrect}
              />
            </>
          )}

          {state.screen === 'score' && (
            <ScoreScreen
              score={state.score}
              total={questions.length}
              onRestart={handleRestart}
            />
          )}
        </div>
      </main>
    </div>
  );
}