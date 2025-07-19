import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { introStory } from '../../data/gameData';
import { CharacterDialogue } from '../CharacterDialogue';

interface IntroScreenProps {
  onContinue: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onContinue }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const totalSteps = 6; // ナレーション + 4つの対話 + 最終部分

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onContinue();
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-accent mb-4">物語の始まり</h2>
            </div>
            <div className="bg-black/20 p-6 rounded-lg">
              <p className="text-gray-200 leading-relaxed text-lg">
                {introStory.narration[0]}
              </p>
            </div>
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-400">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">
                  さ
                </div>
                <div>
                  <h3 className="font-bold text-pink-300 mb-2">さくら（天然系の女性）</h3>
                  <p className="text-gray-200 leading-relaxed">
                    {introStory.dialogues[0].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <CharacterDialogue
              character="カケル"
              text={introStory.dialogues[1].text}
            />
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-400">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">
                  さ
                </div>
                <div>
                  <h3 className="font-bold text-pink-300 mb-2">さくら（天然系の女性）</h3>
                  <p className="text-gray-200 leading-relaxed">
                    {introStory.dialogues[2].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <CharacterDialogue
              character="カケル"
              text={introStory.dialogues[3].text}
            />
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-black/20 p-6 rounded-lg">
              <p className="text-gray-200 leading-relaxed text-lg mb-4">
                {introStory.finalNarration[0]}
              </p>
            </div>
            
            <div className="bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-400">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">
                  さ
                </div>
                <div>
                  <h3 className="font-bold text-pink-300 mb-2">さくら（天然系の女性）</h3>
                  <p className="text-gray-200 leading-relaxed">
                    {introStory.finalDialogue.text}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black/20 p-6 rounded-lg">
              <div className="space-y-2">
                {introStory.conclusion.map((line, index) => (
                  <p key={index} className="text-gray-200 leading-relaxed text-lg">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-3xl w-full bg-black/40 backdrop-blur-sm border-primary/20 p-8">
        <div className="space-y-8">
          {renderContent()}
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index <= currentStep ? 'bg-accent' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={handleNext}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full"
            >
              {currentStep < totalSteps - 1 ? '次へ' : '謎解き開始'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IntroScreen;