import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Ending } from '../../types/game';
import { CharacterDialogue } from '../CharacterDialogue';

interface EndingScreenProps {
  ending: Ending;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const EndingScreen: React.FC<EndingScreenProps> = ({
  ending,
  score,
  totalQuestions,
  onRestart,
}) => {
  const getScoreColor = () => {
    if (score <= 1) return 'text-red-400';
    if (score === 2) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getEndingIcon = () => {
    switch (ending.type) {
      case 'bad':
        return '🌅';
      case 'good':
        return '✨';
      case 'perfect':
        return '💎';
      default:
        return '🌟';
    }
  };

  const getEndingBgColor = () => {
    switch (ending.type) {
      case 'bad':
        return 'bg-orange-900/30 border-orange-400/30';
      case 'good':
        return 'bg-yellow-900/30 border-yellow-400/30';
      case 'perfect':
        return 'bg-green-900/30 border-green-400/30';
      default:
        return 'bg-gray-900/30 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full bg-black/40 backdrop-blur-sm border-primary/20 p-8">
        <div className="space-y-8">
          {/* Score display */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">謎解き完了！</h2>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="text-6xl">{getEndingIcon()}</div>
              <div>
                <p className="text-gray-300 text-lg">あなたの正解数</p>
                <p className={`text-4xl font-bold ${getScoreColor()}`}>
                  {score} / {totalQuestions}
                </p>
              </div>
            </div>
          </div>

          {/* Ending content */}
          <div className={`p-8 rounded-lg border ${getEndingBgColor()}`}>
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-4">{ending.title}</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                {ending.description}
              </p>
            </div>

            {/* Character final dialogues */}
            <div className="space-y-4">
              <CharacterDialogue
                character="さくら"
                text={ending.sakuraDialogue}
              />

              <CharacterDialogue
                character="カケル"
                text={ending.kakeruDialogue}
              />
            </div>
          </div>

          {/* Achievement summary */}
          <div className="bg-black/20 p-6 rounded-lg">
            <h4 className="text-accent font-bold text-lg mb-4 text-center">
              🏆 あなたの冒険の記録
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl mb-2">🗼</div>
                <p className="text-sm text-gray-300">ポートタワー</p>
                <p className="text-xs text-gray-400">探索完了</p>
              </div>
              <div>
                <div className="text-2xl mb-2">⛵</div>
                <p className="text-sm text-gray-300">海洋博物館</p>
                <p className="text-xs text-gray-400">探索完了</p>
              </div>
              <div>
                <div className="text-2xl mb-2">💕</div>
                <p className="text-sm text-gray-300">LOVEモニュメント</p>
                <p className="text-xs text-gray-400">探索完了</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onRestart}
              className="bg-accent hover:bg-accent/90 text-black font-bold px-8 py-3 text-lg rounded-full"
            >
              もう一度挑戦する
            </Button>
            
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg rounded-full"
            >
              最初から始める
            </Button>
          </div>

          {/* Thank you message */}
          <div className="text-center text-gray-400 text-sm">
            <p>神戸の謎解きゲームをお楽しみいただき、ありがとうございました！</p>
            <p className="mt-2">実際の神戸観光の際は、ぜひこれらのスポットを訪れてみてください。</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EndingScreen;