import { useState } from "react";


function App() {
  // estado para iniciar o relogio
  const [valor, setValor] = useState(0);
  // estado para parar o relogio
  const [pare, setPare] = useState()

  // Função para iniciar
  function start(){
    const time = setInterval(() => {
      setValor(valor => valor + 1);
    }, 1000)

    setPare(time);
  }

  // Função para parar

  function stop(){
    clearInterval(pare);
  }

  // função para reiniciar

  function reset(){
    setValor(0);

  }

  return (
    <>
    <h1>Tempo: {valor}</h1>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
    </>
      
  );
}

export default App;
