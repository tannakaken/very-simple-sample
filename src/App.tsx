import { useState } from 'react'
import { VFXProvider, VFX } from 'react-vfx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <VFXProvider>
      <div className="app-container">
        <VFX>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </VFX>
        
        <VFX shader="glitch">
          <h1>React + Vite</h1>
        </VFX>
        
        <div className="card">
          <VFX shader="pixelate">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </VFX>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <VFX shader="duotone" uniforms={{ color1: [1, 0, 1], color2: [0, 1, 1] }}>
          <p className="read-the-docs">
            Click on the React and Vite logos to learn more
          </p>
        </VFX>
      </div>
    </VFXProvider>
  )
}

export default App