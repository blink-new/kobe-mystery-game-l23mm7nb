export interface Question {
  id: number;
  title: string;
  stage: string;
  description: string;
  memo: string;
  sakuraDialogue: string;
  kakeruDialogue: string;
  choices: Choice[];
  correctAnswer: string;
}

export interface Choice {
  id: string;
  text: string;
}

export interface GameState {
  currentScreen: 'title' | 'intro' | 'question' | 'ending';
  currentQuestionIndex: number;
  answers: string[];
  score: number;
}

export interface Character {
  name: string;
  description: string;
  imageUrl?: string;
}

export interface Ending {
  type: 'bad' | 'good' | 'perfect';
  title: string;
  description: string;
  sakuraDialogue: string;
  kakeruDialogue: string;
  imageDescription: string;
}