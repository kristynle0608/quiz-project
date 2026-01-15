import { useState } from 'react'
import './App.css'
import EasyQuiz from './components/EasyQuiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Quiz Time</h1>
      <div className="card">
        <EasyQuiz />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
