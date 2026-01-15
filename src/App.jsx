import { useState } from 'react'
import './App.css'
import EasyQuiz from './components/EasyQuiz'
import MediumQuiz from './components/MediumQuiz'

function App() {
  const [count, setCount] = useState(0)
  const [easyQuiz, setEasyQuiz] = useState(false);
  const [mediumQuiz, setMediumQuiz] = useState(false);

  const displayEasyQuiz = () => {
    setEasyQuiz(true); 
    setMediumQuiz(false);
  }
  
  const displayMediumQuiz = () => {
    setMediumQuiz(true);
    setEasyQuiz(false);
  }

  return (
    <>
      <h1>Quiz Time</h1>
      <div className="card">

        <div className="button-row">
            <button onClick={displayEasyQuiz}>Easy Quiz</button>
            <button onClick={displayMediumQuiz}>Medium Quiz</button>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
        </div>
        
        <div className="content">
          <div className={easyQuiz ? "display-block" : "display-none"}>
            <EasyQuiz />
          </div>

          <div className={mediumQuiz ? "display-block" : "display-none"}>
            <MediumQuiz />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
