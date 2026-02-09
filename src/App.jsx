import { useState } from 'react'
import './App.css'
import EasyQuiz from './components/EasyQuiz'
import MediumQuiz from './components/MediumQuiz'
import HardQuiz from './components/HardQuiz'
import valorant from './assets/valorant.webp'

function App() {
  const [easyQuiz, setEasyQuiz] = useState(false);
  const [mediumQuiz, setMediumQuiz] = useState(false);
  const [hardQuiz, setHardQuiz] = useState(false);

  // when click on Easy Quiz, it will only show Easy Quiz
  // does not toggle between visible and hidden
  const displayEasyQuiz = () => {
    setEasyQuiz(true); 
    setMediumQuiz(false);
    setHardQuiz(false);
  }
  
  // when click on Medium Quiz, it will only show Medium Quiz
  // does not toggle between visible and hidden
  const displayMediumQuiz = () => {
    setMediumQuiz(true);
    setEasyQuiz(false);
    setHardQuiz(false);
  }

  // when click on Hard Quiz, it will only show Hard Quiz
  // does not toggle between visible and hidden
  const displayHardQuiz = () => {
    setHardQuiz(true);
    setEasyQuiz(false);
    setMediumQuiz(false);
  }

  return (
    <>
      <h1>Valorant Quiz</h1>
      <div className="card">
        <img id="valorant" src={valorant}></img>
      </div>
      <p style={{ textAlign: "center" }}>
        Test your <b>Valorant</b> knowledge with three quizzes,
        ranking from <b>easy</b> to <b>hard</b>, and
        see if you can <b>ace</b> them all.
      </p>
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
