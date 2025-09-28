import React from 'react';
import { Quiz } from './Quiz';
import { Stage } from '../../types/game';

type GameStageProps = {
  stage: Stage;
  onComplete: (score: number) => void;
};

export const GameStage: React.FC<GameStageProps> = ({ stage, onComplete }) => {
  return (
    <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">{stage.title}</h2>
      <p className="text-white mb-6">{stage.description}</p>
      
      {stage.type === 'quiz' && (
        <Quiz questions={stage.questions} onComplete={onComplete} />
      )}
    </div>
  );
};