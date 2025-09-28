import React, { useState } from 'react';
import { Question } from '../../types/game';

type QuizProps = {
  questions: Question[];
  onComplete: (score: number) => void;
};

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(score);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="space-y-6">
      <div className="text-white text-lg">
        {question.text}
      </div>
      
      <div className="space-y-3">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={showResult}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              showResult
                ? index === question.correctAnswer
                  ? 'bg-green-500 text-white'
                  : selectedAnswer === index
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-700 text-gray-300'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {answer}
          </button>
        ))}
      </div>

      {showResult && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
        >
          {currentQuestion + 1 < questions.length ? 'Следующий вопрос' : 'Завершить'}
        </button>
      )}

      <div className="text-white text-sm">
        Вопрос {currentQuestion + 1} из {questions.length}
      </div>
    </div>
  );
};