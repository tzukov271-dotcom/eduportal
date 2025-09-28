import React, { useState } from 'react';
import { GameIntro } from './GameIntro';
import { GameStage } from './GameStage';
import { Quiz } from './Quiz';
import { gameStages } from '../../data/gameStages';

export type GameState = {
  currentStage: number;
  score: number;
  completed: boolean;
};

export const GameContainer: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    currentStage: 0,
    score: 0,
    completed: false,
  });

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleStageComplete = (score: number) => {
    setGameState(prev => ({
      ...prev,
      currentStage: prev.currentStage + 1,
      score: prev.score + score,
      completed: prev.currentStage + 1 >= gameStages.length,
    }));
  };

  if (!gameStarted) {
    return <GameIntro onStart={handleStartGame} />;
  }

  if (gameState.completed) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          Поздравляем! Вы прошли все этапы!
        </h2>
        <p className="text-xl text-white mb-4">
          Ваш итоговый счет: {gameState.score}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
        >
          Начать заново
        </button>
      </div>
    );
  }

  const currentStage = gameStages[gameState.currentStage];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <GameStage
        stage={currentStage}
        onComplete={handleStageComplete}
      />
    </div>
  );
};