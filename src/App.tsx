import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Text from './components/text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Text.Title>Vite + React</Text.Title>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click this <Link to="tentang" data-testid="tentang-link">Tentang</Link> to go to Tentang page.
      </p>
    </>
  )
}

export default App
