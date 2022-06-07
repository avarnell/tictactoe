import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Game} from "./components/Game/Game";
import {GameProvider} from "./context/GameContext";

function App() {
    return (
        <GameProvider>
            <div className="App">
                <div className="app-wrapper">
                    <Header />
                    <Game />
                </div>
            </div>
        </GameProvider>
    );
}

export default App;
