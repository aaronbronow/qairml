import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-slate-950 text-slate-100 font-mono overflow-hidden">
      <div id="header" className="w-full h-8 flex bg-[#1a1c21]">
        <h1 className="text-1xl font-bold">[MONITOR]</h1>
        <div id="attribute-bar">
          <label htmlFor="attributes" className="ml-2">Attributes discovered:</label>
          <span id="attributes" className="ml-2 text-green-400">0%</span>
        </div>
        <div id="score-bar">
          <label htmlFor="score" className="ml-4">Score:</label>
          <span id="score" className="ml-2 text-green-400">0</span>
        </div>
        <div id="deck-bar">
          <label htmlFor="deck" className="ml-4">Cards remaining:</label>
          <span id="deck" className="ml-2 text-green-400">52</span>
        </div>
      </div>

      <div id="game-table" className="flex flex-col flex-1 items-center justify-between p-4">

        <div id="subject-area" className="w-3/4 h-2/4 bg-[#1a1c21] rounded-lg flex flex-col justify-center items-center">
          [SUBJECT AREA] Build a hand to buy an attribute.
          <div id="attribute-menu" className="grid grid-cols-3 gap-4 w-full mt-4">
            <div id="attribute-menu-1pt">
              [ATTRIBUTE MENU] 
              <br/>1pt attributes go here.
            </div>
            <div id="attribute-menu-5pt">
              [ATTRIBUTE MENU] <br/>5pt attributes go here.
            </div>
            <div id="attribute-menu-10pt">
              [ATTRIBUTE MENU] <br/>10pt attributes go here.
            </div>
          </div>
        </div>
        
        <div id="hand-area" className="w-3/4 h-3/4 bg-[#1a1c21] rounded-lg flex justify-center items-center mt-4">
          [HAND AREA] Your hand goes here.
          <div id="draw-pile">
            [DRAW PILE] Click to draw a card.
          </div>
          <div id="discard-pile">
            [DISCARD PILE] Discarded cards go here.
          </div>
          <div id="active-hand">
            [ACTIVE HAND] Cards in your hand go here.
            <div id="card-1">
              [CARD 1]
            </div>
            <div id="card-2">
              [CARD 2]
            </div>
            <div id="card-3">
              [CARD 3]
            </div>
            <div id="card-4">
              [CARD 4]
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
