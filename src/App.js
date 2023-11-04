import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freecodecampLogo from './imgs/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numclics, setNumClics] = useState(0); 

  const manejarClick = () =>{
    setNumClics(numclics + 1);
    console.log("Click");
  }
  const reiniciarCotador =()=>{
    setNumClics(0);
    console.log("reiniciar Contador");
  }

  return (
    <div className="App">
      <div className='freecodeCamp-logo-contendor'>
        <img 
          className='frecodecamp-logo'
          src={freecodecampLogo}
          alt='FreeCodeCamp Logo'/>
      </div>
      <div className='contenedor-principal'>
        <Contador
            numclics = {numclics}
        />
        <Boton
          texto='Click'
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarCotador}
        />
        
      </div>
    </div>
  );
}

export default App;
