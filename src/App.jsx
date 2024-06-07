import { useEffect, useState } from 'react';
import './App.css';
import imgPadrao from './assets/personagem.jpg';

function App() {
  const [id, setId] = useState('');
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
    if (!id || id <= 0) {
      setNome('???');
      setImagem(imgPadrao);
      setStatus('???');
      setEspecie('???');
      setGenero('???');
      setOrigem('???');
      setLocalidade('???');
      setCriada('???');
      setEpisodio(['???']);
      return;
    }
    
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
  };

  useEffect(() => {
    buscarPersonagem();
  }, [id]);

  const AvancarId = () => {
    setId((CharId) => parseInt(CharId) + 1);
  };

  const VoltarId = () => {
    setId((prevId) => (parseInt(prevId) > 1 ? parseInt(prevId) - 1 : 1));
  };

  return (
    <>
      <div className='text-zinc-900 w-full'>
        <div className='h-60 flex justify-center'>
          <button type='button' onClick={VoltarId}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-16 text-slate-50"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          </button>
            <img
              src={imagem || imgPadrao}
              alt="personagem"
              className='w-60 h-full mx-4 rounded-full'
            />

          <button type='button' onClick={AvancarId}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-16 text-slate-50"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
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
          <div className='relative'>
            <input
              type="text"
              className='text-xl w-full my-[6px] border-solid border border-black rounded-md bg-none p-1'
              placeholder='Id de personagem'
              value={id}            
              onChange={(element) => setId(parseInt(element.target.value) || '')} 
              maxLength="3"             
            />
            {/*<label className='absolute left-3 top-2 pointer-events-none text-lg'>Personagem</label>*/}
          </div>
            <button
              type='button'
              className='w-full bg-zinc-900 text-slate-200 text-xl p-2 rounded-md leading-5'
              onClick={buscarPersonagem}
            >Buscar
            </button>
        </form>
        </div>

        
      </div>
    </>
  )
}

export default App
