import React, { useState } from 'react';
import { GameState } from '../types/game';
import { questions, endings } from '../data/gameData';
import TitleScreen from './screens/TitleScreen';
import IntroScreen from './screens/IntroScreen';
import QuestionScreen from './screens/QuestionScreen';
import EndingScreen from './screens/EndingScreen';

const KobeMysteryGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentScreen: 'title',
    currentQuestionIndex: 0,
    answers: [],
    score: 0,
  });

  const handleStartGame = () => {
    setGameState(prev => ({ ...prev, currentScreen: 'intro' }));
  };

  const handleStartQuestions = () => {
    setGameState(prev => ({ ...prev, currentScreen: 'question' }));
  };

  const handleAnswerQuestion = (answer: string) => {
    const currentQuestion = questions[gameState.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    const newScore = gameState.score + (isCorrect ? 1 : 0);
    const newAnswers = [...gameState.answers, answer];

    if (gameState.currentQuestionIndex < questions.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        answers: newAnswers,
        score: newScore,
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentScreen: 'ending',
        answers: newAnswers,
        score: newScore,
      }));
    }
  };

  const handleRestart = () => {
    setGameState({
      currentScreen: 'title',
      currentQuestionIndex: 0,
      answers: [],
      score: 0,
    });
  };

  const getEnding = () => {
    if (gameState.score <= 1) return endings[0]; // bad ending
    if (gameState.score === 2) return endings[1]; // good ending
    return endings[2]; // perfect ending
  };

  return (
    <div className="min-h-screen bg-gradient-kobe">
      {gameState.currentScreen === 'title' && (
        <TitleScreen onStart={handleStartGame} />
      )}
      
      {gameState.currentScreen === 'intro' && (
        <IntroScreen onContinue={handleStartQuestions} />
      )}
      
      {gameState.currentScreen === 'question' && (
        <QuestionScreen
          question={questions[gameState.currentQuestionIndex]}
          questionNumber={gameState.currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswerQuestion}
        />
      )}
      
      {gameState.currentScreen === 'ending' && (
        <EndingScreen
          ending={getEnding()}
          score={gameState.score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default KobeMysteryGame;