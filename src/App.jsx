import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState()

  return (
    <>
      <div>
        <div className='m-auto'>
          <img
            src="./react.svg"
            alt="imagem-personagem"
            className='w-10 h-10'
          />
        </div>

        <div>
          <h1>Titulo</h1>
          <p>Espécie: </p>
          <p>Gênero: </p>
          <p>Origem: </p>
          <p>Localidade: </p>
          <p>Criada: </p>
        </div>

        <form>
          <div>
            <input
              type="text"
              placeholder='Id do Personagem'
            />
            <button>Buscar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
