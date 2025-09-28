import React from 'react';
import { GameContainer } from './components/game/GameContainer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed py-8 px-4"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")'
        }}
      >
        <GameContainer />
      </div>
    </div>
  );
}

export default App;