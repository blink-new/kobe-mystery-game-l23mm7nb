import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface TitleScreenProps {
  onStart: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-black/40 backdrop-blur-sm border-primary/20 text-center p-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow leading-tight">
              港のまち 神戸に眠る謎と、
              <br />
              <span className="text-accent">3つのカケラ</span>
            </h1>
            
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto">
              ヒントは"見える場所"にある。2人で協力し、3つのスポットを巡って、港町・神戸に隠された秘密を解き明かそう
            </p>
          </div>

          <div className="py-8">
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-sm text-gray-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  🗼
                </div>
                <p>ポートタワー</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  ⛵
                </div>
                <p>海洋博物館</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  💕
                </div>
                <p>LOVEモニュメント</p>
              </div>
            </div>
          </div>

          <Button
            onClick={onStart}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            謎解きを始める
          </Button>

          <div className="text-xs text-gray-400 mt-4">
            <p>推奨プレイ時間：約10分</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TitleScreen;