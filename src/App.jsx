import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState()

  return (
    <>
      <div>
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <h1>Teste</h1>
        </div>
      </div>


      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
