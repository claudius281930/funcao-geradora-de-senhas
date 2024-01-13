import { useState, useEffect } from 'react'
import "./App.css"
import InputCustom from './components/InputCustom';
import Generate from './components/Generate';
import CopyToClipboard from './components/Clipboard';
import InputSalute from './components/InputSalute';
import Theme from './components/Theme';

function App() {
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copiar");
  const [valueNumber, setValueNumber] = useState(6);
  const [check, setCheck] = useState();
  const [salute, setSalute] = useState("");
  const [currentTheme, setCurrentTheme] = useState("claro");
 

  useEffect(() => {
    console.log("Pagina renderizada")
  }, [password, copy, valueNumber, check, salute, currentTheme])

  return (

    <main>
      <Theme
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />

      <InputSalute setSalute={setSalute} />
      <h1>Gerador de senhas</h1>
      <div className="container">
        <InputCustom
          valueNumber={valueNumber}
          setValueNumber={setValueNumber}
          check={check}
          setCheck={setCheck}
        />

        <button
          onClick={() =>
            setPassword(Generate({ valueNumber, copy, setCopy }))}>
          Gerar senha de <strong className="digit">{valueNumber}</strong> dígitos?
        </button>

        <button onClick={() => CopyToClipboard({ password, setCopy })}>{copy}</button>

        <div>
          <strong className="password">{password}</strong>
        </div>
      </div>

      <p className="info">
        <strong>Click no botão</strong> para gerar sua senha fácil, forte e sem esforço!</p>
      <div>
        <small>{!salute ? "" : salute + " ,tudo pronto!"}</small>
      </div>
    </main>

  )
}

export default App
