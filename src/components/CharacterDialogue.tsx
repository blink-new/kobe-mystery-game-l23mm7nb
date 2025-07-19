import React from 'react';
import { characters } from '../data/gameData';

interface CharacterDialogueProps {
  character: string;
  text: string;
  className?: string;
}

export const CharacterDialogue: React.FC<CharacterDialogueProps> = ({
  character,
  text,
  className = '',
}) => {
  const characterData = characters.find(c => c.name === character);
  const isKakeru = character === 'カケル';
  const isSakura = character === 'さくら';

  return (
    <div className={`flex items-start gap-4 p-4 rounded-lg border backdrop-blur-sm ${
      isKakeru 
        ? 'bg-blue-500/20 border-blue-400/30' 
        : 'bg-pink-500/20 border-pink-400/30'
    } ${className}`}>
      {/* キャラクター画像 */}
      {characterData?.imageUrl && (
        <div className="flex-shrink-0">
          <img
            src={characterData.imageUrl}
            alt={character}
            className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
          />
        </div>
      )}
      
      {/* キャラクター画像がない場合のアイコン */}
      {!characterData?.imageUrl && (
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
          isKakeru ? 'bg-blue-500' : 'bg-pink-500'
        }`}>
          {character.charAt(0)}
        </div>
      )}
      
      {/* 対話内容 */}
      <div className="flex-1">
        <div className={`font-bold mb-2 ${
          isKakeru ? 'text-blue-400' : 'text-pink-400'
        }`}>
          {character}
        </div>
        <div className="text-white/90 leading-relaxed">
          {text}
        </div>
      </div>
    </div>
  );
};