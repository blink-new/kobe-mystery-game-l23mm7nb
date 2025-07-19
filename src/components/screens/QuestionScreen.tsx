import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Question } from '../../types/game';
import { CharacterDialogue } from '../CharacterDialogue';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true);
      setTimeout(() => {
        onAnswer(selectedAnswer);
      }, 2000);
    }
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full bg-black/40 backdrop-blur-sm border-primary/20 p-8">
        <div className="space-y-8">
          {/* Progress indicator */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              問題 {questionNumber} / {totalQuestions}
            </div>
            <div className="flex space-x-2">
              {Array.from({ length: totalQuestions }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index < questionNumber - 1
                      ? 'bg-accent'
                      : index === questionNumber - 1
                      ? 'bg-primary'
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stage info */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">{question.title}</h2>
            <p className="text-accent text-lg">ステージ：{question.stage}</p>
          </div>

          {/* Character dialogues */}
          <div className="space-y-4">
            <CharacterDialogue
              character="さくら"
              text={question.sakuraDialogue}
            />

            <CharacterDialogue
              character="カケル"
              text={question.kakeruDialogue}
            />
          </div>

          {/* Mystery memo */}
          <div className="bg-amber-900/30 p-6 rounded-lg border border-amber-400/30">
            <h3 className="text-amber-300 font-bold mb-3 flex items-center">
              <span className="mr-2">📜</span>
              謎の紙のメモ
            </h3>
            <blockquote className="text-amber-100 italic border-l-4 border-amber-400 pl-4">
              {question.memo}
            </blockquote>
          </div>

          {/* Question prompt */}
          <div className="text-center">
            <p className="text-gray-200 text-lg mb-6">
              あなたのひらめきで、以下の中から正しい言葉を見つけよう！
            </p>
          </div>

          {/* Answer choices */}
          {!showResult ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.choices.map((choice) => (
                  <Button
                    key={choice.id}
                    onClick={() => handleAnswerSelect(choice.id)}
                    variant={selectedAnswer === choice.id ? 'default' : 'outline'}
                    className={`p-6 text-left h-auto transition-all duration-300 ${
                      selectedAnswer === choice.id
                        ? 'bg-primary text-white border-primary'
                        : 'bg-black/20 text-gray-200 border-gray-600 hover:bg-primary/20 hover:border-primary'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-accent text-black font-bold flex items-center justify-center">
                        {choice.id}
                      </div>
                      <span className="text-lg">{choice.text}</span>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="text-center pt-4">
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="bg-accent hover:bg-accent/90 text-black font-bold px-8 py-3 text-lg rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  答えを確定する
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className={`p-8 rounded-lg ${isCorrect ? 'bg-green-900/30 border border-green-400/30' : 'bg-red-900/30 border border-red-400/30'}`}>
                <div className="text-6xl mb-4">
                  {isCorrect ? '✅' : '❌'}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${isCorrect ? 'text-green-300' : 'text-red-300'}`}>
                  {isCorrect ? '正解！' : '不正解...'}
                </h3>
                <p className="text-gray-200 text-lg">
                  正解は <span className="font-bold text-accent">{question.correctAnswer}. {question.choices.find(c => c.id === question.correctAnswer)?.text}</span> でした
                </p>
              </div>
              
              <div className="text-gray-400">
                <p>次の問題に進みます...</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default QuestionScreen;