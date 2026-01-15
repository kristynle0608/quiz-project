import { useState } from 'react'
import './App.css'
import EasyQuiz from './components/EasyQuiz'
import MediumQuiz from './components/MediumQuiz'
import HardQuiz from './components/HardQuiz'

function App() {
  const [easyQuiz, setEasyQuiz] = useState(false);
  const [mediumQuiz, setMediumQuiz] = useState(false);
  const [hardQuiz, setHardQuiz] = useState(false);

  const displayEasyQuiz = () => {
    setEasyQuiz(true); 
    setMediumQuiz(false);
    setHardQuiz(false);
  }
  
  const displayMediumQuiz = () => {
    setMediumQuiz(true);
    setEasyQuiz(false);
    setHardQuiz(false);
  }

  const displayHardQuiz = () => {
    setHardQuiz(true);
    setEasyQuiz(false);
    setMediumQuiz(false);
  }

  return (
    <>
      <h1>Quiz Time</h1>
      <div className="card">

        <div className="button-row">
            <button onClick={displayEasyQuiz}>Easy</button>
            <button onClick={displayMediumQuiz}>Medium</button>
            <button onClick={displayHardQuiz}>Hard</button>
        </div>
        
        <div className="content">
          <div className={easyQuiz ? "display-block" : "display-none"}>
            <EasyQuiz />
          </div>

          <div className={mediumQuiz ? "display-block" : "display-none"}>
            <MediumQuiz />
          </div>

          <div className={hardQuiz ? "display-block" : "display-none"}>
            <HardQuiz />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
