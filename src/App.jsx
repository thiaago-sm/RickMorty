import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [id, setId] = useState('1');
  const [imagem, setImagem] = useState('');
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');
  const [especie, setEspecie] = useState('');
  const [genero, setGenero] = useState('');
  const [origem, setOrigem] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [criada, setCriada] = useState('');
  const [episodio, setEpisodio] = useState([]);

  const buscarPersonagem = async () => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    
    const response = await fetch(url);
    const personagem = await response.json();
  
    setNome(personagem.name);
    setImagem(personagem.image);
    setStatus(personagem.status);
    setEspecie(personagem.species);
    setGenero(personagem.gender);
    setOrigem(personagem.origin.name);
    setLocalidade(personagem.location.name);
    setCriada(personagem.created.substring(0, 10));
    setEpisodio(personagem.episode.map(ep => ep.match(/(\d+)$/)[0]));
  }

  useEffect(() => {
    buscarPersonagem();
  }, []);

  const ProximoId = () => {
    setId((CharId) => CharId + 1);
  }

  return (
    <>
      <div className='text-zinc-900 w-full'>
        <div className='h-60 flex justify-center'>
          <button type='button'>Voltar</button>
            <img
              src={imagem}
              alt="personagem"
              className='w-60 h-full mx-4 rounded-full'
            />
          <button
            type='button'
            onClick={ProximoId}
          >
            Avançar
          </button>
        </div>

        <div
          className='bg-white text-[16px] text-left mt-2.5 p-6 mx-auto w-[400px] rounded-xl shadow-sm leading-8'
        >
            <p className='border-b-2'><strong>Nome: </strong>{nome}</p>
            <p className='border-b-2'><strong>Status:</strong> {status}</p>
            <p className='border-b-2'><strong>Espécie:</strong> {especie}</p>
            <p className='border-b-2'><strong>Gênero:</strong> {genero}</p>
            <p className='border-b-2'><strong>Origem:</strong> {origem}</p>
            <p className='border-b-2'><strong>Localidade:</strong> {localidade}</p>
            <p className='border-b-2'><strong>Criada:</strong> {criada}</p>
            <p className='border-b-2'><strong>Episodios:</strong> {episodio.join(', ')}</p>

          <form>
          <div>
            <input
              type="text"
              placeholder='Id do Personagem'
              className='border-solid border-red-700 m-2 text-xl'
              value={id}            
              onChange={(element) => setId(element.target.value)}              
            />
            <button
              type='button'
              className='bg-zinc-900 text-slate-200 text-xl p-1 rounded-sm leading-5'
              onClick={buscarPersonagem}
            >Buscar
            </button>
          </div>
        </form>
        </div>

        
      </div>
    </>
  )
}

export default App
