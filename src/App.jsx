import { useState, useEffect } from 'react'
import "./App.css"
import InputCustom from './components/InputCustom';
import Generate from './components/Generate';
import CopyToClipboard from './components/Clipboard';
import InputSalute from './components/InputSalute';
import Theme from './components/Theme';
import ListPsw from './components/ListPws';

function App() {
  const [password, setPassword] = useState("");
  const [previousPassword, setPreviousPassword] = useState("");
  const [beforePreviousPassword, setBeforePreviousPassword] = useState("");
  const [auxBeforePassword, setAuxBeforePassword] = useState("");
  const [copy, setCopy] = useState("Copiar");
  const [valueNumber, setValueNumber] = useState(6);
  const [check, setCheck] = useState();
  const [salute, setSalute] = useState("");
  const [currentTheme, setCurrentTheme] = useState("claro");

  // Dispara o efeito colateral para as demais variaveis de estados.
  useEffect(() => {
    setPreviousPassword(password)
    setBeforePreviousPassword(previousPassword);
    setAuxBeforePassword(beforePreviousPassword);
  }, [password]);

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
        {/* <ul className="contentList">
          <li>{password === "" ? "" : password}</li>
          <li>{previousPassword === password ? beforePreviousPassword : previousPassword}</li>
          <li>{beforePreviousPassword === previousPassword ? beforePreviousPassword : auxBeforePassword}</li>
          
        </ul> */}
        <ListPsw auxBeforePassword={auxBeforePassword}/>
      </div>
    </main>

  )
}

export default App
