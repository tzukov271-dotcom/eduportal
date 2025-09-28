export type Question = {
  text: string;
  answers: string[];
  correctAnswer: number;
};

export type Stage = {
  id: string;
  title: string;
  description: string;
  type: 'quiz' | 'puzzle' | 'matching';
  questions: Question[];
};