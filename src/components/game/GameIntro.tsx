import React from 'react';
import { Rocket } from 'lucide-react';

type GameIntroProps = {
  onStart: () => void;
};

export const GameIntro: React.FC<GameIntroProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">
        Космический следопыт
      </h1>
      <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
        Добро пожаловать в архивы Центра космических исследований Беларуси! 
        Готовы ли вы разгадать тайны белорусской космонавтики?
      </p>
      <button
        onClick={onStart}
        className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-black text-xl font-bold rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
      >
        Начать путешествие
      </button>
    </div>
  );
};