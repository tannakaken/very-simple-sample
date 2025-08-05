import { useState } from 'react'
import { VFXProvider, VFXDiv } from 'react-vfx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <VFXProvider>
      <div className="app-container">
        <VFXDiv>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </VFXDiv>
        
        <VFXDiv shader="glitch">
          <h1>React + Vite</h1>
        </VFXDiv>
        
        <div className="card">
          <VFXDiv shader="pixelate">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </VFXDiv>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <VFXDiv shader="duotone" uniforms={{ color1: [1, 0, 1], color2: [0, 1, 1] }}>
          <p className="read-the-docs">
            Click on the React and Vite logos to learn more
          </p>
        </VFXDiv>
      </div>
    </VFXProvider>
  )
}

export default App